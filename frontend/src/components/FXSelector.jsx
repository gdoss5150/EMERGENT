import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const FXSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handleFXToggle = (fx) => {
    setSelectedOptions(prev => ({
      ...prev,
      fx: prev.fx.includes(fx.name) 
        ? prev.fx.filter(f => f !== fx.name)
        : [...prev.fx, fx.name]
    }));
  };

  const categories = {
    'Cinematic Effects': mockData.fx.filter(f => f.category === 'cinematic'),
    'Power & Energy': mockData.fx.filter(f => f.category === 'power'),
    'Environmental': mockData.fx.filter(f => f.category === 'environmental'),
    'Glamour & Luxury': mockData.fx.filter(f => f.category === 'glamour')
  };

  const renderFXGrid = (effects) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {effects.map((fx) => (
          <Button
            key={fx.id}
            variant={selectedOptions.fx.includes(fx.name) ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.fx.includes(fx.name) 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleFXToggle(fx)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{fx.name}</span>
              <span className="text-sm text-gray-400 mb-2">{fx.description}</span>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {fx.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {fx.useCase}
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
        <h2 className="text-xl font-bold text-white">✨ Select FX</h2>
        {selectedOptions.fx.length > 0 && (
          <Badge variant="secondary" className="bg-purple-600 text-white">
            {selectedOptions.fx.length} effects
          </Badge>
        )}
      </div>

      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
        <p className="text-yellow-300 text-sm">
          💡 <strong>Pro Tip:</strong> Maximum 2 FX recommended for best results. 
          Choose effects that match your scene and mood.
        </p>
      </div>

      {Object.entries(categories).map(([categoryName, effects]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderFXGrid(effects)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FXSelector;