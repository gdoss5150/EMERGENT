import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const PoseSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handlePoseChange = (pose) => {
    setSelectedOptions(prev => ({
      ...prev,
      pose: prev.pose?.id === pose.id ? null : pose
    }));
  };

  const categories = {
    'With Vehicles': mockData.poses.filter(p => p.category === 'with_car'),
    'Without Vehicles': mockData.poses.filter(p => p.category === 'without_car'),
    'Universal Power Poses': mockData.poses.filter(p => p.category === 'universal')
  };

  const renderPoseGrid = (poses) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {poses.map((pose) => (
          <Button
            key={pose.id}
            variant={selectedOptions.pose?.id === pose.id ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.pose?.id === pose.id 
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handlePoseChange(pose)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{pose.name}</span>
              <span className="text-sm text-gray-400 mb-2">{pose.description}</span>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {pose.category.replace('_', ' ')}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {pose.vibe}
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
        <h2 className="text-xl font-bold text-white">🎭 Select Pose</h2>
        {selectedOptions.pose && (
          <Badge variant="secondary" className="bg-red-600 text-white">
            {selectedOptions.pose.name}
          </Badge>
        )}
      </div>

      {Object.entries(categories).map(([categoryName, poses]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderPoseGrid(poses)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PoseSelector;