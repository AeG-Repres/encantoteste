import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  Instagram
} from 'lucide-react';
import { branding } from '../config/branding';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `
*Nova mensagem do site ${branding.storeName}*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsAppDirect = () => {
    const message = `Olá! Vim através do site ${branding.storeName} e gostaria de falar com vocês.`;
    const whatsappUrl = `https://wa.me/${branding.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${branding.contact.instagram.replace('@', '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aqui para esclarecer suas dúvidas e ajudar você
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informações de contato */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-rose-600" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Atendimento rápido e personalizado via WhatsApp
                </p>
                <Button onClick={handleWhatsAppDirect} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-rose-600" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  {branding.contact.email}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Resposta em até 24 horas
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = `mailto:${branding.contact.email}`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-rose-600" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  {branding.contact.instagram}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Siga-nos para novidades e promoções
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleInstagramClick}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rose-600" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {branding.contact.address}
                </p>
                <p className="text-sm text-gray-500">
                  Atendimento 100% online
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-600" />
                  Horário de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * Horário de Brasília
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Qual o assunto da sua mensagem?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva sua dúvida ou mensagem em detalhes..."
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Como funciona:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ao enviar, você será redirecionado para o WhatsApp</li>
                      <li>• Sua mensagem será formatada automaticamente</li>
                      <li>• Nossa equipe responderá o mais breve possível</li>
                      <li>• Todas as informações são tratadas com total discrição</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Rápido */}
            <Card className="border-none shadow-lg mt-8">
              <CardHeader>
                <CardTitle>Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Como é feita a entrega?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Todas as entregas são feitas em embalagem 100% discreta, sem identificação 
                      do conteúdo. Enviamos pelos Correios com código de rastreamento.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Qual o prazo de entrega?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      O prazo varia de 3 a 7 dias úteis, dependendo da sua localização. 
                      Produtos em estoque são enviados em até 24 horas após a confirmação do pagamento.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Os produtos têm garantia?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sim! Todos os produtos têm garantia do fabricante. Em caso de defeito, 
                      fazemos a troca sem custo adicional.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Como posso tirar dúvidas sobre um produto?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Nossa equipe está disponível via WhatsApp para esclarecer qualquer dúvida 
                      sobre produtos, uso ou características técnicas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

