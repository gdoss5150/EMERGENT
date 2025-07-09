import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Copy, Shuffle, Download, Save } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import CharacterBuilder from './CharacterBuilder';
import VehicleSelector from './VehicleSelector';
import RimsSelector from './RimsSelector';
import ClothingSelector from './ClothingSelector';
import LocationSelector from './LocationSelector';
import PoseSelector from './PoseSelector';
import FXSelector from './FXSelector';
import CameraSelector from './CameraSelector';
import PromptDisplay from './PromptDisplay';
import { mockData } from '../data/mockData';

const DripVisualizer = () => {
  const { toast } = useToast();
  const [selectedOptions, setSelectedOptions] = useState({
    character: {
      sex: '',
      skinTone: '',
      hairStyle: ''
    },
    vehicle: null,
    rims: null,
    clothing: [],
    location: null,
    pose: null,
    fx: [],
    camera: 'canon_eos_r5',
    lens: '50mm',
    angle: 'centered',
    lighting: 'key_light',
    mood: 'confident',
    ratio: '9:16'
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const generatePrompt = () => {
    const { character, vehicle, rims, clothing, location, pose, fx, camera, lens, angle, lighting, mood, ratio } = selectedOptions;
    
    if (!character.sex || !character.skinTone || !character.hairStyle) {
      toast({
        title: "Missing Character Details",
        description: "Please complete character selection first",
        variant: "destructive"
      });
      return;
    }

    // Following Metarealismzolo Format:
    // [subject] in [pose], located in [scene], wearing [fit] with [hair style], on [vehicle if any].  
    // Shot on [camera] using [lens] from a [angle] with [lighting]. FX: [fx list].  
    // Mood: [tone]. Image ratio: 9:16 or 16:9

    let prompt = `A ${character.skinTone} ${character.sex} with ${character.hairStyle}`;
    
    if (pose) {
      prompt += ` in ${pose.name}`;
    }
    
    if (location) {
      prompt += `, located in ${location.name}`;
    }
    
    if (clothing.length > 0) {
      prompt += `, wearing ${clothing.join(', ')}`;
    }
    
    if (vehicle) {
      prompt += `, on ${vehicle.name}`;
      if (rims) {
        prompt += ` with ${rims.name} wheels`;
      }
    }
    
    prompt += `. Shot on ${camera} using ${lens} from a ${angle} with ${lighting}`;
    
    if (fx.length > 0) {
      prompt += `. FX: ${fx.join(', ')}`;
    }
    
    prompt += `. Mood: ${mood}. Image ratio: ${ratio}`;
    
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy prompt",
        variant: "destructive"
      });
    }
  };

  const randomizeAll = () => {
    const randomCharacter = {
      sex: mockData.character.sex[Math.floor(Math.random() * mockData.character.sex.length)],
      skinTone: mockData.character.skinTones[Math.floor(Math.random() * mockData.character.skinTones.length)],
      hairStyle: mockData.character.hairStyles[Math.floor(Math.random() * mockData.character.hairStyles.length)]
    };
    
    const randomVehicle = mockData.vehicles[Math.floor(Math.random() * mockData.vehicles.length)];
    const randomRims = mockData.rims[Math.floor(Math.random() * mockData.rims.length)];
    const randomClothing = mockData.clothing.slice(0, Math.floor(Math.random() * 3) + 1);
    const randomLocation = mockData.locations[Math.floor(Math.random() * mockData.locations.length)];
    const randomPose = mockData.poses[Math.floor(Math.random() * mockData.poses.length)];
    const randomFX = mockData.fx.slice(0, Math.floor(Math.random() * 2) + 1);
    const randomCamera = mockData.photography.cameras[Math.floor(Math.random() * mockData.photography.cameras.length)];
    const randomTimeOfDay = mockData.photography.timeOfDay[Math.floor(Math.random() * mockData.photography.timeOfDay.length)];
    const randomColorGrading = mockData.photography.colorGrading[Math.floor(Math.random() * mockData.photography.colorGrading.length)];
    const randomTechniques = mockData.photography.techniques.slice(0, Math.floor(Math.random() * 2) + 1);
    
    setSelectedOptions({
      ...selectedOptions,
      character: randomCharacter,
      vehicle: randomVehicle,
      rims: randomRims,
      clothing: randomClothing.map(item => item.name),
      location: randomLocation,
      pose: randomPose,
      fx: randomFX.map(item => item.name),
      camera: randomCamera.name,
      timeOfDay: randomTimeOfDay.name,
      colorGrading: randomColorGrading.name,
      techniques: randomTechniques.map(item => item.name)
    });
  };

  useEffect(() => {
    if (selectedOptions.character.sex && selectedOptions.character.skinTone && selectedOptions.character.hairStyle) {
      generatePrompt();
    }
  }, [selectedOptions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            DRIP VISUALIZER
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Create stunning rap video & album cover prompts with precision
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={randomizeAll} 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Randomize All
            </Button>
            <Button 
              onClick={generatePrompt}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Generate Prompt
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <Card className="bg-black/40 backdrop-blur-lg border-purple-500/30 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Build Your Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="character" className="w-full">
                  <TabsList className="grid w-full grid-cols-8 bg-gray-800/50 mb-6">
                    <TabsTrigger value="character" className="data-[state=active]:bg-purple-600 text-xs">Character</TabsTrigger>
                    <TabsTrigger value="clothing" className="data-[state=active]:bg-purple-600 text-xs">Clothing</TabsTrigger>
                    <TabsTrigger value="vehicles" className="data-[state=active]:bg-purple-600 text-xs">Vehicles</TabsTrigger>
                    <TabsTrigger value="rims" className="data-[state=active]:bg-purple-600 text-xs">Rims</TabsTrigger>
                    <TabsTrigger value="locations" className="data-[state=active]:bg-purple-600 text-xs">Locations</TabsTrigger>
                    <TabsTrigger value="poses" className="data-[state=active]:bg-purple-600 text-xs">Poses</TabsTrigger>
                    <TabsTrigger value="fx" className="data-[state=active]:bg-purple-600 text-xs">FX</TabsTrigger>
                    <TabsTrigger value="camera" className="data-[state=active]:bg-purple-600 text-xs">Camera</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="character">
                    <CharacterBuilder 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="clothing">
                    <ClothingSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="vehicles">
                    <VehicleSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="locations">
                    <LocationSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="poses">
                    <PoseSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="fx">
                    <FXSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="rims">
                    <RimsSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                  
                  <TabsContent value="camera">
                    <CameraSelector 
                      selectedOptions={selectedOptions} 
                      setSelectedOptions={setSelectedOptions}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="xl:col-span-1">
            <PromptDisplay 
              prompt={generatedPrompt}
              onCopy={copyToClipboard}
              selectedOptions={selectedOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DripVisualizer;