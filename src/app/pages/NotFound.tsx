import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-8xl md:text-9xl font-light mb-4">404</h1>
        <h2 className="text-2xl mb-4">Trang Không Tồn Tại</h2>
        <p className="text-muted-foreground mb-8">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <Button asChild size="lg">
          <Link to="/">
            <Home size={20} className="mr-2" />
            Về Trang Chủ
          </Link>
        </Button>
      </div>
    </div>
  );
}
