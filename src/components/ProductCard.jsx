import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import { 
  ShoppingCart, 
  Heart, 
  Star,
  Eye
} from 'lucide-react';

const ProductCard = ({ product, addToCart, className = "" }) => {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${className}`}>
      <Link to={`/produto/${product.id}`}>
        <div className="relative overflow-hidden">
          {/* Badges */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
            {!product.inStock && (
              <Badge variant="destructive" className="text-xs">
                Esgotado
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-green-600 text-xs">
                -{discountPercentage}%
              </Badge>
            )}
            {product.featured && (
              <Badge className="bg-rose-600 text-xs">
                Destaque
              </Badge>
            )}
          </div>

          {/* Botão de favorito */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Implementar funcionalidade de favoritos
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Imagem do produto */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Overlay com botão de visualização rápida */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white/90 hover:bg-white"
            >
              <Eye className="h-4 w-4 mr-2" />
              Ver Detalhes
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Avaliações */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Preços */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-rose-600">
            R$ {product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Descrição curta */}
        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full"
          variant={product.inStock ? "default" : "secondary"}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Adicionar à Sacola' : 'Produto Esgotado'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

