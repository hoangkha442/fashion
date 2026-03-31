import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Heart } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export function Wishlist() {
  const { wishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <Heart size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl mb-2">Danh Sách Yêu Thích Trống</h1>
          <p className="text-muted-foreground mb-6">
            Bạn chưa có sản phẩm yêu thích nào
          </p>
          <Button asChild>
            <Link to="/category/nu">Khám Phá Sản Phẩm</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8">
        Yêu Thích ({wishlist.length})
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
