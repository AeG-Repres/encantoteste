// ========================================
// CONFIGURAÇÃO DA MARCA - EDITE AQUI!
// ========================================
// Este arquivo controla toda a identidade visual da loja
// Altere apenas os valores, mantenha a estrutura

export const branding = {
  // INFORMAÇÕES BÁSICAS DA LOJA
  storeName: "Encanto Íntimo",
  storeSlogan: "Desperte seus desejos mais íntimos",
  storeDescription: "Produtos de qualidade para momentos especiais",
  
  // CONTATO
  contact: {
    whatsapp: "5511999999999", // Apenas números
    whatsappOrder: "5521999999999", // WhatsApp para pedidos (apenas números)
    email: "contato@encantointimo.com.br",
    instagram: "@encantointimo",
    address: "Rio de Janeiro, RJ"
  },

  // CORES DO SITE (baseadas na logo)
  colors: {
    primary: "#8B4B6B", // Rosa vinho da logo
    secondary: "#E8D5D5", // Rosa claro
    accent: "#6B3A4F", // Vinho mais escuro
    background: "#FEFEFE", // Branco suave
    text: "#2D2D2D" // Cinza escuro
  },

  // CONFIGURAÇÕES DE IDADE
  ageVerification: {
    enabled: true,
    minimumAge: 18,
    message: "Este site contém conteúdo adulto. Você tem mais de 18 anos?"
  },

  // SEO
  seo: {
    title: "Encanto Íntimo - Produtos Íntimos de Qualidade",
    description: "Descubra nossa seleção exclusiva de produtos íntimos. Discrição, qualidade e entrega rápida.",
    keywords: "produtos íntimos, sexshop, bem-estar, relacionamento"
  }
};

// NÃO ALTERE ABAIXO DESTA LINHA
export default branding;

