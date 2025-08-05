import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { 
  ShoppingCart, 
  MapPin, 
  CreditCard, 
  MessageCircle,
  AlertCircle,
  Check,
  User,
  Phone,
  Home,
  Banknote,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { branding } from '../config/branding';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Estados do formulário
  const [customerData, setCustomerData] = useState({
    name: '',
    cpf: '',
    phone: '',
    email: ''
  });

  const [addressData, setAddressData] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: 'Rio de Janeiro',
    state: 'RJ'
  });

  const [paymentData, setPaymentData] = useState({
    method: '',
    needsChange: false,
    changeAmount: ''
  });

  const [observations, setObservations] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Calcular totais
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal >= 150 ? 0 : 15; // Frete grátis acima de R$ 150
  const total = subtotal + shipping;

  // Redirecionar se carrinho vazio
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/produtos');
    }
  }, [cartItems, navigate]);

  // Validar CEP do Rio de Janeiro
  const validateRioCEP = (cep) => {
    const cleanCEP = cep.replace(/\D/g, '');
    // CEPs do Rio de Janeiro começam com 20, 21, 22, 23
    return cleanCEP.length === 8 && ['20', '21', '22', '23'].some(prefix => cleanCEP.startsWith(prefix));
  };

  // Formatar CPF
  const formatCPF = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  // Formatar telefone
  const formatPhone = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  // Formatar CEP
  const formatCEP = (value) => {
    const cleanValue = value.replace(/\D/g, '');
    return cleanValue.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  // Validar formulário
  const validateForm = () => {
    const newErrors = {};

    // Validar dados pessoais
    if (!customerData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!customerData.cpf || customerData.cpf.replace(/\D/g, '').length !== 11) {
      newErrors.cpf = 'CPF inválido';
    }
    if (!customerData.phone || customerData.phone.replace(/\D/g, '').length !== 11) {
      newErrors.phone = 'Telefone inválido';
    }

    // Validar endereço
    if (!addressData.cep || !validateRioCEP(addressData.cep)) {
      newErrors.cep = 'CEP inválido ou fora do Rio de Janeiro';
    }
    if (!addressData.street.trim()) newErrors.street = 'Rua é obrigatória';
    if (!addressData.number.trim()) newErrors.number = 'Número é obrigatório';
    if (!addressData.neighborhood.trim()) newErrors.neighborhood = 'Bairro é obrigatório';

    // Validar pagamento
    if (!paymentData.method) newErrors.paymentMethod = 'Selecione uma forma de pagamento';
    if (paymentData.method === 'dinheiro' && paymentData.needsChange && !paymentData.changeAmount) {
      newErrors.changeAmount = 'Informe o valor para troco';
    }

    // Validar termos
    if (!acceptTerms) newErrors.terms = 'Você deve aceitar os termos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gerar mensagem para WhatsApp
  const generateWhatsAppMessage = () => {
    let message = `🛍️ *NOVO PEDIDO - ${branding.storeName}*\n\n`;
    
    // Dados do cliente
    message += `👤 *DADOS DO CLIENTE:*\n`;
    message += `Nome: ${customerData.name}\n`;
    message += `CPF: ${customerData.cpf}\n`;
    message += `Telefone: ${customerData.phone}\n`;
    if (customerData.email) message += `Email: ${customerData.email}\n`;
    
    // Endereço de entrega
    message += `\n📍 *ENDEREÇO DE ENTREGA:*\n`;
    message += `${addressData.street}, ${addressData.number}`;
    if (addressData.complement) message += ` - ${addressData.complement}`;
    message += `\n${addressData.neighborhood} - ${addressData.city}/${addressData.state}\n`;
    message += `CEP: ${addressData.cep}\n`;
    
    // Produtos
    message += `\n🛒 *PRODUTOS:*\n`;
    cartItems.forEach(item => {
      message += `• ${item.name}\n`;
      message += `  Qtd: ${item.quantity} | Valor: R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    // Totais
    message += `\n💰 *VALORES:*\n`;
    message += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    message += `Frete: ${shipping === 0 ? 'GRÁTIS' : `R$ ${shipping.toFixed(2)}`}\n`;
    message += `*TOTAL: R$ ${total.toFixed(2)}*\n`;
    
    // Forma de pagamento
    message += `\n💳 *FORMA DE PAGAMENTO:*\n`;
    const paymentMethods = {
      'pix': 'PIX',
      'cartao-credito': 'Cartão de Crédito',
      'cartao-debito': 'Cartão de Débito',
      'dinheiro': 'Dinheiro'
    };
    message += `${paymentMethods[paymentData.method]}`;
    
    if (paymentData.method === 'dinheiro' && paymentData.needsChange) {
      message += ` (Troco para R$ ${paymentData.changeAmount})`;
    }
    
    // Observações
    if (observations.trim()) {
      message += `\n\n📝 *OBSERVAÇÕES:*\n${observations}`;
    }
    
    message += `\n\n✅ Pedido confirmado pelo site. Aguardando confirmação para entrega.`;
    
    return message;
  };

  // Finalizar pedido
  const handleFinishOrder = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simular delay de processamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${branding.contact.whatsappOrder}?text=${encodeURIComponent(message)}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Limpar carrinho
      clearCart();
      
      // Redirecionar para página de sucesso ou home
      navigate('/', { 
        state: { 
          message: 'Pedido enviado! Você será redirecionado para o WhatsApp para finalizar.' 
        }
      });
      
    } catch (error) {
      console.error('Erro ao processar pedido:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return null; // Será redirecionado pelo useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Finalizar Pedido</h1>
          <p className="text-gray-600">Preencha seus dados para finalizar o pedido via WhatsApp</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dados Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Dados Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={customerData.name}
                      onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input
                      id="cpf"
                      value={customerData.cpf}
                      onChange={(e) => setCustomerData({...customerData, cpf: formatCPF(e.target.value)})}
                      placeholder="000.000.000-00"
                      maxLength={14}
                      className={errors.cpf ? 'border-red-500' : ''}
                    />
                    {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      value={customerData.phone}
                      onChange={(e) => setCustomerData({...customerData, phone: formatPhone(e.target.value)})}
                      placeholder="(21) 99999-9999"
                      maxLength={15}
                      className={errors.phone ? 'border-red-500' : ''}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerData.email}
                      onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Endereço de Entrega */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Endereço de Entrega (Rio de Janeiro)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      value={addressData.cep}
                      onChange={(e) => setAddressData({...addressData, cep: formatCEP(e.target.value)})}
                      placeholder="20000-000"
                      maxLength={9}
                      className={errors.cep ? 'border-red-500' : ''}
                    />
                    {errors.cep && <p className="text-red-500 text-sm mt-1">{errors.cep}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Rua *</Label>
                    <Input
                      id="street"
                      value={addressData.street}
                      onChange={(e) => setAddressData({...addressData, street: e.target.value})}
                      className={errors.street ? 'border-red-500' : ''}
                    />
                    {errors.street && <p className="text-red-500 text-sm mt-1">{errors.street}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="number">Número *</Label>
                    <Input
                      id="number"
                      value={addressData.number}
                      onChange={(e) => setAddressData({...addressData, number: e.target.value})}
                      className={errors.number ? 'border-red-500' : ''}
                    />
                    {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input
                      id="complement"
                      value={addressData.complement}
                      onChange={(e) => setAddressData({...addressData, complement: e.target.value})}
                      placeholder="Apto, bloco, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="neighborhood">Bairro *</Label>
                    <Input
                      id="neighborhood"
                      value={addressData.neighborhood}
                      onChange={(e) => setAddressData({...addressData, neighborhood: e.target.value})}
                      className={errors.neighborhood ? 'border-red-500' : ''}
                    />
                    {errors.neighborhood && <p className="text-red-500 text-sm mt-1">{errors.neighborhood}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      value={addressData.city}
                      disabled
                      className="bg-gray-100"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      value={addressData.state}
                      disabled
                      className="bg-gray-100"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forma de Pagamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={paymentData.method} 
                  onValueChange={(value) => setPaymentData({...paymentData, method: value, needsChange: false, changeAmount: ''})}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex items-center gap-2">
                      <Banknote className="h-4 w-4" />
                      PIX (5% de desconto)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cartao-credito" id="cartao-credito" />
                    <Label htmlFor="cartao-credito" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Cartão de Crédito
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cartao-debito" id="cartao-debito" />
                    <Label htmlFor="cartao-debito" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Cartão de Débito
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dinheiro" id="dinheiro" />
                    <Label htmlFor="dinheiro" className="flex items-center gap-2">
                      <Banknote className="h-4 w-4" />
                      Dinheiro
                    </Label>
                  </div>
                </RadioGroup>

                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-2">{errors.paymentMethod}</p>
                )}

                {paymentData.method === 'dinheiro' && (
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="needsChange"
                        checked={paymentData.needsChange}
                        onCheckedChange={(checked) => setPaymentData({...paymentData, needsChange: checked})}
                      />
                      <Label htmlFor="needsChange">Precisa de troco</Label>
                    </div>
                    
                    {paymentData.needsChange && (
                      <div>
                        <Label htmlFor="changeAmount">Troco para quanto?</Label>
                        <Input
                          id="changeAmount"
                          type="number"
                          value={paymentData.changeAmount}
                          onChange={(e) => setPaymentData({...paymentData, changeAmount: e.target.value})}
                          placeholder="Ex: 100.00"
                          className={errors.changeAmount ? 'border-red-500' : ''}
                        />
                        {errors.changeAmount && (
                          <p className="text-red-500 text-sm mt-1">{errors.changeAmount}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Observações */}
            <Card>
              <CardHeader>
                <CardTitle>Observações</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                  placeholder="Alguma observação especial sobre o pedido ou entrega?"
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Termos */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptTerms}
                    onCheckedChange={setAcceptTerms}
                  />
                  <Label htmlFor="terms" className="text-sm leading-relaxed">
                    Aceito os <a href="/termos" className="text-rose-600 hover:underline">termos de uso</a> e 
                    a <a href="/privacidade" className="text-rose-600 hover:underline">política de privacidade</a>. 
                    Confirmo que tenho mais de 18 anos e autorizo o processamento dos meus dados para 
                    finalização do pedido.
                  </Label>
                </div>
                {errors.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Produtos */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-sm">
                          Qtd: {item.quantity} × R$ {item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Frete:</span>
                    <span>
                      {shipping === 0 ? (
                        <Badge variant="secondary" className="text-xs">GRÁTIS</Badge>
                      ) : (
                        `R$ ${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  {paymentData.method === 'pix' && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto PIX (5%):</span>
                      <span>-R$ {(total * 0.05).toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span className="text-rose-600">
                      R$ {paymentData.method === 'pix' ? (total * 0.95).toFixed(2) : total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleFinishOrder}
                  disabled={isLoading}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isLoading ? (
                    'Processando...'
                  ) : (
                    <>
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Finalizar via WhatsApp
                    </>
                  )}
                </Button>

                <div className="text-center text-xs text-gray-500">
                  <AlertCircle className="h-4 w-4 inline mr-1" />
                  Você será redirecionado para o WhatsApp para confirmar o pedido
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

