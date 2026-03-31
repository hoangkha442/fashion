import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { toast } from 'sonner';
import { Order } from '../data/mockData';

export function Checkout() {
  const { cart, cartTotal, clearCart, addOrder, user, isAuthenticated } = useApp();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.addresses[0]?.address || '',
    city: user?.addresses[0]?.city || '',
    district: user?.addresses[0]?.district || '',
    ward: user?.addresses[0]?.ward || '',
  });

  const shippingFee = cartTotal >= 500000 ? 0 : 30000;
  const total = cartTotal + shippingFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    // Create order
    const order: Order = {
      id: `ORD${Date.now()}`,
      date: new Date().toISOString(),
      status: 'pending',
      items: cart,
      total,
      shippingAddress: {
        id: '1',
        fullName: formData.fullName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        district: formData.district,
        ward: formData.ward,
        isDefault: true,
      },
      paymentMethod,
    };

    addOrder(order);
    clearCart();
    navigate('/order-success', { state: { orderId: order.id } });
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8">Thanh Toán</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Login Prompt */}
            {!isAuthenticated && (
              <div className="bg-accent/30 border border-accent p-4">
                <p className="mb-2">
                  Đã có tài khoản?{' '}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => navigate('/login', { state: { from: '/checkout' } })}
                  >
                    Đăng nhập
                  </Button>
                </p>
              </div>
            )}

            <div className="border border-border p-6">
              <h2 className="font-medium mb-6">Thông Tin Giao Hàng</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="address">Địa chỉ *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Số nhà, tên đường"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="ward">Phường/Xã</Label>
                  <Input
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="district">Quận/Huyện</Label>
                  <Input
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="city">Tỉnh/Thành phố</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="border border-border p-6">
              <h2 className="font-medium mb-6">Phương Thức Thanh Toán</h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="cursor-pointer">
                    Thanh toán khi nhận hàng (COD)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="cursor-pointer">
                    Chuyển khoản ngân hàng
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer">
                    Thẻ tín dụng/ghi nợ
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === 'bank' && (
                <div className="mt-4 p-4 bg-secondary text-sm">
                  <p className="font-medium mb-2">Thông tin chuyển khoản:</p>
                  <p>Ngân hàng: Vietcombank</p>
                  <p>Số tài khoản: 1234567890</p>
                  <p>Chủ tài khoản: MINIMALIST FASHION</p>
                  <p className="mt-2 text-muted-foreground">
                    Vui lòng chuyển khoản với nội dung: Tên + Số điện thoại
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-border p-6 sticky top-24">
              <h2 className="font-medium mb-6">Đơn Hàng</h2>

              {/* Products */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-3"
                  >
                    <div className="w-16 h-20 bg-secondary flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium">{item.product.name}</p>
                      <p className="text-muted-foreground">
                        {item.selectedSize} | {item.selectedColor}
                      </p>
                      <p className="text-muted-foreground">SL: {item.quantity}</p>
                    </div>
                    <div className="font-medium text-sm">
                      {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-border pt-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tạm tính</span>
                  <span>{cartTotal.toLocaleString('vi-VN')}₫</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Phí vận chuyển</span>
                  <span>{shippingFee === 0 ? 'Miễn phí' : `${shippingFee.toLocaleString('vi-VN')}₫`}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Tổng cộng</span>
                  <span className="text-xl font-medium">{total.toLocaleString('vi-VN')}₫</span>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Xác Nhận Đặt Hàng
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
