import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import { branding } from '../config/branding';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Shield className="h-16 w-16 text-rose-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600">
              Sua privacidade é nossa prioridade
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Resumo */}
        <Card className="border-none shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-rose-600" />
              Resumo da Nossa Política
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Dados Protegidos</h3>
                <p className="text-sm text-gray-600">
                  Suas informações são criptografadas e armazenadas com segurança
                </p>
              </div>
              <div className="text-center">
                <Eye className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Transparência</h3>
                <p className="text-sm text-gray-600">
                  Você sempre saberá como seus dados são utilizados
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-rose-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Controle Total</h3>
                <p className="text-sm text-gray-600">
                  Você pode solicitar alteração ou exclusão dos seus dados
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Informações Coletadas */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>1. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Informações Fornecidas por Você:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Nome completo e dados de contato (e-mail, telefone)</li>
                  <li>Endereço de entrega e cobrança</li>
                  <li>Informações de pagamento (processadas por terceiros seguros)</li>
                  <li>Histórico de compras e preferências</li>
                  <li>Comunicações conosco (mensagens, avaliações)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Informações Coletadas Automaticamente:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Endereço IP e localização aproximada</li>
                  <li>Tipo de dispositivo e navegador utilizado</li>
                  <li>Páginas visitadas e tempo de navegação</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Como Usamos */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>2. Como Usamos Suas Informações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Processar pedidos:</strong> Para confirmar, processar e entregar suas compras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Comunicação:</strong> Para enviar confirmações, atualizações e suporte ao cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Melhorar serviços:</strong> Para personalizar sua experiência e melhorar nosso site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Marketing:</strong> Para enviar ofertas e novidades (apenas com seu consentimento)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>Segurança:</strong> Para prevenir fraudes e proteger nossos usuários</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Compartilhamento */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>3. Compartilhamento de Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                <strong>Nunca vendemos seus dados pessoais.</strong> Compartilhamos informações apenas quando necessário:
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">Parceiros de Confiança:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Processadores de pagamento (para transações seguras)</li>
                  <li>Empresas de entrega (apenas dados necessários para envio)</li>
                  <li>Provedores de tecnologia (hospedagem, analytics)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Situações Legais:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Quando exigido por lei ou autoridades competentes</li>
                  <li>Para proteger nossos direitos legais</li>
                  <li>Em caso de investigação de atividades fraudulentas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>4. Segurança dos Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Implementamos medidas técnicas e organizacionais para proteger suas informações:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Proteção Técnica:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Criptografia SSL/TLS</li>
                      <li>• Servidores seguros</li>
                      <li>• Backups regulares</li>
                      <li>• Monitoramento 24/7</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Proteção Organizacional:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Acesso restrito aos dados</li>
                      <li>• Treinamento da equipe</li>
                      <li>• Políticas internas rígidas</li>
                      <li>• Auditorias regulares</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seus Direitos */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>5. Seus Direitos (LGPD)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Acesso</h4>
                    <p className="text-sm text-gray-600">Saber quais dados temos sobre você</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Correção</h4>
                    <p className="text-sm text-gray-600">Corrigir dados incorretos ou desatualizados</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Exclusão</h4>
                    <p className="text-sm text-gray-600">Solicitar a remoção dos seus dados</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Portabilidade</h4>
                    <p className="text-sm text-gray-600">Transferir seus dados para outro serviço</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Oposição</h4>
                    <p className="text-sm text-gray-600">Opor-se ao tratamento dos seus dados</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Informação</h4>
                    <p className="text-sm text-gray-600">Saber como seus dados são utilizados</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-rose-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Para exercer seus direitos:</strong> Entre em contato conosco através do e-mail 
                  <a href={`mailto:${branding.contact.email}`} className="text-rose-600 hover:underline ml-1">
                    {branding.contact.email}
                  </a> ou WhatsApp. Responderemos em até 15 dias.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>6. Cookies e Tecnologias Similares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Utilizamos cookies para melhorar sua experiência de navegação:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Cookies Essenciais</h4>
                    <p className="text-sm text-gray-600">
                      Necessários para o funcionamento básico do site (carrinho, login, segurança)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cookies de Performance</h4>
                    <p className="text-sm text-gray-600">
                      Ajudam a entender como você usa o site para melhorarmos a experiência
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cookies de Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Utilizados para personalizar anúncios e ofertas (apenas com seu consentimento)
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600">
                  Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Alterações */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>7. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Podemos atualizar esta política periodicamente. Quando isso acontecer:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Notificaremos você por e-mail sobre mudanças significativas</li>
                <li>A data da última atualização será indicada no topo da página</li>
                <li>Mudanças entram em vigor imediatamente após a publicação</li>
                <li>Recomendamos revisar esta política regularmente</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>8. Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Se você tiver dúvidas sobre esta política ou sobre como tratamos seus dados, entre em contato:
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

export default Privacy;

