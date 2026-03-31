import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { useState } from 'react';

export function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const bestsellerProducts = products.filter((p) => p.isBestseller).slice(0, 4);
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      toast.success('Đăng ký thành công!');
      setNewsletterEmail('');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] bg-secondary flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Bộ Sưu Tập<br />Xuân Hè 2026
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Khám phá phong cách tối giản, hiện đại với những thiết kế độc đáo
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-accent" asChild>
              <Link to="/category/nu">
                Mua Ngay <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-light text-center mb-12">Danh Mục Nổi Bật</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative overflow-hidden aspect-square bg-secondary"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-secondary/30">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light">Sản Phẩm Bán Chạy</h2>
          <Button variant="outline" asChild>
            <Link to="/category/nu">
              Xem Tất Cả <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="relative h-[50vh] bg-accent flex items-center my-16 md:my-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-wider mb-4">Ưu Đãi Đặc Biệt</p>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Giảm Giá Đến 30%<br />Cho Thành Viên Mới
            </h2>
            <p className="text-lg mb-8">
              Đăng ký ngay hôm nay để nhận mã giảm giá cho đơn hàng đầu tiên
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Đăng Ký Ngay</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light">Hàng Mới Về</h2>
          <Button variant="outline" asChild>
            <Link to="/category/nam">
              Xem Tất Cả <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="font-medium mb-2">Miễn Phí Vận Chuyển</h3>
              <p className="text-sm text-muted-foreground">Đơn hàng từ 500.000₫</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-2">Đổi Trả Dễ Dàng</h3>
              <p className="text-sm text-muted-foreground">Trong vòng 30 ngày</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-sm text-muted-foreground">Luôn sẵn sàng hỗ trợ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-4">Đăng Ký Nhận Tin</h2>
          <p className="text-muted-foreground mb-8">
            Nhận thông tin về sản phẩm mới, xu hướng thời trang và ưu đãi đặc biệt
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Email của bạn"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit">Đăng Ký</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
