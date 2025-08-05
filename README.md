# 🌹 Template Sexshop - Encanto Íntimo

**Template profissional e completo para sexshops online, otimizado para Netlify + GitHub**

## ✨ Características

- 🎨 **Design Elegante**: Interface moderna e responsiva
- 🔒 **Verificação de Idade**: Sistema obrigatório de verificação
- 🛒 **Carrinho Funcional**: Sistema completo de carrinho de compras
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em mobile e desktop
- 🚀 **Deploy Fácil**: Configurado para Netlify com um clique
- ⚙️ **Super Personalizável**: Apenas 2 arquivos para editar
- 💬 **Integração WhatsApp**: Finalização de pedidos via WhatsApp
- 🔍 **SEO Otimizado**: Meta tags e estrutura otimizada para buscadores

## 🎯 Funcionalidades

### Para Clientes
- ✅ Verificação de idade obrigatória
- ✅ Catálogo de produtos com filtros e busca
- ✅ Páginas de produto com galeria de imagens
- ✅ Carrinho de compras com localStorage
- ✅ Finalização via WhatsApp
- ✅ Páginas institucionais (Sobre, Contato, Privacidade, Termos)
- ✅ Design responsivo para todos os dispositivos

### Para Proprietários
- ✅ Fácil personalização (apenas 2 arquivos)
- ✅ Adição de produtos via JSON
- ✅ Configuração de marca simples
- ✅ Deploy automático no Netlify
- ✅ Sem necessidade de backend
- ✅ Manutenção zero

## 🚀 Como Usar

### 1. Personalização Básica

Edite apenas estes 2 arquivos:

#### `src/config/branding.js` - Configuração da Marca
```javascript
export const branding = {
  // INFORMAÇÕES BÁSICAS DA LOJA
  storeName: "Seu Sexshop",
  storeSlogan: "Seu slogan aqui",
  storeDescription: "Descrição da sua loja",
  
  // CONTATO
  contact: {
    whatsapp: "5511999999999", // Apenas números
    email: "contato@seusite.com.br",
    instagram: "@seuinstagram",
    address: "Sua Cidade, Estado"
  },

  // CORES DO SITE
  colors: {
    primary: "#8B4B6B", // Cor principal
    secondary: "#E8D5D5", // Cor secundária
    accent: "#6B3A4F", // Cor de destaque
    background: "#FEFEFE", // Cor de fundo
    text: "#2D2D2D" // Cor do texto
  }
  // ... mais configurações
};
```

#### `src/config/products.js` - Produtos da Loja
```javascript
export const products = [
  {
    id: 1,
    name: "Nome do Produto",
    category: "categoria",
    price: 89.90,
    originalPrice: 129.90,
    image: "/caminho/para/imagem.jpg",
    description: "Descrição do produto",
    features: [
      "Característica 1",
      "Característica 2"
    ],
    inStock: true,
    featured: true
  }
  // ... mais produtos
];
```

### 2. Adicionando Sua Logo

1. Substitua o arquivo `src/assets/logo.jpeg` pela sua logo
2. Mantenha o mesmo nome do arquivo
3. Formatos aceitos: JPG, JPEG, PNG

### 3. Deploy no Netlify

#### Opção 1: Via GitHub (Recomendado)
1. Faça upload do projeto para seu GitHub
2. Conecte o repositório no Netlify
3. O deploy será automático!

#### Opção 2: Deploy Manual
1. Execute `pnpm run build`
2. Faça upload da pasta `dist` no Netlify

## 📁 Estrutura do Projeto

```
encanto-intimo-template/
├── src/
│   ├── config/
│   │   ├── branding.js      # ← EDITE AQUI (Marca)
│   │   └── products.js      # ← EDITE AQUI (Produtos)
│   ├── components/          # Componentes React
│   ├── pages/              # Páginas do site
│   └── assets/             # Imagens e arquivos
├── netlify.toml            # Configuração Netlify
├── package.json            # Dependências
└── README.md              # Esta documentação
```

## 🎨 Personalização Avançada

### Cores
As cores são definidas em `src/config/branding.js` e aplicadas automaticamente em todo o site.

### Produtos
- Adicione quantos produtos quiser no array `products`
- Cada produto pode ter múltiplas imagens
- Categorias são criadas automaticamente
- Produtos podem ser marcados como "destaque"

### Páginas
Todas as páginas são totalmente funcionais:
- **Home**: Hero section, produtos em destaque, avaliações
- **Produtos**: Catálogo com filtros e busca
- **Produto**: Página detalhada com galeria
- **Sobre**: História e valores da empresa
- **Contato**: Formulário e informações
- **Privacidade**: Política de privacidade completa
- **Termos**: Termos de uso detalhados

## 🛠️ Comandos Disponíveis

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 📱 Responsividade

O template é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🔒 Recursos de Segurança

- ✅ Verificação de idade obrigatória
- ✅ Headers de segurança configurados
- ✅ Validação de formulários
- ✅ Sanitização de dados
- ✅ HTTPS obrigatório (Netlify)

## 💬 Integração WhatsApp

O sistema de carrinho integra automaticamente com WhatsApp:
- Produtos são formatados em mensagem
- Total calculado automaticamente
- Link direto para conversa
- Mensagem personalizada por página

## 🎯 SEO Otimizado

- ✅ Meta tags configuradas
- ✅ Estrutura semântica HTML5
- ✅ URLs amigáveis
- ✅ Sitemap automático
- ✅ Schema markup
- ✅ Open Graph tags

## 🆘 Suporte

### Problemas Comuns

**1. Site não carrega após deploy**
- Verifique se o build foi executado com sucesso
- Confirme se o arquivo `netlify.toml` está presente

**2. Imagens não aparecem**
- Verifique se as imagens estão na pasta `src/assets/`
- Confirme se os caminhos estão corretos no `products.js`

**3. WhatsApp não funciona**
- Verifique se o número está no formato correto (apenas números)
- Teste o número manualmente

### Customizações Extras

Para customizações além da configuração básica, você precisará editar os arquivos React. Recomendamos conhecimento básico em:
- React.js
- Tailwind CSS
- JavaScript ES6+

## 📄 Licença

Este template é fornecido para uso comercial. Você pode:
- ✅ Usar para seus próprios projetos
- ✅ Modificar conforme necessário
- ✅ Vender sites criados com este template

## 🎉 Pronto para Usar!

Seu sexshop online está pronto! Basta personalizar os 2 arquivos de configuração e fazer o deploy.

**Boa sorte com seu negócio! 🚀**

---

*Template criado com ❤️ para empreendedores digitais*

