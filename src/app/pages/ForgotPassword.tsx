import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      toast.success('Email khôi phục mật khẩu đã được gửi!');
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-light mb-4">Kiểm Tra Email</h1>
          <p className="text-muted-foreground mb-8">
            Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến email <strong>{email}</strong>.
            Vui lòng kiểm tra hộp thư và làm theo hướng dẫn.
          </p>
          <Button asChild>
            <Link to="/login">
              <ArrowLeft size={18} className="mr-2" />
              Về Trang Đăng Nhập
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-md mx-auto">
        <Link to="/login" className="inline-flex items-center text-sm mb-6 hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Quay lại đăng nhập
        </Link>

        <h1 className="text-2xl md:text-3xl font-light mb-2">Quên Mật Khẩu?</h1>
        <p className="text-muted-foreground mb-8">
          Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn khôi phục mật khẩu
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Gửi Email Khôi Phục
          </Button>
        </form>
      </div>
    </div>
  );
}
