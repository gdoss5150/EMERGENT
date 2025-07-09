import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const CharacterBuilder = ({ selectedOptions, setSelectedOptions }) => {
  const handleCharacterChange = (type, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      character: {
        ...prev.character,
        [type]: value
      }
    }));
  };

  const renderOptionGrid = (options, type, selectedValue) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {options.map((option, index) => (
          <Button
            key={index}
            variant={selectedValue === option ? "default" : "outline"}
            className={`p-3 h-auto text-left transition-all duration-200 ${
              selectedValue === option 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleCharacterChange(type, option)}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium capitalize">
                {option.replace(/_/g, ' ')}
              </span>
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            👤 Gender/Sex
            {selectedOptions.character.sex && (
              <Badge variant="secondary" className="bg-purple-600 text-white">
                {selectedOptions.character.sex}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderOptionGrid(mockData.character.sex, 'sex', selectedOptions.character.sex)}
        </CardContent>
      </Card>

      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            🎨 Skin Tone
            {selectedOptions.character.skinTone && (
              <Badge variant="secondary" className="bg-purple-600 text-white">
                {selectedOptions.character.skinTone}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderOptionGrid(mockData.character.skinTones, 'skinTone', selectedOptions.character.skinTone)}
        </CardContent>
      </Card>

      <Card className="bg-gray-800/30 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white flex items-center gap-2">
            💇 Hair Style
            {selectedOptions.character.hairStyle && (
              <Badge variant="secondary" className="bg-purple-600 text-white">
                {selectedOptions.character.hairStyle}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {renderOptionGrid(mockData.character.hairStyles, 'hairStyle', selectedOptions.character.hairStyle)}
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterBuilder;