import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const VehicleSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handleVehicleChange = (vehicle) => {
    setSelectedOptions(prev => ({
      ...prev,
      vehicle: prev.vehicle?.id === vehicle.id ? null : vehicle
    }));
  };

  const categories = {
    'Luxury Cars': mockData.vehicles.filter(v => v.category === 'luxury'),
    'Classic Cars': mockData.vehicles.filter(v => v.category === 'classic'),
    'SUVs & Trucks': mockData.vehicles.filter(v => v.category === 'suv')
  };

  const renderVehicleGrid = (vehicles) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <Button
            key={vehicle.id}
            variant={selectedOptions.vehicle?.id === vehicle.id ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.vehicle?.id === vehicle.id 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleVehicleChange(vehicle)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{vehicle.name}</span>
              <span className="text-sm text-gray-400 mb-2">{vehicle.brand}</span>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {vehicle.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {vehicle.year}
                </Badge>
              </div>
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-white">🚗 Select Vehicle</h2>
        {selectedOptions.vehicle && (
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {selectedOptions.vehicle.name}
          </Badge>
        )}
      </div>

      {Object.entries(categories).map(([categoryName, vehicles]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderVehicleGrid(vehicles)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VehicleSelector;