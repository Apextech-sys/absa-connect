import React, { useRef, useState, useEffect } from 'react';
import { X, AlertCircle, Printer } from 'lucide-react';
import FloorPlanVisualizer from './FloorPlanVisualizer';

const ReportModal = ({ isOpen, onClose, recommendation, formData }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height: height || 400 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const { coverage, notes = [], units, pricing, needsEthernet } = recommendation;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Mesh Network Report</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          {/* Visualizer */}
          <div ref={containerRef} className="h-[400px] mb-6 bg-gray-50 rounded-lg">
            <FloorPlanVisualizer
              totalArea={formData.homeSize === 'SMALL' ? 100 : 
                        formData.homeSize === 'MEDIUM' ? 250 :
                        formData.homeSize === 'LARGE' ? 400 : 500}
              units={units}
              containerWidth={containerSize.width}
              containerHeight={containerSize.height}
            />
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-wondernet-100">Units Required</div>
              <div className="text-3xl font-bold">{units.count}</div>
            </div>
            <div>
              <div className="text-wondernet-100">Coverage</div>
              <div className="text-3xl font-bold">{coverage.highSpeed}m²</div>
              <div className="text-sm text-gray-500">High-speed coverage area</div>
            </div>
            <div>
              <div className="text-wondernet-100">Total Cost</div>
              <div className="text-3xl font-bold">${pricing.total.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Including installation</div>
            </div>
          </div>

          {/* Notes and Recommendations */}
          {notes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="text-wondernet-100" size={20} />
                Important Notes
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {notes.map((note, index) => (
                  <li key={index} className="text-gray-600">{note}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Print Button */}
          <div className="flex justify-end">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-wondernet-100 text-white rounded-lg hover:bg-wondernet-200 transition-colors"
            >
              <Printer size={20} />
              Print Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;