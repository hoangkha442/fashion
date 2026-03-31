import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <div className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-light mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi qua form
            dưới đây hoặc thông tin liên lạc.
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-light mb-8">Thông Tin Liên Hệ</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-1">Địa Chỉ</p>
                  <p className="text-muted-foreground">
                    123 Đường Nguyễn Huệ, Quận 1<br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-1">Điện Thoại</p>
                  <p className="text-muted-foreground">
                    Hotline: 1900 xxxx<br />
                    Di động: 0123 456 789
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-muted-foreground">
                    Hỗ trợ: support@minimalist.vn<br />
                    Hợp tác: business@minimalist.vn
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium mb-1">Giờ Làm Việc</p>
                  <p className="text-muted-foreground">
                    Thứ 2 - Thứ 6: 9:00 - 21:00<br />
                    Thứ 7 - Chủ Nhật: 10:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 aspect-video bg-secondary overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4976050835655!2d106.70292631533309!3d10.776889062102778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc1%3A0xb4fd17752cf8351!2zTmd1eeG7hW4gSHXhu4csIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light mb-8">Gửi Tin Nhắn</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Họ và tên *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label htmlFor="message">Tin nhắn *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Gửi Tin Nhắn
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
