import { MESH_SPECS } from '../constants/meshSpecs';

/**
 * Format room name for display
 * @param {string} room - Room identifier
 * @returns {string} Formatted room name
 */
export const formatRoomName = (room) => {
  if (room === 'otherRoom') return 'Other Room';
  return room.charAt(0).toUpperCase() + room.slice(1);
};

/**
 * Calculate coverage areas based on units and form data
 * @param {number} units - Number of mesh units
 * @param {object} formData - Form data with home specifications
 * @param {array} importantAreas - Areas marked as important for coverage
 * @returns {object} Coverage calculations for different speed tiers
 */
export const calculateCoverage = (units, formData, importantAreas = []) => {
  const { floors, wallsBetweenPoints, area } = formData;
  
  if (!area || area <= 0) {
    console.error('Invalid area:', area);
    return {
      highSpeed: 0,
      mediumSpeed: 0,
      lowSpeed: 0
    };
  }
  
  // Calculate wall factor with consideration for wall type and density
  const hasThickWalls = wallsBetweenPoints >= 3;
  const baseWallFactor = hasThickWalls ? MESH_SPECS.REDUCTION_FACTORS.THICK_WALL : MESH_SPECS.REDUCTION_FACTORS.WALL;
  
  // Progressive wall factor reduction - more aggressive with more walls
  const wallDensityMultiplier = 1 + (wallsBetweenPoints * 0.2);
  const wallFactor = Math.max(0.2, 1 - (wallsBetweenPoints * baseWallFactor * wallDensityMultiplier));
  
  // Enhanced floor factor calculation - more conservative for multi-floor
  const floorFactor = Math.max(0.3, 1 - ((floors - 1) * MESH_SPECS.REDUCTION_FACTORS.FLOOR * 1.2));
  
  // Distance-based overlap calculation with mesh backhaul consideration
  const averageDistance = Math.sqrt(area / Math.max(1, units));
  const backHaulPenalty = hasThickWalls ? 0.6 : 0.8;
  const overlapFactor = units > 1 ? 
    Math.max(0.5, 1 - (averageDistance / (2 * MESH_SPECS.COVERAGE.HIGH_SPEED))) * backHaulPenalty : 1;

  // Calculate effective radius for each speed tier
  const adjustedRadius = {
    high: Math.max(4, MESH_SPECS.COVERAGE.HIGH_SPEED * wallFactor * floorFactor),
    medium: Math.max(6, MESH_SPECS.COVERAGE.MEDIUM_SPEED * wallFactor * floorFactor * 0.8),
    low: Math.max(10, MESH_SPECS.COVERAGE.LOW_SPEED * wallFactor * floorFactor * 0.9)
  };

  // Calculate base coverage with progressive reduction for larger areas
  const areaScaleFactor = Math.max(0.7, 1 - (area / 1000));
  const baseCoverage = {
    highSpeed: Math.min(area, Math.PI * Math.pow(adjustedRadius.high, 2) * units * overlapFactor * areaScaleFactor),
    mediumSpeed: Math.min(area, Math.PI * Math.pow(adjustedRadius.medium, 2) * units * overlapFactor * areaScaleFactor * 0.85),
    lowSpeed: Math.min(area, Math.PI * Math.pow(adjustedRadius.low, 2) * units * overlapFactor * areaScaleFactor)
  };

  return baseCoverage;
};

/**
 * Determine base number of mesh units needed
 * @param {number} totalArea - Total area of the home
 * @param {object} formData - Form data with home specifications
 * @returns {number} Base number of units needed
 */
export const determineBaseUnits = (totalArea, formData) => {
  const { floors, wallsBetweenPoints, importantAreas = [] } = formData;

  // Base units calculation considering minimum coverage threshold
  let baseUnits = Math.ceil(totalArea / (MESH_SPECS.BASE_COVERAGE_AREA.HIGH_SPEED * 0.8)); // Increased base coverage

  // Adjust for wall density with consideration for wall type
  if (wallsBetweenPoints >= 3) {
    baseUnits += 2; // Thick walls require more units
  } else if (wallsBetweenPoints >= 2) {
    baseUnits += 1;
  }

  // Adjust for multi-floor setup
  if (floors > 1) {
    baseUnits = Math.max(baseUnits, Math.ceil(floors * 1.5)); // At least 1.5 units per floor
  }

  // Adjust for important areas
  if (importantAreas.length > 0) {
    baseUnits = Math.max(baseUnits, Math.ceil(importantAreas.length / 2));
  }

  // Cap at 5 units maximum
  return Math.min(5, Math.max(1, baseUnits));
};

/**
 * Adjust unit count based on devices and usage
 * @param {number} units - Initial unit count
 * @param {object} formData - Form data with device and usage information
 * @returns {number} Adjusted unit count
 */
export const adjustUnitsForDevices = (units, formData) => {
  const totalDevices = Object.values(formData.devices).reduce((sum, count) => sum + count, 0);
  const hasHighDemand = Object.values(formData.usage).some(usage => usage);
  
  let adjustedUnits = units;

  // Adjust for device count
  if (totalDevices > 15) {
    adjustedUnits += 2;
  } else if (totalDevices > 8) {
    adjustedUnits += 1;
  }

  // Adjust for high-demand usage
  if (hasHighDemand) {
    adjustedUnits = Math.ceil(adjustedUnits * 1.2); // 20% increase for high-demand
  }

  return Math.min(5, adjustedUnits);
};

/**
 * Calculate comprehensive mesh recommendation
 * @param {object} formData - Complete form data
 * @returns {object} Detailed recommendation with units, coverage, and notes
 */
export const calculateRecommendation = (formData) => {
  const totalArea = formData.area;

  // Calculate base units needed
  let units = determineBaseUnits(totalArea, formData);
  
  // Adjust units based on devices and usage
  units = adjustUnitsForDevices(units, formData);

  // Calculate coverage with adjusted units
  const coverage = calculateCoverage(units, formData, formData.importantCoverageAreas);

  // Calculate coverage percentages
  const coveragePercentages = {
    high: Math.floor((coverage.highSpeed / totalArea) * 100),
    medium: Math.floor((coverage.mediumSpeed / totalArea) * 100),
    low: Math.floor((coverage.lowSpeed / totalArea) * 100)
  };

  // Generate placement suggestions and unit coordinates
  const placementSuggestions = [];
  const unitPlacements = [];

  if (units === 1) {
    placementSuggestions.push('Central location for optimal coverage');
    unitPlacements.push({
      x: 0.5,
      y: 0.5,
      floor: 0,
      isPrimary: true
    });
  } else {
    placementSuggestions.push('Primary unit near internet entry point');
    // Place primary unit
    unitPlacements.push({
      x: 0.2,
      y: 0.2,
      floor: 0,
      isPrimary: true
    });

    if (formData.floors > 1) {
      placementSuggestions.push(`${units - 1} satellite units distributed vertically across floors`);
      placementSuggestions.push('Align units vertically when possible to maximize coverage between floors');
      
      // Distribute remaining units across floors
      const unitsPerFloor = Math.ceil((units - 1) / formData.floors);
      let remainingUnits = units - 1;
      
      for (let floor = 0; floor < formData.floors && remainingUnits > 0; floor++) {
        const floorUnits = Math.min(unitsPerFloor, remainingUnits);
        for (let i = 0; i < floorUnits; i++) {
          unitPlacements.push({
            x: 0.2 + ((i + 1) * 0.6 / (floorUnits + 1)),
            y: 0.5,
            floor,
            isPrimary: false
          });
        }
        remainingUnits -= floorUnits;
      }
    } else {
      placementSuggestions.push(`${units - 1} satellite units in star topology for maximum coverage`);
      // Distribute units in a star pattern
      for (let i = 0; i < units - 1; i++) {
        const angle = (i * 2 * Math.PI) / (units - 1);
        unitPlacements.push({
          x: 0.5 + 0.3 * Math.cos(angle),
          y: 0.5 + 0.3 * Math.sin(angle),
          floor: 0,
          isPrimary: false
        });
      }
    }
  }

  // Add specific placement suggestions for important areas
  if (formData.importantCoverageAreas?.length > 0) {
    formData.importantCoverageAreas.forEach(area => {
      placementSuggestions.push(`Ensure a mesh unit is within 10m of ${formatRoomName(area)} for optimal performance`);
    });
  }

  // Generate comprehensive notes
  const notes = [];
  
  // Coverage quality notes
  const needsEthernetForHighSpeed = coveragePercentages.high < 50;
  const needsEthernetForMediumSpeed = coveragePercentages.medium < 75;
  const needsEthernetForBasicCoverage = coveragePercentages.low < 100;

  if (needsEthernetForHighSpeed || needsEthernetForMediumSpeed || needsEthernetForBasicCoverage) {
    notes.push('⚠️ Ethernet Connection Recommended');
    
    if (needsEthernetForHighSpeed) {
      notes.push('• High-speed coverage below 50% - Ethernet-connected access points recommended for optimal performance');
    }
    
    if (needsEthernetForMediumSpeed) {
      notes.push('• Medium-speed coverage below 75% - Consider ethernet backhaul between mesh units');
    }

    if (needsEthernetForBasicCoverage) {
      notes.push('• Basic coverage below 100% - Additional ethernet-connected access points needed for complete coverage');
      notes.push('• Consider having ethernet cables installed between mesh units');
    }
  }

  // Wall density notes
  if (formData.wallsBetweenPoints >= 3) {
    notes.push('Dense wall construction detected:');
    notes.push('• Ethernet backhaul strongly recommended');
    notes.push('• Position units with minimal wall interference');
  } else if (formData.wallsBetweenPoints >= 2) {
    notes.push('Moderate wall density:');
    notes.push('• Consider ethernet backhaul for optimal performance');
  }

  // Multi-floor setup notes
  if (formData.floors > 1) {
    notes.push('Multi-floor considerations:');
    notes.push('• Ensure vertical alignment of units between floors');
    if (formData.floors > 2) {
      notes.push('• Ethernet backhaul recommended between floors');
    }
  }

  // Device and usage notes
  const totalDevices = Object.values(formData.devices).reduce((sum, count) => sum + count, 0);
  if (totalDevices > 15) {
    notes.push('High device count:');
    notes.push('• Units positioned for optimal load distribution');
    notes.push('• Consider dedicated ethernet-connected access points');
  } else if (totalDevices > 8) {
    notes.push('Moderate device load - ensure even distribution of connections');
  }

  // Important areas notes
  if (formData.importantCoverageAreas?.length > 0) {
    notes.push('Coverage optimized for specified priority areas');
  }

  return {
    units: {
      count: units,
      placement: unitPlacements,
      suggestions: placementSuggestions
    },
    coverage: {
      highSpeed: Math.min(totalArea, Math.round(coverage.highSpeed)),
      mediumSpeed: Math.min(totalArea, Math.round(coverage.mediumSpeed)),
      lowSpeed: Math.min(totalArea, Math.round(coverage.lowSpeed))
    },
    coveragePercentages,
    pricing: {
      perUnit: MESH_SPECS.UNIT_COST,
      total: units * MESH_SPECS.UNIT_COST
    },
    notes,
    needsEthernet: needsEthernetForHighSpeed || needsEthernetForMediumSpeed || formData.wallsBetweenPoints >= 2 || 
                   units >= 4 || totalDevices > 15 || formData.floors > 2,
    needsProfessionalInstall: needsEthernetForHighSpeed || needsEthernetForMediumSpeed || needsEthernetForBasicCoverage
  };
};