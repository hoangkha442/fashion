import { Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export function Cart() {
  const { cart, updateCartQuantity, removeFromCart, cartTotal } = useApp();

  const shippingFee = cartTotal >= 500000 ? 0 : 30000;
  const total = cartTotal + shippingFee;

  const handleQuantityChange = (productId: string, size: string, color: string, newQuantity: number) => {
    updateCartQuantity(productId, size, color, newQuantity);
  };

  const handleRemove = (productId: string, size: string, color: string, productName: string) => {
    removeFromCart(productId, size, color);
    toast.success(`Đã xóa ${productName} khỏi giỏ hàng`);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl mb-2">Giỏ Hàng Trống</h1>
          <p className="text-muted-foreground mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Button asChild>
            <Link to="/category/nu">Tiếp Tục Mua Sắm</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8">Giỏ Hàng ({cart.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
              className="flex gap-4 border border-border p-4"
            >
              <Link
                to={`/product/${item.product.slug}`}
                className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="font-medium hover:text-muted-foreground transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    Size: {item.selectedSize} | Màu: {item.selectedColor}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1
                        )
                      }
                      className="p-2 hover:bg-secondary transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-medium">
                      {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                    </span>
                    <button
                      onClick={() =>
                        handleRemove(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.product.name
                        )
                      }
                      className="p-2 hover:bg-destructive/10 text-destructive transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-border p-6 sticky top-24">
            <h2 className="font-medium mb-6">Tổng Đơn Hàng</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tạm tính</span>
                <span>{cartTotal.toLocaleString('vi-VN')}₫</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phí vận chuyển</span>
                <span>{shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString('vi-VN')}₫`}</span>
              </div>
              {shippingFee > 0 && (
                <p className="text-sm text-muted-foreground">
                  Mua thêm {(500000 - cartTotal).toLocaleString('vi-VN')}₫ để được miễn phí vận chuyển
                </p>
              )}
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Tổng cộng</span>
                <span className="text-xl font-medium">{total.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>

            <Button className="w-full mb-3" size="lg" asChild>
              <Link to="/checkout">Tiến Hành Thanh Toán</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/category/nu">Tiếp Tục Mua Sắm</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
