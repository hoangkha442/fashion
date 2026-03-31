import { Link } from 'react-router';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Đã xóa khỏi danh sách yêu thích');
    } else {
      addToWishlist(product);
      toast.success('Đã thêm vào danh sách yêu thích');
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-secondary mb-3 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-black text-white">Mới</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-accent text-black">-{discount}%</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart
            size={18}
            className={inWishlist ? 'fill-black' : ''}
          />
        </button>

        {/* Quick Add to Cart (on hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button className="w-full" size="sm" asChild>
            <Link to={`/product/${product.slug}`}>
              <ShoppingBag size={16} className="mr-2" />
              Xem Chi Tiết
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">{product.price.toLocaleString('vi-VN')}₫</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString('vi-VN')}₫
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
