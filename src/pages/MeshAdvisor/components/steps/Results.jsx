import React from 'react';
import { Printer } from 'lucide-react';
import { trackEvent } from '../../../../utils/analytics';
import { formatRoomName } from '../../utils/meshCalculations';
import { COVERAGE_EXPLANATIONS } from '../../constants/meshSpecs';
import QuestionTooltip from '../QuestionTooltip';
import FloorPlanVisualizer from '../../../../components/FloorPlanVisualizer';

/**
 * Results display step
 * @param {object} props - Component props
 * @param {object} props.formData - Current form data
 * @param {object} props.recommendation - Calculated recommendation
 * @returns {JSX.Element} Results display component
 */
const Results = ({ formData, recommendation }) => {
  if (!recommendation) return null;
  
  // Calculate coverage percentages
  const totalArea = formData.area;
  
  const coveragePercentages = {
    high: Math.floor((recommendation.coverage.highSpeed / totalArea) * 100),
    medium: Math.floor((recommendation.coverage.mediumSpeed / totalArea) * 100),
    low: Math.floor((recommendation.coverage.lowSpeed / totalArea) * 100)
  };

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <div className="bg-gradient-to-br from-absa-500 to-absa-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Your Recommended Setup</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-white/80">Mesh Units</div>
            <div className="text-3xl font-bold">{recommendation.units.count}</div>
          </div>
          <div>
            <div className="text-white/80">Coverage</div>
            <div className="text-3xl font-bold">{coveragePercentages.high}% optimal</div>
            <div className="text-sm text-white/80">of your {totalArea}m² home</div>
          </div>
          <div>
            <div className="text-white/80">Total Cost</div>
            <div className="text-3xl font-bold">R{recommendation.pricing.total.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Detailed Installation Guide */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/10">
        <div className="border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Installation Guide</h2>
            <button
              onClick={() => {
                trackEvent('print_guide_clicked', {
                  mesh_units: recommendation.units.count,
                  total_area: totalArea,
                  coverage_high: coveragePercentages.high,
                  coverage_medium: coveragePercentages.medium,
                  coverage_low: coveragePercentages.low
                });
                window.print();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-absa-600 text-white rounded-lg hover:bg-absa-500 transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print Guide
            </button>
          </div>
          <p className="text-white/60">Reference: MN-{Date.now().toString(36).toUpperCase()}</p>
        </div>

        {/* Coverage Details */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">Coverage Analysis</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/80">High-Speed Coverage (500+ Mbps)</span>
                <span className="font-medium text-white">{coveragePercentages.high}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-absa-600 h-2 rounded-full" style={{ width: `${coveragePercentages.high}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/80">Medium-Speed Coverage (200-500 Mbps)</span>
                <span className="font-medium text-white">{coveragePercentages.medium}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${coveragePercentages.medium}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-white/80">Basic Coverage (50-200 Mbps)</span>
                <span className="font-medium text-white">{coveragePercentages.low}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: `${coveragePercentages.low}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Explanation */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">Coverage Explanation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-absa-900/50 rounded-lg border border-absa-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">High-Speed Coverage</h3>
                <QuestionTooltip content={COVERAGE_EXPLANATIONS.high} />
              </div>
              <p className="text-3xl font-bold text-absa-500">{coveragePercentages.high}%</p>
            </div>
            <div className="p-4 bg-orange-900/30 rounded-lg border border-orange-700/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Medium-Speed Coverage</h3>
                <QuestionTooltip content={COVERAGE_EXPLANATIONS.medium} />
              </div>
              <p className="text-3xl font-bold text-orange-500">{coveragePercentages.medium}%</p>
            </div>
            <div className="p-4 bg-red-900/30 rounded-lg border border-red-700/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Basic Coverage</h3>
                <QuestionTooltip content={COVERAGE_EXPLANATIONS.basic} />
              </div>
              <p className="text-3xl font-bold text-red-500">{coveragePercentages.low}%</p>
            </div>
          </div>
        </div>

        {/* Unit Placement Visualization */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">Coverage Map</h3>
          <div className="aspect-video relative bg-black/50 rounded-lg overflow-hidden border border-white/10">
            <FloorPlanVisualizer
              formData={formData}
              units={recommendation.units}
              containerWidth={800}
              containerHeight={450}
            />
          </div>
        </div>

        {/* Installation Steps */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold mb-4 text-white">Installation Steps</h3>
          <div className="space-y-4">
            {/* Primary Router */}
            <div className="p-4 bg-black/30 rounded-lg border border-white/10">
              <h4 className="font-medium mb-2 text-white">1. Primary Router Setup</h4>
              <ul className="space-y-2 text-white/80">
                <li>• Install in: {formatRoomName(formData.cpeLocation)}</li>
                <li>• Connect directly to Fibre CPE</li>
                <li>• Mount at 2-3m height if possible</li>
                <li>• Keep clear of metal objects</li>
                <li>• Ensure good ventilation</li>
              </ul>
            </div>

            {/* Mesh Units */}
            {recommendation.units.count > 1 && (
              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h4 className="font-medium mb-2 text-white">2. Mesh Units Placement</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Position {recommendation.units.count - 1} mesh units strategically:</li>
                  {formData.importantCoverageAreas.map((area) => (
                    <li key={area} className="ml-4">- Place a mesh unit within 10m of {formatRoomName(area)} for optimal coverage</li>
                  ))}
                  <li>• Create a "mesh network chain" where each unit can see at least two other units</li>
                  <li>• Maximum distance between units:</li>
                  <li className="ml-4">- 15m through walls</li>
                  <li className="ml-4">- 25m with direct line of sight</li>
                  {formData.floors > 1 && (
                    <>
                      <li>• Multi-floor placement:</li>
                      <li className="ml-4">- Place units near staircases or open areas between floors</li>
                      <li className="ml-4">- Ensure vertical alignment between floors when possible</li>
                      <li className="ml-4">- At least one unit per floor for optimal coverage</li>
                    </>
                  )}
                  <li>• Placement tips:</li>
                  <li className="ml-4">- Mount units at 2-3m height when possible</li>
                  <li className="ml-4">- Keep clear of metal objects, appliances, and thick walls</li>
                  <li className="ml-4">- Position units in open spaces rather than enclosed areas</li>
                </ul>
              </div>
            )}

            {/* Important Notes */}
            <div className="p-4 bg-absa-900/30 rounded-lg border border-absa-700/30">
              <h4 className="font-medium mb-2 flex items-center gap-2 text-white">
                <span className="text-absa-500">⚠️</span>
                Important Notes
              </h4>
              <div className="space-y-4 text-white/80">
                {/* Performance Recommendations */}
                <div>
                  <h5 className="font-medium text-absa-500">Understanding Ethernet Backhaul</h5>
                  <p className="mb-2 text-sm">Ethernet backhaul means connecting mesh units together using network cables instead of wireless connections. This provides:</p>
                  <ul className="space-y-1 text-sm ml-4">
                    <li>• Faster and more reliable connections between mesh units</li>
                    <li>• Better performance for all your devices</li>
                    <li>• Reduced impact from walls and interference</li>
                  </ul>
                </div>

                {/* Coverage Analysis */}
                {coveragePercentages.high < 50 && (
                  <div>
                    <h5 className="font-medium text-absa-500">Low High-Speed Coverage ({coveragePercentages.high}%)</h5>
                    <p className="text-sm">To improve coverage in your priority areas, we recommend:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Using ethernet cables to connect mesh units where possible</li>
                      <li>• Additional mesh units may be needed for optimal coverage</li>
                    </ul>
                  </div>
                )}

                {/* Wall Density Impact */}
                {formData.wallsBetweenPoints >= 2 && (
                  <div>
                    <h5 className="font-medium text-absa-500">Dense Wall Construction Detected</h5>
                    <p className="text-sm">Your home's wall construction will impact wireless performance:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Walls can reduce wireless signal strength by up to 75%, depending on:</li>
                      <li className="ml-4">- Wall thickness and construction material (concrete, brick, etc.)</li>
                      <li className="ml-4">- Metal elements within walls (pipes, electrical conduit)</li>
                      <li className="ml-4">- Number of walls between mesh units</li>
                      <li>• Using ethernet cables to connect mesh units bypasses these limitations</li>
                    </ul>
                  </div>
                )}

                {/* Usage Requirements */}
                {Object.values(formData.usage).some(v => v) && (
                  <div>
                    <h5 className="font-medium text-absa-500">High Performance Requirements Detected</h5>
                    <p className="text-sm">Based on your usage patterns (gaming, streaming, work from home):</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• Stable, high-speed connections are crucial</li>
                      <li>• Ethernet backhaul will provide the best experience</li>
                      <li>• Consider having ethernet cables installed between mesh units</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="p-6 text-center text-sm text-white/60">
          <p>For installation support: support@absaconnect.co.za</p>
          <p>Please reference your guide number when contacting support</p>
          <p className="mt-2">
            This recommendation is based on your {totalArea}m² home layout with {formData.floors} floor(s) 
            and considers factors like wall density, device count, and usage patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;