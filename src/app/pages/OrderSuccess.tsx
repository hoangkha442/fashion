import { Link, useLocation } from 'react-router';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';

export function OrderSuccess() {
  const location = useLocation();
  const orderId = (location.state as any)?.orderId;

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <CheckCircle size={80} className="mx-auto mb-6 text-green-600" />
        <h1 className="text-2xl md:text-3xl font-light mb-4">Đặt Hàng Thành Công!</h1>
        <p className="text-muted-foreground mb-2">
          Cảm ơn bạn đã tin tưởng và mua sắm tại MINIMALIST
        </p>
        {orderId && (
          <p className="text-muted-foreground mb-8">
            Mã đơn hàng: <strong>{orderId}</strong>
          </p>
        )}
        <p className="text-muted-foreground mb-8">
          Chúng tôi đã gửi email xác nhận đơn hàng đến địa chỉ email của bạn.
          Đơn hàng sẽ được xử lý và giao trong 2-3 ngày làm việc.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/profile">Xem Đơn Hàng</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">Tiếp Tục Mua Sắm</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
