// ========================================
// PRODUTOS DA LOJA - EDITE AQUI!
// ========================================
// Para adicionar um produto, copie um produto existente e altere as informações
// Para remover um produto, delete o objeto completo

export const products = [
  {
    id: 1,
    name: "Vibrador Discreto Rose",
    category: "vibradores",
    price: 89.90,
    originalPrice: 129.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
    description: "Vibrador discreto e silencioso, perfeito para iniciantes. Design elegante e funcional.",
    features: [
      "10 modos de vibração",
      "Silicone médico",
      "À prova d'água",
      "Recarregável via USB",
      "Silencioso"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Kit Sensual Completo",
    category: "kits",
    price: 159.90,
    originalPrice: 199.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
    description: "Kit completo para casais que querem explorar novas sensações juntos.",
    features: [
      "Vibrador para casais",
      "Óleo de massagem",
      "Venda para os olhos",
      "Dados eróticos",
      "Embalagem discreta"
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Lubrificante Premium",
    category: "lubrificantes",
    price: 29.90,
    originalPrice: 39.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300"],
    description: "Lubrificante à base de água, compatível com preservativos e brinquedos.",
    features: [
      "Base aquosa",
      "Longa duração",
      "Sem sabor",
      "Dermatologicamente testado",
      "100ml"
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: "Anel Peniano Vibratório",
    category: "acessorios",
    price: 49.90,
    originalPrice: 69.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
    description: "Anel vibratório para casais, proporciona prazer para ambos os parceiros.",
    features: [
      "Vibração intensa",
      "Silicone flexível",
      "Bateria de longa duração",
      "Fácil de usar",
      "Estimulação dupla"
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 5,
    name: "Massageador Corporal",
    category: "massageadores",
    price: 119.90,
    originalPrice: 149.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
    description: "Massageador versátil para relaxamento e prazer, design ergonômico.",
    features: [
      "8 velocidades",
      "Cabeça flexível",
      "Recarregável",
      "Silencioso",
      "Múltiplos usos"
    ],
    inStock: false,
    featured: false,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 6,
    name: "Lingerie Sensual Vermelha",
    category: "lingerie",
    price: 79.90,
    originalPrice: 99.90,
    image: "/api/placeholder/300/300",
    images: ["/api/placeholder/300/300", "/api/placeholder/300/300"],
    description: "Conjunto de lingerie em renda delicada, disponível em vários tamanhos.",
    features: [
      "Renda importada",
      "Tamanhos P ao GG",
      "Confortável",
      "Design exclusivo",
      "Cor vermelha"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 94
  }
];

// CATEGORIAS DISPONÍVEIS
export const categories = [
  { id: "todos", name: "Todos os Produtos", icon: "Grid3X3" },
  { id: "vibradores", name: "Vibradores", icon: "Zap" },
  { id: "kits", name: "Kits Sensuais", icon: "Package" },
  { id: "lubrificantes", name: "Lubrificantes", icon: "Droplets" },
  { id: "acessorios", name: "Acessórios", icon: "Star" },
  { id: "massageadores", name: "Massageadores", icon: "Hand" },
  { id: "lingerie", name: "Lingerie", icon: "Heart" }
];

// CONFIGURAÇÕES DE PRODUTOS
export const productSettings = {
  // Produtos por página
  productsPerPage: 12,
  
  // Mostrar produtos em destaque na home
  showFeaturedOnHome: true,
  
  // Número de produtos em destaque na home
  featuredProductsCount: 3,
  
  // Mostrar avaliações
  showRatings: true,
  
  // Mostrar preço original (riscado)
  showOriginalPrice: true
};

// NÃO ALTERE ABAIXO DESTA LINHA
export default products;

