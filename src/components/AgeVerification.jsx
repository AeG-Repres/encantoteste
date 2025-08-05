import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { branding } from '../config/branding';
import logo from '../assets/logo.jpeg';

const AgeVerification = ({ onVerify }) => {
  const handleVerify = (isAdult) => {
    onVerify(isAdult);
    if (!isAdult) {
      // Redirecionar para um site apropriado
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 p-4">
      <Card className="w-full max-w-md mx-auto shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <img 
              src={logo} 
              alt={branding.storeName}
              className="h-24 w-auto object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {branding.storeName}
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Verificação de Idade Obrigatória
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              {branding.ageVerification.message}
            </p>
            <p className="text-sm text-gray-500">
              Este site contém conteúdo adulto e é destinado apenas para pessoas com mais de {branding.ageVerification.minimumAge} anos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => handleVerify(true)}
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3"
            >
              Sim, tenho mais de {branding.ageVerification.minimumAge} anos
            </Button>
            <Button 
              onClick={() => handleVerify(false)}
              variant="outline"
              className="flex-1 py-3"
            >
              Não, sou menor de idade
            </Button>
          </div>
          
          <div className="text-xs text-gray-400 text-center">
            <p>
              Ao continuar, você confirma que tem a idade legal para visualizar este conteúdo em sua jurisdição.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeVerification;

