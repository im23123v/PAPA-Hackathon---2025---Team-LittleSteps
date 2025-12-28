import React from 'react';
import { Star, ShoppingCart, Coins, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const getAgeLabel = () => {
    switch (product.ageGroup) {
      case 'level1':
        return { text: '5-10 yrs', color: 'bg-level1 text-primary-foreground' };
      case 'level2':
        return { text: '10-15 yrs', color: 'bg-level2 text-primary-foreground' };
      default:
        return { text: 'All Ages', color: 'bg-primary text-primary-foreground' };
    }
  };

  const ageLabel = getAgeLabel();

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50">
      {/* Image Container */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className={ageLabel.color}>{ageLabel.text}</Badge>
          {product.badge && (
            <Badge className="bg-secondary text-secondary-foreground">
              {product.badge}
            </Badge>
          )}
          {product.isBundle && (
            <Badge className="gradient-kit text-accent-foreground">
              <Package className="h-3 w-3 mr-1" />
              Bundle
            </Badge>
          )}
        </div>

        {/* Quick Add Button */}
        <Button
          variant="hero"
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-semibold text-sm">{product.rating}</span>
          </div>
          <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-rupee font-bold text-lg">₹{product.priceRupees}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Coins className="h-3.5 w-3.5 text-coin" />
              <span className="text-muted-foreground">or {product.priceCoins} coins</span>
            </div>
          </div>
          
          <Button
            variant="default"
            size="sm"
            onClick={() => addToCart(product)}
            className="font-semibold"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
