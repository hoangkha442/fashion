import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { Package, MapPin, Lock, User as UserIcon } from 'lucide-react';

export function Profile() {
  const { user, logout, orders, isAuthenticated } = useApp();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cập nhật thông tin thành công!');
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Đổi mật khẩu thành công!');
  };

  const handleLogout = () => {
    logout();
    toast.success('Đăng xuất thành công');
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'Chờ xử lý', variant: 'secondary' as const },
      processing: { label: 'Đang xử lý', variant: 'default' as const },
      shipped: { label: 'Đang giao', variant: 'default' as const },
      delivered: { label: 'Đã giao', variant: 'default' as const },
      cancelled: { label: 'Đã hủy', variant: 'destructive' as const },
    };
    const { label, variant } = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    return <Badge variant={variant}>{label}</Badge>;
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-light">Tài Khoản Của Tôi</h1>
          <Button variant="outline" onClick={handleLogout}>
            Đăng Xuất
          </Button>
        </div>

        <Tabs defaultValue="info" className="w-full">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="info" className="gap-2">
              <UserIcon size={18} />
              Thông Tin
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <Package size={18} />
              Đơn Hàng
            </TabsTrigger>
            <TabsTrigger value="addresses" className="gap-2">
              <MapPin size={18} />
              Địa Chỉ
            </TabsTrigger>
            <TabsTrigger value="password" className="gap-2">
              <Lock size={18} />
              Mật Khẩu
            </TabsTrigger>
          </TabsList>

          {/* Profile Info */}
          <TabsContent value="info" className="mt-6">
            <form onSubmit={handleUpdateProfile} className="max-w-md space-y-6">
              <div>
                <Label htmlFor="name">Họ và tên</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Button type="submit">Cập Nhật Thông Tin</Button>
            </form>
          </TabsContent>

          {/* Orders */}
          <TabsContent value="orders" className="mt-6">
            <div className="space-y-4">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div key={order.id} className="border border-border p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <p className="font-medium">Đơn hàng #{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.date).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(order.status)}
                        <span className="font-medium">{order.total.toLocaleString('vi-VN')}₫</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                          className="flex gap-3 text-sm"
                        >
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-16 h-20 object-cover bg-secondary"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{item.product.name}</p>
                            <p className="text-muted-foreground">
                              {item.selectedSize} | {item.selectedColor} | SL: {item.quantity}
                            </p>
                          </div>
                          <span className="font-medium">
                            {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Package size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Bạn chưa có đơn hàng nào</p>
                  <Button onClick={() => navigate('/category/nu')}>Bắt Đầu Mua Sắm</Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Addresses */}
          <TabsContent value="addresses" className="mt-6">
            <div className="space-y-4">
              {user?.addresses && user.addresses.length > 0 ? (
                user.addresses.map((address) => (
                  <div key={address.id} className="border border-border p-4 md:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium">{address.fullName}</p>
                      {address.isDefault && <Badge>Mặc định</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{address.phone}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {address.address}, {address.ward}, {address.district}, {address.city}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <MapPin size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Chưa có địa chỉ nào</p>
                  <Button onClick={() => toast.info('Chức năng đang phát triển')}>
                    Thêm Địa Chỉ
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Change Password */}
          <TabsContent value="password" className="mt-6">
            <form onSubmit={handleChangePassword} className="max-w-md space-y-6">
              <div>
                <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                <Input id="currentPassword" type="password" required />
              </div>
              <div>
                <Label htmlFor="newPassword">Mật khẩu mới</Label>
                <Input id="newPassword" type="password" required />
              </div>
              <div>
                <Label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới</Label>
                <Input id="confirmNewPassword" type="password" required />
              </div>
              <Button type="submit">Đổi Mật Khẩu</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
