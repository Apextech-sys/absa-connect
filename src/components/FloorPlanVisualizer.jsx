import React, { useEffect, useRef } from 'react';

const COLORS = {
  WALL: '#2c3e50',
  HIGH_SPEED: 'rgba(52, 152, 219, 0.3)',
  MEDIUM_SPEED: 'rgba(230, 126, 34, 0.3)',
  LOW_SPEED: 'rgba(231, 76, 60, 0.3)',
  UNIT_PRIMARY: '#3498db',
  UNIT_SECONDARY: '#e67e22',
  FLOOR_LINE: '#95a5a6',
};

const FloorPlanVisualizer = ({
  formData,
  units: { count, placement } = { count: 0, placement: [] },
  containerWidth = 800,
  containerHeight = 450,
}) => {
  const canvasRef = useRef(null);

  // Generate default placement if none provided
  const generatePlacement = () => {
    const placements = [];

    if (count === 0) return placements;

    // Place primary unit near the CPE (assume 20% of the room)
    placements.push({
      x: 0.2,
      y: 0.2,
      floor: 0,
      isPrimary: true,
    });

    // Generate placements for additional units
    const unitsPerFloor = Math.ceil((count - 1) / formData.floors);
    for (let floor = 0; floor < formData.floors; floor++) {
      for (let i = 0; i < unitsPerFloor && placements.length < count; i++) {
        placements.push({
          x: 0.2 + (i * 0.6) / unitsPerFloor, // Distribute horizontally
          y: 0.5, // Place at the center vertically
          floor,
          isPrimary: false,
        });
      }
    }

    return placements;
  };

  // Draw the floor plan and unit placements
  const drawFloorPlan = (ctx, width, height) => {
    const roomWidth = 1; // Normalized room width
    const roomHeight = 1; // Normalized room height
    const scale = Math.min(width, height); // Scale factor to fit the canvas
    const offsetX = (width - roomWidth * scale) / 2;
    const offsetY = (height - roomHeight * scale) / 2;

    const placements = placement.length > 0 ? placement : generatePlacement();

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Transform for scaling and centering
    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Draw room boundary
    ctx.strokeStyle = COLORS.WALL;
    ctx.lineWidth = 0.005; // Scaled line width
    ctx.strokeRect(0, 0, roomWidth, roomHeight);

    // Draw floor lines
    for (let i = 1; i < formData.floors; i++) {
      const y = (i / formData.floors) * roomHeight;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(roomWidth, y);
      ctx.strokeStyle = COLORS.FLOOR_LINE;
      ctx.lineWidth = 0.002; // Scaled line width
      ctx.stroke();
    }

    // Calculate coverage reduction factors
    const wallFactor = Math.max(
      0.5,
      1 - formData.wallsBetweenPoints * 0.15
    );
    const floorFactor = Math.max(
      0.5,
      1 - (formData.floors - 1) * 0.25
    );
    const totalReduction = wallFactor * floorFactor;

    // Draw units and coverage areas
    placements.forEach((unit, index) => {
      const x = unit.x * roomWidth;
      const y =
        (unit.y * roomHeight) / formData.floors +
        (unit.floor * roomHeight) / formData.floors;

      // Coverage radii
      const baseRadius = 0.25; // 25% of room width
      const highSpeedRadius = baseRadius * totalReduction;
      const mediumSpeedRadius = highSpeedRadius * 1.8; // Increased from 1.5
      const lowSpeedRadius = highSpeedRadius * 3; // Increased from 2 to represent 2.4GHz's greater range

      // Draw coverage circles in reverse order (largest first for proper layering)
      [
        { radius: lowSpeedRadius, color: COLORS.LOW_SPEED },
        { radius: mediumSpeedRadius, color: COLORS.MEDIUM_SPEED },
        { radius: highSpeedRadius, color: COLORS.HIGH_SPEED },
      ].forEach(({ radius, color }) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw unit
      ctx.beginPath();
      ctx.arc(x, y, 0.03, 0, Math.PI * 2); // Unit size (3% of room width)
      ctx.fillStyle = unit.isPrimary
        ? COLORS.UNIT_PRIMARY
        : COLORS.UNIT_SECONDARY;
      ctx.fill();

      // Add unit label
      ctx.fillStyle = '#000';
      ctx.font = '0.05px Arial'; // Font size (5% of room width)
      ctx.textAlign = 'center';
      ctx.fillText(
        unit.isPrimary ? 'Router' : `Mesh ${index}`,
        x,
        y - 0.05
      );
    });

    ctx.restore();
  };

  // Effect to redraw the floor plan when data changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Adjust canvas size for high-DPI displays
    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;

    // Scale context for high-DPI
    ctx.scale(dpr, dpr);

    // Draw the floor plan
    drawFloorPlan(ctx, containerWidth, containerHeight);
  }, [formData, count, placement, containerWidth, containerHeight]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full bg-white rounded-lg shadow-md"
      />
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow text-sm">
        <div className="flex items-center mb-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: COLORS.HIGH_SPEED }}
          />
          <span className="ml-2">High Speed (500+ Mbps)</span>
        </div>
        <div className="flex items-center mb-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: COLORS.MEDIUM_SPEED }}
          />
          <span className="ml-2">Medium Speed (200-500 Mbps)</span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: COLORS.LOW_SPEED }}
          />
          <span className="ml-2">Basic Speed (50-200 Mbps)</span>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanVisualizer;
