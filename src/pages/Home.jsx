import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ProductCard from '../components/ProductCard';
import { 
  ArrowRight, 
  Shield, 
  Truck, 
  Heart,
  Star,
  Gift
} from 'lucide-react';
import { branding } from '../config/branding';
import { products, productSettings } from '../config/products';
import logo from '../assets/logo.jpeg';

import { useCart } from "../hooks/useCart";

const Home = () => {
  const { addToCart } = useCart();
  // Produtos em destaque
  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, productSettings.featuredProductsCount);

  // Produtos mais vendidos (simulado com base nas avaliações)
  const bestSellers = products
    .sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
    .slice(0, 4);

  const handleWhatsAppContact = () => {
    const message = `Olá! Vim através do site ${branding.storeName} e gostaria de mais informações sobre os produtos.`;
    const whatsappUrl = `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Bem-vindo ao
                  <span className="text-rose-600 block">{branding.storeName}</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {branding.storeSlogan}
                </p>
                <p className="text-gray-600">
                  {branding.storeDescription}. Produtos de qualidade, entrega discreta e atendimento especializado.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                  <Link to="/produtos">
                    Ver Produtos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWhatsAppContact}
                  className="border-rose-600 text-rose-600 hover:bg-rose-50"
                >
                  Falar Conosco
                </Button>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">500+</div>
                  <div className="text-sm text-gray-600">Produtos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">10k+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-600">4.9</div>
                  <div className="text-sm text-gray-600">Avaliação</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={branding.storeName}
                    className="w-64 h-64 object-contain"
                  />
                </div>
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-rose-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Compra 100% Segura</h3>
                <p className="text-sm text-gray-600">
                  Seus dados protegidos com criptografia SSL
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Entrega Discreta</h3>
                <p className="text-sm text-gray-600">
                  Embalagem neutra e entrega rápida
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Atendimento Especializado</h3>
                <p className="text-sm text-gray-600">
                  Suporte dedicado para suas dúvidas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Gift className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Produtos de Qualidade</h3>
                <p className="text-sm text-gray-600">
                  Seleção cuidadosa dos melhores produtos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      {productSettings.showFeaturedOnHome && featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Seleção especial dos nossos produtos mais procurados e bem avaliados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/produtos">
                  Ver Todos os Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Mais Vendidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Mais Vendidos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os produtos favoritos dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para uma nova experiência?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore nossa coleção completa e descubra produtos que vão transformar seus momentos íntimos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/produtos">
                Explorar Produtos
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleWhatsAppContact}
              className="border-white text-white hover:bg-white hover:text-rose-600"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria S.",
                rating: 5,
                comment: "Produtos de excelente qualidade e entrega super discreta. Recomendo!"
              },
              {
                name: "João P.",
                rating: 5,
                comment: "Atendimento excepcional e produtos que superaram minhas expectativas."
              },
              {
                name: "Ana L.",
                rating: 5,
                comment: "Site confiável, produtos originais e entrega rápida. Voltarei a comprar!"
              }
            ].map((review, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{review.comment}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    {review.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

