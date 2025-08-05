import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Heart, 
  Shield, 
  Users, 
  Award,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { branding } from '../config/branding';
import logo from '../assets/logo.jpeg';

const About = () => {
  const handleWhatsAppContact = () => {
    const message = `Olá! Vim através da página "Sobre Nós" do ${branding.storeName} e gostaria de conhecer mais sobre vocês.`;
    const whatsappUrl = `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <img 
                src={logo} 
                alt={branding.storeName}
                className="h-24 w-auto object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre o {branding.storeName}
            </h1>
            <p className="text-xl text-gray-600">
              {branding.storeSlogan}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Nossa História */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  O {branding.storeName} nasceu da paixão por proporcionar momentos únicos e especiais 
                  para nossos clientes. Acreditamos que a intimidade é uma parte fundamental do 
                  bem-estar e dos relacionamentos saudáveis.
                </p>
                <p>
                  Com anos de experiência no mercado, nos especializamos em oferecer produtos 
                  de alta qualidade, sempre com discrição, respeito e profissionalismo. 
                  Nossa missão é quebrar tabus e proporcionar uma experiência de compra 
                  confortável e segura.
                </p>
                <p>
                  Trabalhamos apenas com marcas reconhecidas e produtos certificados, 
                  garantindo a segurança e satisfação de nossos clientes. Cada produto 
                  é cuidadosamente selecionado por nossa equipe especializada.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-lg shadow-2xl flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt={branding.storeName}
                    className="w-64 h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Discrição</h3>
                <p className="text-sm text-gray-600">
                  Privacidade e discrição em todas as etapas da compra
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Qualidade</h3>
                <p className="text-sm text-gray-600">
                  Produtos certificados e de marcas reconhecidas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Respeito</h3>
                <p className="text-sm text-gray-600">
                  Atendimento respeitoso e sem julgamentos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Confiança</h3>
                <p className="text-sm text-gray-600">
                  Relacionamento baseado na confiança mútua
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Por que nos escolher */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Por que escolher o {branding.storeName}?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Compra 100% Segura</h3>
                    <p className="text-gray-600 text-sm">
                      Site com certificado SSL, dados criptografados e pagamentos seguros
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Entrega Rápida</h3>
                    <p className="text-gray-600 text-sm">
                      Processamento em 24h e entrega em todo o Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Produtos Originais</h3>
                    <p className="text-gray-600 text-sm">
                      Trabalhamos apenas com fornecedores autorizados
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Atendimento Especializado</h3>
                    <p className="text-gray-600 text-sm">
                      Equipe treinada para esclarecer dúvidas com discrição
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Heart className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Embalagem Discreta</h3>
                    <p className="text-gray-600 text-sm">
                      Embalagem neutra, sem identificação do conteúdo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cobertura Nacional</h3>
                    <p className="text-gray-600 text-sm">
                      Entregamos em todo o território brasileiro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compromisso */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Nosso Compromisso
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Estamos comprometidos em proporcionar uma experiência única, segura e 
                satisfatória para todos os nossos clientes. Sua privacidade e satisfação 
                são nossas prioridades.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">10k+</div>
                  <div className="text-sm opacity-90">Clientes Satisfeitos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.9</div>
                  <div className="text-sm opacity-90">Avaliação Média</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Produtos Disponíveis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-600">
              Tem alguma dúvida? Nossa equipe está pronta para ajudar!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Atendimento rápido e personalizado
                </p>
                <Button onClick={handleWhatsAppContact} className="w-full">
                  Falar Conosco
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {branding.contact.email}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = `mailto:${branding.contact.email}`}
                >
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-rose-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {branding.contact.address}
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Atendimento Online
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

