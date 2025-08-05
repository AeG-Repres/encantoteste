# 🚀 Guia Rápido - Template Sexshop

**Configure seu sexshop online em 5 minutos!**

## ⚡ Configuração Rápida

### 1. **Edite sua Marca** (`src/config/branding.js`)

```javascript
export const branding = {
  storeName: "Sua Loja Íntima",           // ← Nome da sua loja
  storeSlogan: "Seu slogan aqui",         // ← Slogan/frase de efeito
  
  contact: {
    whatsapp: "5521999999999",            // ← WhatsApp geral (apenas números)
    whatsappOrder: "5521888888888",       // ← WhatsApp para pedidos (apenas números)
    email: "contato@sualoja.com.br",      // ← Seu email
    instagram: "@sualoja",                // ← Seu Instagram
    address: "Rio de Janeiro, RJ"         // ← Sua cidade
  },
  
  colors: {
    primary: "#8B4B6B",                   // ← Cor principal (rosa vinho)
    secondary: "#E8D5D5",                 // ← Cor secundária (rosa claro)
    // Mantenha as outras cores ou personalize
  }
};
```

### 2. **Adicione seus Produtos** (`src/config/products.js`)

```javascript
export const products = [
  {
    id: 1,                                // ← ID único (não repita)
    name: "Nome do Produto",              // ← Nome do produto
    category: "categoria",                // ← Categoria (ex: "vibradores", "lingerie")
    price: 89.90,                         // ← Preço atual
    originalPrice: 129.90,                // ← Preço original (opcional, para desconto)
    image: "/images/produto1.jpg",        // ← Caminho da imagem
    description: "Descrição detalhada",   // ← Descrição completa
    inStock: true,                        // ← Em estoque? true/false
    featured: true,                       // ← Destaque na home? true/false
    features: [                           // ← Características (opcional)
      "Material seguro",
      "Resistente à água",
      "Múltiplas velocidades"
    ]
  },
  // Adicione mais produtos aqui...
];
```

### 3. **Substitua sua Logo**
- Substitua `src/assets/logo.jpeg` pela sua logo
- Mantenha o nome `logo.jpeg`

## 🛒 **NOVO: Sistema de Pedidos via WhatsApp**

### Como Funciona:
1. **Cliente adiciona produtos** à sacola
2. **Preenche dados completos** (nome, CPF, endereço RJ, pagamento)
3. **Sistema valida** se o endereço é do Rio de Janeiro
4. **Gera mensagem estruturada** para WhatsApp
5. **Redireciona automaticamente** para seu WhatsApp

### Configuração dos WhatsApps:
```javascript
contact: {
  whatsapp: "5521999999999",        // Contato geral (dúvidas, suporte)
  whatsappOrder: "5521888888888",   // Pedidos (recebe as mensagens de compra)
}
```

### Formas de Pagamento Disponíveis:
- ✅ **PIX** (desconto automático de 5%)
- ✅ **Cartão de Crédito**
- ✅ **Cartão de Débito**  
- ✅ **Dinheiro** (com campo para troco)

### Validação Automática:
- ✅ **CEP do Rio de Janeiro** (20xxx, 21xxx, 22xxx, 23xxx)
- ✅ **CPF** formatado automaticamente
- ✅ **Telefone** formatado automaticamente
- ✅ **Campos obrigatórios** validados

## 📱 Deploy no Netlify

### Método 1: GitHub + Netlify (Recomendado)
1. **Suba para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Minha loja online"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
   git push -u origin main
   ```

2. **Conecte no Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Selecione seu repositório
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
   - Deploy!

### Método 2: Upload Direto
1. Execute `pnpm run build`
2. Faça upload da pasta `dist` no Netlify

## 🎨 Dicas de Personalização

### **Cores Personalizadas**
As cores em `branding.js` são aplicadas automaticamente:
- `primary`: Botões principais, links, destaques
- `secondary`: Fundos suaves, elementos secundários
- `accent`: Elementos de destaque, hover

### **Categorias Automáticas**
As categorias são criadas automaticamente baseadas nos produtos:
```javascript
// Se você tem produtos com category: "vibradores", "lingerie", "gel"
// O site criará automaticamente essas 3 categorias no filtro
```

### **Produtos em Destaque**
```javascript
featured: true  // ← Aparece na página inicial
```

### **Controle de Estoque**
```javascript
inStock: false  // ← Produto aparece como "Esgotado"
```

## 🔧 Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Rodar localmente (desenvolvimento)
pnpm run dev

# Build para produção
pnpm run build

# Testar build localmente
pnpm run preview
```

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] **Nome da loja** configurado
- [ ] **WhatsApp** configurado (2 números)
- [ ] **Email e Instagram** configurados
- [ ] **Logo** substituída
- [ ] **Produtos** adicionados
- [ ] **Cores** personalizadas (opcional)
- [ ] **Build** executado sem erros
- [ ] **Site testado** localmente

## 🆘 Problemas Comuns

### **"Site não carrega"**
- Verifique se executou `pnpm run build`
- Confirme se o arquivo `netlify.toml` existe

### **"Imagens não aparecem"**
- Coloque imagens em `src/assets/` ou `public/images/`
- Use caminhos corretos no `products.js`

### **"WhatsApp não funciona"**
- Use apenas números: `5521999999999`
- Não use espaços, parênteses ou hífens

### **"Erro no build"**
- Execute `pnpm install` primeiro
- Verifique se não há vírgulas extras no JSON

## 🎯 Resultado Final

Seu site terá:
- ✅ **Verificação de idade** obrigatória
- ✅ **Catálogo completo** com busca e filtros
- ✅ **Sacola de pedidos** funcional
- ✅ **Checkout personalizado** para Rio de Janeiro
- ✅ **Integração WhatsApp** automática
- ✅ **Design responsivo** profissional
- ✅ **Páginas institucionais** completas

## 🚀 Pronto!

Seu sexshop online está configurado e pronto para receber pedidos via WhatsApp!

**Boa sorte com suas vendas! 💰**

---

*Dúvidas? Consulte o README.md completo*

