import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const CameraSelector = ({ selectedOptions, setSelectedOptions }) => {
  const cameras = [
    { id: 1, name: 'Canon EOS R5', value: 'canon_eos_r5', brand: 'Canon', type: 'Mirrorless' },
    { id: 2, name: 'Sony FX6', value: 'sony_fx6', brand: 'Sony', type: 'Cinema' },
    { id: 3, name: 'Red Komodo 6K', value: 'red_komodo_6k', brand: 'Red', type: 'Cinema' },
    { id: 4, name: 'Leica SL2', value: 'leica_sl2', brand: 'Leica', type: 'Mirrorless' },
    { id: 5, name: 'iPhone 14 Pro', value: 'iphone_14_pro', brand: 'Apple', type: 'Mobile' }
  ];

  const lenses = [
    { id: 1, name: '24mm', value: '24mm', type: 'Wide Angle' },
    { id: 2, name: '35mm', value: '35mm', type: 'Standard' },
    { id: 3, name: '50mm', value: '50mm', type: 'Portrait' },
    { id: 4, name: '85mm', value: '85mm', type: 'Telephoto' }
  ];

  const angles = [
    { id: 1, name: 'Low Angle', value: 'low_angle', description: 'Dominance, power perspective' },
    { id: 2, name: 'High Angle', value: 'high_angle', description: 'Submission, vulnerable view' },
    { id: 3, name: 'Dutch Tilt', value: 'dutch_tilt', description: 'Chaos, dynamic energy' },
    { id: 4, name: 'Centered', value: 'centered', description: 'Power, stability' },
    { id: 5, name: 'Worm Eye', value: 'worm_eye', description: 'Extreme low, intimidating' },
    { id: 6, name: 'Over The Shoulder', value: 'over_the_shoulder', description: 'Intimate, personal' }
  ];

  const lighting = [
    { id: 1, name: 'Key Light', value: 'key_light', description: 'Primary illumination' },
    { id: 2, name: 'Rim Light', value: 'rim_light', description: 'Edge lighting, separation' },
    { id: 3, name: 'Neon Backlight', value: 'neon_backlight', description: 'Urban, colorful glow' },
    { id: 4, name: 'Ambient Haze', value: 'ambient_haze', description: 'Atmospheric, moody' },
    { id: 5, name: 'Spotlight Edge', value: 'spotlight_edge', description: 'Dramatic, focused' },
    { id: 6, name: 'Fill Light Soft', value: 'fill_light_soft', description: 'Gentle, flattering' }
  ];

  const handleCameraChange = (camera) => {
    setSelectedOptions(prev => ({
      ...prev,
      camera: camera.value
    }));
  };

  const handleLensChange = (lens) => {
    setSelectedOptions(prev => ({
      ...prev,
      lens: lens.value
    }));
  };

  const handleAngleChange = (angle) => {
    setSelectedOptions(prev => ({
      ...prev,
      angle: angle.value
    }));
  };

  const handleLightingChange = (light) => {
    setSelectedOptions(prev => ({
      ...prev,
      lighting: light.value
    }));
  };

  const handleRatioChange = (ratio) => {
    setSelectedOptions(prev => ({
      ...prev,
      ratio: ratio
    }));
  };

  const renderButtonGrid = (items, selectedValue, onSelect, colorScheme) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <Button
            key={item.id}
            variant={selectedValue === item.value ? "default" : "outline"}
            className={`p-3 h-auto text-left transition-all duration-200 ${
              selectedValue === item.value 
                ? `bg-gradient-to-r ${colorScheme} text-white shadow-lg transform scale-105` 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => onSelect(item)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-sm font-bold mb-1">{item.name}</span>
              {item.brand && <span className="text-xs text-gray-400 mb-1">{item.brand}</span>}
              {item.type && <span className="text-xs text-gray-500 mb-1">{item.type}</span>}
              {item.description && <span className="text-xs text-gray-500">{item.description}</span>}
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-white">📷 Camera Setup</h2>
        <Badge variant="secondary" className="bg-indigo-600 text-white">
          Professional Grade
        </Badge>
      </div>

      <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4 mb-4">
        <p className="text-indigo-300 text-sm">
          🎬 <strong>Cinema Quality:</strong> Professional camera systems and techniques used in actual rap videos and album covers. 
          Each setup optimized for maximum visual impact and authentic production value.
        </p>
      </div>

      {/* Camera Selection */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            📹 Camera System
            {selectedOptions.camera && (
              <Badge variant="secondary" className="bg-indigo-600 text-white">
                {cameras.find(c => c.value === selectedOptions.camera)?.name}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderButtonGrid(cameras, selectedOptions.camera, handleCameraChange, 'from-indigo-600 to-blue-600')}
        </CardContent>
      </Card>

      {/* Lens Selection */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            🔍 Lens Choice
            {selectedOptions.lens && (
              <Badge variant="secondary" className="bg-purple-600 text-white">
                {selectedOptions.lens}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderButtonGrid(lenses, selectedOptions.lens, handleLensChange, 'from-purple-600 to-pink-600')}
        </CardContent>
      </Card>

      {/* Angle Selection */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            📐 Camera Angle
            {selectedOptions.angle && (
              <Badge variant="secondary" className="bg-green-600 text-white">
                {angles.find(a => a.value === selectedOptions.angle)?.name}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderButtonGrid(angles, selectedOptions.angle, handleAngleChange, 'from-green-600 to-emerald-600')}
        </CardContent>
      </Card>

      {/* Lighting Selection */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            💡 Lighting Setup
            {selectedOptions.lighting && (
              <Badge variant="secondary" className="bg-yellow-600 text-white">
                {lighting.find(l => l.value === selectedOptions.lighting)?.name}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderButtonGrid(lighting, selectedOptions.lighting, handleLightingChange, 'from-yellow-600 to-orange-600')}
        </CardContent>
      </Card>

      {/* Image Ratio Selection */}
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            📏 Image Ratio
            {selectedOptions.ratio && (
              <Badge variant="secondary" className="bg-red-600 text-white">
                {selectedOptions.ratio}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant={selectedOptions.ratio === '9:16' ? "default" : "outline"}
              className={`p-3 h-auto text-center transition-all duration-200 ${
                selectedOptions.ratio === '9:16' 
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg transform scale-105' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
              }`}
              onClick={() => handleRatioChange('9:16')}
            >
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold mb-1">9:16</span>
                <span className="text-xs text-gray-400">Vertical / Stories</span>
              </div>
            </Button>
            <Button
              variant={selectedOptions.ratio === '16:9' ? "default" : "outline"}
              className={`p-3 h-auto text-center transition-all duration-200 ${
                selectedOptions.ratio === '16:9' 
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg transform scale-105' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
              }`}
              onClick={() => handleRatioChange('16:9')}
            >
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold mb-1">16:9</span>
                <span className="text-xs text-gray-400">Horizontal / Widescreen</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CameraSelector;