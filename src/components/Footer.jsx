import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  Heart,
  Shield,
  Truck,
  CreditCard
} from 'lucide-react';
import { branding } from '../config/branding';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const message = `Olá! Vim através do site ${branding.storeName} e gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${branding.contact.instagram.replace('@', '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${branding.contact.email}`;
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Seção de benefícios */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-rose-400" />
              <div>
                <h4 className="font-semibold">Compra Segura</h4>
                <p className="text-sm text-gray-400">Seus dados protegidos</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-8 w-8 text-rose-400" />
              <div>
                <h4 className="font-semibold">Entrega Discreta</h4>
                <p className="text-sm text-gray-400">Embalagem neutra</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="h-8 w-8 text-rose-400" />
              <div>
                <h4 className="font-semibold">Pagamento Fácil</h4>
                <p className="text-sm text-gray-400">PIX, cartão ou boleto</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-rose-400" />
              <div>
                <h4 className="font-semibold">Atendimento</h4>
                <p className="text-sm text-gray-400">Suporte especializado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt={branding.storeName}
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">{branding.storeName}</h3>
                <p className="text-sm text-gray-400">{branding.storeSlogan}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {branding.storeDescription}
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={handleInstagramClick}
                className="border-gray-600 hover:border-rose-400 hover:text-rose-400"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleEmailClick}
                className="border-gray-600 hover:border-rose-400 hover:text-rose-400"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleWhatsAppContact}
                className="border-gray-600 hover:border-green-400 hover:text-green-400"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/produtos?categoria=vibradores" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vibradores
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos?categoria=kits" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kits Sensuais
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos?categoria=lubrificantes" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Lubrificantes
                </Link>
              </li>
              <li>
                <Link 
                  to="/produtos?categoria=lingerie" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Lingerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">{branding.contact.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-400" />
                <a 
                  href={`mailto:${branding.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {branding.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-rose-400" />
                <button
                  onClick={handleInstagramClick}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {branding.contact.instagram}
                </button>
              </div>
            </div>
            
            <Button
              onClick={handleWhatsAppContact}
              className="mt-4 w-full bg-green-600 hover:bg-green-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Seção legal */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} {branding.storeName}. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/privacidade" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/termos" 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Conteúdo destinado a maiores de {branding.ageVerification.minimumAge} anos</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

