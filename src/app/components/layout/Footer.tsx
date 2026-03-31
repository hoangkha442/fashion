import { Link } from 'react-router';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Đăng ký nhận tin thành công!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-medium tracking-wider text-xl mb-4">MINIMALIST</h3>
            <p className="text-gray-400 mb-4">
              Thời trang tối giản, chất lượng cao. Phong cách hiện đại cho người trẻ.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Mua Sắm</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/category/nu" className="hover:text-white transition-colors">
                  Thời Trang Nữ
                </Link>
              </li>
              <li>
                <Link to="/category/nam" className="hover:text-white transition-colors">
                  Thời Trang Nam
                </Link>
              </li>
              <li>
                <Link to="/category/unisex" className="hover:text-white transition-colors">
                  Thời Trang Unisex
                </Link>
              </li>
              <li>
                <Link to="/category/phu-kien" className="hover:text-white transition-colors">
                  Phụ Kiện
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính Sách Đổi Trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hướng Dẫn Mua Hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Nhận Tin Mới</h4>
            <p className="text-gray-400 mb-4">
              Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-white text-black hover:bg-accent">
                Đăng Ký
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p>© 2026 MINIMALIST. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Chính Sách Bảo Mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều Khoản Dịch Vụ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
