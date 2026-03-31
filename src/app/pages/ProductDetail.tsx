import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { products } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Heart, Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useApp();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl mb-4">Không tìm thấy sản phẩm</h1>
        <Button onClick={() => navigate('/')}>Về Trang Chủ</Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Vui lòng chọn kích thước');
      return;
    }
    if (!selectedColor) {
      toast.error('Vui lòng chọn màu sắc');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    toast.success('Đã thêm vào giỏ hàng');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Vui lòng chọn đầy đủ thông tin sản phẩm');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    navigate('/checkout');
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Đã xóa khỏi yêu thích');
    } else {
      addToWishlist(product);
      toast.success('Đã thêm vào yêu thích');
    }
  };

  return (
    <div>
      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-secondary overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                  <h1 className="text-2xl md:text-3xl font-light">{product.name}</h1>
                </div>
                <button
                  onClick={handleWishlistToggle}
                  className="p-2 hover:bg-secondary transition-colors"
                >
                  <Heart
                    size={24}
                    className={isInWishlist(product.id) ? 'fill-black' : ''}
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'fill-black' : 'fill-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews.length} đánh giá)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-medium">{product.price.toLocaleString('vi-VN')}₫</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}₫
                    </span>
                    <Badge className="bg-accent text-black">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <Label className="font-medium">Kích Thước</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-sm underline">Bảng size</button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Bảng Kích Thước</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        Hướng dẫn chọn size phù hợp
                      </p>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Size</th>
                            <th className="text-left py-2">Ngực (cm)</th>
                            <th className="text-left py-2">Eo (cm)</th>
                            <th className="text-left py-2">Mông (cm)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2">S</td>
                            <td>84-88</td>
                            <td>64-68</td>
                            <td>88-92</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">M</td>
                            <td>88-92</td>
                            <td>68-72</td>
                            <td>92-96</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2">L</td>
                            <td>92-96</td>
                            <td>72-76</td>
                            <td>96-100</td>
                          </tr>
                          <tr>
                            <td className="py-2">XL</td>
                            <td>96-100</td>
                            <td>76-80</td>
                            <td>100-104</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-border hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <Label className="font-medium mb-3 block">Màu Sắc</Label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2 px-4 py-2 border transition-colors ${
                      selectedColor === color.name
                        ? 'border-black'
                        : 'border-border hover:border-black'
                    }`}
                  >
                    <span
                      className="w-6 h-6 border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <Label className="font-medium mb-3 block">Số Lượng</Label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <Badge variant={product.inStock ? 'default' : 'destructive'}>
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </Badge>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button onClick={handleAddToCart} variant="outline" className="flex-1" size="lg">
                <ShoppingBag size={20} className="mr-2" />
                Thêm Vào Giỏ
              </Button>
              <Button onClick={handleBuyNow} className="flex-1" size="lg">
                Mua Ngay
              </Button>
            </div>

            {/* Info */}
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between py-3 border-t border-border">
                <span className="text-muted-foreground">Miễn phí vận chuyển</span>
                <span>Đơn hàng từ 500.000₫</span>
              </div>
              <div className="flex justify-between py-3 border-t border-border">
                <span className="text-muted-foreground">Đổi trả dễ dàng</span>
                <span>Trong vòng 30 ngày</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl font-light mb-8">Đánh Giá</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'fill-black' : 'fill-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.author}</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl font-light mb-8">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Label({ children, className = '', ...props }: any) {
  return (
    <label className={`text-sm font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}
