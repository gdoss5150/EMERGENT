import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Copy, Download, Save, Settings } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const PromptDisplay = ({ prompt, onCopy, selectedOptions }) => {
  const handleSettingChange = (setting, value) => {
    // This would be passed from parent component
    console.log(`Setting ${setting} to ${value}`);
  };

  const getCompletionPercentage = () => {
    const requiredFields = ['character.sex', 'character.skinTone', 'character.hairStyle'];
    const completed = requiredFields.filter(field => {
      const keys = field.split('.');
      return keys.reduce((obj, key) => obj && obj[key], selectedOptions);
    }).length;
    return Math.round((completed / requiredFields.length) * 100);
  };

  const renderSelectedSummary = () => {
    const { character, vehicle, clothing, location, pose, fx } = selectedOptions;
    
    return (
      <div className="space-y-3">
        <div className="text-sm text-gray-400">
          <strong>Character:</strong> {character.sex} • {character.skinTone} • {character.hairStyle}
        </div>
        
        {vehicle && (
          <div className="text-sm text-gray-400">
            <strong>Vehicle:</strong> {vehicle.name}
          </div>
        )}
        
        {clothing.length > 0 && (
          <div className="text-sm text-gray-400">
            <strong>Clothing:</strong> {clothing.join(', ')}
          </div>
        )}
        
        {location && (
          <div className="text-sm text-gray-400">
            <strong>Location:</strong> {location.name}
          </div>
        )}
        
        {pose && (
          <div className="text-sm text-gray-400">
            <strong>Pose:</strong> {pose.name}
          </div>
        )}
        
        {fx.length > 0 && (
          <div className="text-sm text-gray-400">
            <strong>FX:</strong> {fx.join(', ')}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="bg-black/60 backdrop-blur-lg border-green-500/30 text-white sticky top-4">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center flex items-center justify-center gap-2">
            <Settings className="w-5 h-5" />
            Prompt Preview
          </CardTitle>
          <div className="flex justify-center">
            <Badge variant="outline" className={`${getCompletionPercentage() === 100 ? 'bg-green-600' : 'bg-yellow-600'} text-white`}>
              {getCompletionPercentage()}% Complete
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Settings Panel */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Select defaultValue="50mm">
                <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                  <SelectValue placeholder="Lens" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24mm">24mm</SelectItem>
                  <SelectItem value="35mm">35mm</SelectItem>
                  <SelectItem value="50mm">50mm</SelectItem>
                  <SelectItem value="85mm">85mm</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="9:16">
                <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                  <SelectValue placeholder="Ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:16">9:16</SelectItem>
                  <SelectItem value="16:9">16:9</SelectItem>
                  <SelectItem value="1:1">1:1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Select defaultValue="confident">
              <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white">
                <SelectValue placeholder="Mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="confident">Confident</SelectItem>
                <SelectItem value="mysterious">Mysterious</SelectItem>
                <SelectItem value="powerful">Powerful</SelectItem>
                <SelectItem value="dramatic">Dramatic</SelectItem>
                <SelectItem value="luxurious">Luxurious</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator className="bg-gray-600" />
          
          {/* Selection Summary */}
          <div>
            <h4 className="font-semibold mb-2 text-green-400">Current Selection:</h4>
            {renderSelectedSummary()}
          </div>
          
          <Separator className="bg-gray-600" />
          
          {/* Generated Prompt */}
          <div>
            <h4 className="font-semibold mb-2 text-blue-400">Generated Prompt:</h4>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 min-h-[120px]">
              <p className="text-sm text-gray-300 leading-relaxed">
                {prompt || "Complete character selection to generate prompt..."}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              onClick={onCopy}
              disabled={!prompt}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button 
              disabled={!prompt}
              variant="outline"
              className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptDisplay;