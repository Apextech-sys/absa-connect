/**
 * Constants for mesh network calculations and specifications
 */
export const MESH_SPECS = {
  UNIT_COST: 750,
  HOME_SIZES: {
    SMALL: { label: 'Small (100-200m²)', min: 100, max: 200 },
    MEDIUM: { label: 'Medium (200-300m²)', min: 200, max: 300 },
    LARGE: { label: 'Large (300-400m²)', min: 300, max: 400 },
    XLARGE: { label: 'Extra Large (400m²+)', min: 400, max: 500 }
  },
  COVERAGE: {
    HIGH_SPEED: 12,    // 12m radius for high speed
    MEDIUM_SPEED: 18,  // 18m radius for medium speed
    LOW_SPEED: 25     // 25m radius for basic coverage
  },
  REDUCTION_FACTORS: {
    WALL: 0.15,
    THICK_WALL: 0.25,
    FLOOR: 0.2
  },
  BASE_COVERAGE_AREA: {
    HIGH_SPEED: 150,  // Base coverage area per unit in m²
  },
  MIN_COVERAGE: {
    HIGH_SPEED: 0.5,  // Minimum 50% high-speed coverage
    MEDIUM_SPEED: 0.75, // Minimum 75% medium-speed coverage
    LOW_SPEED: 1.0    // Minimum 100% basic coverage
  }
};

/**
 * Coverage explanation text for different speed tiers
 */
export const COVERAGE_EXPLANATIONS = {
  high: `High-Speed Coverage (300+ Mbps)
• Best for 4K streaming, gaming, and video calls
• Typically within 4-5m of mesh units with clear line of sight
• Significantly reduced by walls, floors, and distance
• Most reliable when device has direct view of mesh unit
• Recommended for home offices and gaming areas`,

  medium: `Medium-Speed Coverage (100-300 Mbps)
• Suitable for HD streaming and regular internet use
• Extends 6-8m from mesh units through 1-2 walls
• Coverage quality depends on:
  - Wall density and materials
  - Distance to nearest mesh unit
  - Connection quality between mesh units
• May experience speed variations during peak usage
• Best for general living areas and bedrooms`,

  basic: `Basic Coverage (50-100 Mbps)
• Adequate for basic browsing and email
• Reaches 10-12m from mesh units through multiple walls
• Most affected by:
  - Distance from mesh units
  - Number of walls and floors
  - Building materials
• May have occasional connectivity issues
• Suitable for IoT devices and light internet usage`
};

export default MESH_SPECS;