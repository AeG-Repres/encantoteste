import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';
import { branding } from '../config/branding';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <FileText className="h-16 w-16 text-rose-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-600">
              Condições para uso do nosso site e serviços
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Aviso Importante */}
        <Card className="border-l-4 border-l-rose-600 bg-rose-50 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-rose-600 mt-1" />
              <div>
                <h3 className="font-semibold text-rose-800 mb-2">Importante</h3>
                <p className="text-rose-700">
                  Este site é destinado exclusivamente para pessoas maiores de {branding.ageVerification.minimumAge} anos. 
                  Ao continuar navegando, você confirma que possui a idade mínima exigida e concorda com estes termos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Aceitação dos Termos */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>1. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Ao acessar e usar o site do {branding.storeName}, você concorda em cumprir e estar vinculado 
                aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site.
              </p>
              <p className="text-gray-600">
                Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.
              </p>
            </CardContent>
          </Card>

          {/* Restrições de Idade */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-rose-600" />
                2. Restrições de Idade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">CONTEÚDO ADULTO</h4>
                <p className="text-red-700 text-sm">
                  Este site contém conteúdo adulto e é destinado exclusivamente para pessoas com mais de {branding.ageVerification.minimumAge} anos.
                </p>
              </div>
              
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Você deve ter pelo menos {branding.ageVerification.minimumAge} anos para acessar este site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>É sua responsabilidade verificar se o acesso é legal em sua jurisdição</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Pais/responsáveis devem supervisionar o acesso de menores à internet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Reservamo-nos o direito de solicitar comprovação de idade</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Uso do Site */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>3. Uso Permitido do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Você pode:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Navegar e visualizar o conteúdo do site</li>
                  <li>Fazer compras de produtos disponíveis</li>
                  <li>Criar uma conta para facilitar futuras compras</li>
                  <li>Entrar em contato conosco através dos canais oficiais</li>
                  <li>Compartilhar produtos em redes sociais</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Você NÃO pode:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Usar o site para atividades ilegais ou não autorizadas</li>
                  <li>Tentar hackear, danificar ou sobrecarregar nossos sistemas</li>
                  <li>Copiar, reproduzir ou distribuir nosso conteúdo sem autorização</li>
                  <li>Criar contas falsas ou fornecer informações incorretas</li>
                  <li>Usar bots, scripts ou ferramentas automatizadas</li>
                  <li>Interferir na experiência de outros usuários</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Produtos e Preços */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>4. Produtos e Preços</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Disponibilidade:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Produtos sujeitos à disponibilidade em estoque</li>
                  <li>Reservamo-nos o direito de limitar quantidades</li>
                  <li>Podemos descontinuar produtos a qualquer momento</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Preços:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Preços podem ser alterados sem aviso prévio</li>
                  <li>Promoções têm validade limitada</li>
                  <li>Erros de preço serão corrigidos e você será notificado</li>
                  <li>Preços incluem impostos quando aplicável</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Pedidos e Pagamentos */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>5. Pedidos e Pagamentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Processamento de Pedidos:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Pedidos estão sujeitos à confirmação e disponibilidade</li>
                  <li>Reservamo-nos o direito de recusar ou cancelar pedidos</li>
                  <li>Confirmação será enviada por e-mail após aprovação</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Pagamentos:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Aceitamos PIX, cartões de crédito e boleto bancário</li>
                  <li>Pagamentos são processados por terceiros seguros</li>
                  <li>Não armazenamos dados de cartão de crédito</li>
                  <li>Pedidos só são enviados após confirmação do pagamento</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Entrega */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>6. Entrega e Envio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Política de Entrega:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Entregas em todo o território nacional</li>
                  <li>Embalagem 100% discreta, sem identificação do conteúdo</li>
                  <li>Prazo de 3 a 7 dias úteis após confirmação do pagamento</li>
                  <li>Frete grátis para compras acima de R$ 150,00</li>
                  <li>Código de rastreamento fornecido após o envio</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Responsabilidades:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Endereço correto é responsabilidade do cliente</li>
                  <li>Alguém deve estar presente para receber a encomenda</li>
                  <li>Atrasos dos Correios estão fora do nosso controle</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Trocas e Devoluções */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>7. Trocas e Devoluções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">IMPORTANTE - Produtos Íntimos</h4>
                <p className="text-yellow-700 text-sm">
                  Por questões de higiene e segurança, produtos íntimos não podem ser trocados ou devolvidos 
                  após o recebimento, exceto em casos de defeito de fabricação.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Trocas Aceitas:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Produtos com defeito de fabricação</li>
                  <li>Produtos danificados durante o transporte</li>
                  <li>Produto diferente do pedido</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Condições:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Comunicar problemas em até 7 dias após recebimento</li>
                  <li>Produto deve estar na embalagem original</li>
                  <li>Não deve ter sinais de uso</li>
                  <li>Nota fiscal deve acompanhar o produto</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Propriedade Intelectual */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>8. Propriedade Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Todo o conteúdo do site, incluindo textos, imagens, logos, design e código, 
                é propriedade do {branding.storeName} ou de seus licenciadores e está protegido 
                por leis de direitos autorais.
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Você não pode:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Copiar, modificar ou distribuir nosso conteúdo</li>
                  <li>Usar nossas marcas ou logos sem autorização</li>
                  <li>Criar obras derivadas baseadas em nosso conteúdo</li>
                  <li>Fazer engenharia reversa de nossos sistemas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitação de Responsabilidade */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-rose-600" />
                9. Limitação de Responsabilidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                O {branding.storeName} não se responsabiliza por:
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Danos indiretos, incidentais ou consequenciais</li>
                <li>Perda de dados, lucros ou oportunidades de negócio</li>
                <li>Interrupções temporárias do serviço</li>
                <li>Ações de terceiros (transportadoras, processadores de pagamento)</li>
                <li>Uso inadequado dos produtos adquiridos</li>
                <li>Problemas causados por informações incorretas fornecidas pelo cliente</li>
              </ul>
              
              <p className="text-gray-600">
                Nossa responsabilidade máxima é limitada ao valor pago pelo produto em questão.
              </p>
            </CardContent>
          </Card>

          {/* Modificações */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>10. Modificações dos Termos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site.
              </p>
              
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Mudanças significativas serão comunicadas por e-mail</li>
                <li>É sua responsabilidade revisar os termos periodicamente</li>
                <li>O uso continuado do site constitui aceitação dos novos termos</li>
              </ul>
            </CardContent>
          </Card>

          {/* Lei Aplicável */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>11. Lei Aplicável e Jurisdição</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
                resolvida nos tribunais competentes do Brasil.
              </p>
              
              <p className="text-gray-600">
                Tentaremos resolver disputas amigavelmente antes de recorrer a medidas legais.
              </p>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>12. Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Se você tiver dúvidas sobre estes termos, entre em contato conosco:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>E-mail:</strong> {branding.contact.email}</p>
                  <p><strong>WhatsApp:</strong> Disponível através do botão no site</p>
                  <p><strong>Endereço:</strong> {branding.contact.address}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;

