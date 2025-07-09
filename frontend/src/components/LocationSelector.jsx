import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const LocationSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handleLocationChange = (location) => {
    setSelectedOptions(prev => ({
      ...prev,
      location: prev.location?.id === location.id ? null : location
    }));
  };

  const categories = {
    'Urban Environments': mockData.locations.filter(l => l.category === 'urban'),
    'Luxury Venues': mockData.locations.filter(l => l.category === 'luxury'),
    'Outdoor Scenes': mockData.locations.filter(l => l.category === 'outdoor'),
    'Exotic Locations': mockData.locations.filter(l => l.category === 'exotic')
  };

  const renderLocationGrid = (locations) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((location) => (
          <Button
            key={location.id}
            variant={selectedOptions.location?.id === location.id ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.location?.id === location.id 
                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleLocationChange(location)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{location.name}</span>
              <span className="text-sm text-gray-400 mb-2">{location.description}</span>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {location.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {location.vibe}
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
        <h2 className="text-xl font-bold text-white">🌍 Select Location</h2>
        {selectedOptions.location && (
          <Badge variant="secondary" className="bg-green-600 text-white">
            {selectedOptions.location.name}
          </Badge>
        )}
      </div>

      {Object.entries(categories).map(([categoryName, locations]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderLocationGrid(locations)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LocationSelector;