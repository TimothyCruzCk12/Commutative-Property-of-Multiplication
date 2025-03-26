"use client";

import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { X, Lightbulb } from 'lucide-react';

const CommutativePropertyInteractive = () => {
  const [number1, setNumber1] = useState(3);
  const [number2, setNumber2] = useState(4);

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <Card className="w-full max-w-2xl mx-auto shadow-md bg-white">
        <CardHeader className="bg-sky-100 text-sky-800">
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold">Commutative Property of Multiplication</CardTitle>
            <X size={40} className="text-sky-600" />
          </div>
          <CardDescription className="text-sky-700 text-lg">
            Discover how changing the order of factors doesn't change their product!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <Alert className="bg-blue-50 border-blue-100">
            <Lightbulb className="h-4 w-4 text-blue-400" />
            <AlertTitle className="text-blue-700">Commutative Property Basics</AlertTitle>
            <AlertDescription className="text-blue-600">
              The commutative property of multiplication states that changing the order of the factors does not change their product. 
              For any numbers 'a' and 'b': a × b = b × a
            </AlertDescription>
          </Alert>
          
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-6xl font-bold text-black">
                {number1} × {number2} = {number1 * number2}
              </p>
              <p className="text-6xl font-bold text-black">
                {number2} × {number1} = {number2 * number1}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="number1-slider" className="block text-sm font-medium text-sky-700">
                  Adjust first number:
                </label>
                <Slider
                  id="number1-slider"
                  min={0}
                  max={10}
                  step={1}
                  value={[number1]}
                  onValueChange={(value) => setNumber1(value[0])}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="number2-slider" className="block text-sm font-medium text-sky-700">
                  Adjust second number:
                </label>
                <Slider
                  id="number2-slider"
                  min={0}
                  max={10}
                  step={1}
                  value={[number2]}
                  onValueChange={(value) => setNumber2(value[0])}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommutativePropertyInteractive; 