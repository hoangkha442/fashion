export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  subcategories: string[];
}

// Mock Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Áo Sơ Mi Trắng Oversized',
    slug: 'ao-so-mi-trang-oversized',
    price: 590000,
    originalPrice: 790000,
    description: 'Áo sơ mi trắng form oversized thanh lịch, chất liệu cotton cao cấp, phù hợp mọi dịp từ công sở đến dạo phố. Thiết kế tối giản nhưng cực kỳ sang trọng.',
    category: 'Nam',
    subcategory: 'Áo Sơ Mi',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Trắng', hex: '#FFFFFF' },
      { name: 'Đen', hex: '#000000' },
      { name: 'Xanh Navy', hex: '#001F3F' },
    ],
    inStock: true,
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        author: 'Minh Hoàng',
        rating: 5,
        date: '2026-03-15',
        comment: 'Chất liệu mát, form đẹp. Mình rất hài lòng!',
      },
      {
        id: 'r2',
        author: 'Thu Hà',
        rating: 4,
        date: '2026-03-10',
        comment: 'Đẹp nhưng hơi rộng so với size chart.',
      },
    ],
  },
  {
    id: '2',
    name: 'Váy Midi Linen Be',
    slug: 'vay-midi-linen-be',
    price: 690000,
    description: 'Váy midi chất liệu linen mềm mại, màu be thanh lịch. Thiết kế xẻ tà nhẹ, tạo sự thoải mái khi di chuyển. Hoàn hảo cho mùa hè.',
    category: 'Nữ',
    subcategory: 'Váy',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Be', hex: '#EADBC8' },
      { name: 'Trắng Kem', hex: '#FFF8DC' },
    ],
    inStock: true,
    isBestseller: true,
    rating: 4.9,
    reviews: [],
  },
  {
    id: '3',
    name: 'Quần Jeans Ống Rộng',
    slug: 'quan-jeans-ong-rong',
    price: 790000,
    originalPrice: 990000,
    description: 'Quần jeans ống rộng phong cách vintage. Chất denim cao cấp, bền đẹp theo thời gian. Form dáng hiện đại, dễ phối đồ.',
    category: 'Nữ',
    subcategory: 'Quần',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906ab40c5?w=800&q=80',
    ],
    sizes: ['26', '27', '28', '29', '30'],
    colors: [
      { name: 'Xanh Nhạt', hex: '#6DB5D4' },
      { name: 'Xanh Đậm', hex: '#1E3A8A' },
      { name: 'Đen', hex: '#000000' },
    ],
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: [],
  },
  {
    id: '4',
    name: 'Áo Blazer Đen Classic',
    slug: 'ao-blazer-den-classic',
    price: 1290000,
    description: 'Áo blazer đen form fitted, thiết kế cổ điển nhưng không kém phần hiện đại. Chất liệu polyester pha wool cao cấp, giữ form tốt.',
    category: 'Nữ',
    subcategory: 'Áo Khoác',
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Đen', hex: '#000000' },
      { name: 'Xám', hex: '#6B7280' },
    ],
    inStock: true,
    rating: 4.9,
    reviews: [],
  },
  {
    id: '5',
    name: 'Áo Thun Basic Cotton',
    slug: 'ao-thun-basic-cotton',
    price: 290000,
    description: 'Áo thun basic 100% cotton. Form regular fit, phù hợp làm nền cho mọi outfit. Có đủ màu sắc cơ bản.',
    category: 'Nam',
    subcategory: 'Áo Thun',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Trắng', hex: '#FFFFFF' },
      { name: 'Đen', hex: '#000000' },
      { name: 'Xám', hex: '#6B7280' },
      { name: 'Be', hex: '#EADBC8' },
    ],
    inStock: true,
    isBestseller: true,
    rating: 4.6,
    reviews: [],
  },
  {
    id: '6',
    name: 'Quần Tây Nam Slim Fit',
    slug: 'quan-tay-nam-slim-fit',
    price: 690000,
    description: 'Quần tây nam form slim fit hiện đại. Chất liệu vải cao cấp, không nhăn, phù hợp cho môi trường công sở.',
    category: 'Nam',
    subcategory: 'Quần',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    ],
    sizes: ['29', '30', '31', '32', '33', '34'],
    colors: [
      { name: 'Đen', hex: '#000000' },
      { name: 'Xám Đậm', hex: '#374151' },
      { name: 'Xanh Navy', hex: '#001F3F' },
    ],
    inStock: true,
    rating: 4.7,
    reviews: [],
  },
  {
    id: '7',
    name: 'Đầm Maxi Hoa Nhí',
    slug: 'dam-maxi-hoa-nhi',
    price: 890000,
    originalPrice: 1190000,
    description: 'Đầm maxi họa tiết hoa nhí nhẹ nhàng, phong cách vintage. Thiết kế tay phồng, cổ vuông thanh lịch.',
    category: 'Nữ',
    subcategory: 'Đầm',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Trắng Hoa', hex: '#FFFFFF' },
      { name: 'Be Hoa', hex: '#EADBC8' },
    ],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: [],
  },
  {
    id: '8',
    name: 'Áo Hoodie Unisex',
    slug: 'ao-hoodie-unisex',
    price: 590000,
    description: 'Áo hoodie unisex form rộng thoải mái. Chất nỉ ngoại dày dặn, ấm áp. Logo thêu tinh tế.',
    category: 'Unisex',
    subcategory: 'Áo Khoác',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Đen', hex: '#000000' },
      { name: 'Xám', hex: '#6B7280' },
      { name: 'Be', hex: '#EADBC8' },
    ],
    inStock: true,
    isBestseller: true,
    rating: 4.9,
    reviews: [],
  },
];

// Mock Categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'Nữ',
    slug: 'nu',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    subcategories: ['Áo Sơ Mi', 'Áo Thun', 'Áo Khoác', 'Quần', 'Váy', 'Đầm'],
  },
  {
    id: '2',
    name: 'Nam',
    slug: 'nam',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80',
    subcategories: ['Áo Sơ Mi', 'Áo Thun', 'Áo Khoác', 'Quần', 'Áo Polo'],
  },
  {
    id: '3',
    name: 'Unisex',
    slug: 'unisex',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80',
    subcategories: ['Áo Khoác', 'Áo Thun', 'Phụ Kiện'],
  },
  {
    id: '4',
    name: 'Phụ Kiện',
    slug: 'phu-kien',
    image: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=600&q=80',
    subcategories: ['Túi Xách', 'Ví', 'Mũ', 'Kính Mát', 'Thắt Lưng'],
  },
];

// Mock Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Xu Hướng Thời Trang Xuân Hè 2026',
    slug: 'xu-huong-thoi-trang-xuan-he-2026',
    excerpt: 'Khám phá những xu hướng thời trang nổi bật sẽ thống trị mùa xuân hè năm nay, từ màu sắc đến chất liệu.',
    content: 'Mùa xuân hè 2026 đánh dấu sự trở lại của phong cách tối giản (minimalism) kết hợp với các yếu tố vintage đầy tinh tế. Màu sắc chủ đạo bao gồm be, trắng kem, xanh pastel và các tông màu đất. Chất liệu linen, cotton tự nhiên được ưa chuộng hơn bao giờ hết...',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    category: 'Xu Hướng',
    author: 'Lan Anh',
    date: '2026-03-20',
    readTime: '5 phút',
  },
  {
    id: '2',
    title: 'Cách Mix Đồ Công Sở Thanh Lịch Cho Nữ',
    slug: 'cach-mix-do-cong-so-thanh-lich-cho-nu',
    excerpt: 'Hướng dẫn chi tiết cách phối đồ công sở vừa chuyên nghiệp vừa thời trang cho phái nữ.',
    content: 'Trang phục công sở không nhất thiết phải nhàm chán. Với một vài tips nhỏ, bạn hoàn toàn có thể tạo nên những outfit vừa thanh lịch, vừa thể hiện cá tính riêng...',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
    category: 'Phối Đồ',
    author: 'Minh Thu',
    date: '2026-03-18',
    readTime: '7 phút',
  },
  {
    id: '3',
    title: 'Bí Quyết Chọn Quần Jeans Hoàn Hảo Cho Dáng Người',
    slug: 'bi-quyet-chon-quan-jeans-hoan-hao',
    excerpt: 'Mỗi dáng người sẽ phù hợp với một kiểu quần jeans khác nhau. Cùng tìm hiểu cách chọn quần jeans phù hợp nhất.',
    content: 'Quần jeans là item không thể thiếu trong tủ đồ của bất kỳ ai. Tuy nhiên, việc tìm được chiếc quần jeans hoàn hảo cho dáng người của bạn không phải lúc nào cũng dễ dàng...',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    category: 'Hướng Dẫn',
    author: 'Đức Anh',
    date: '2026-03-15',
    readTime: '6 phút',
  },
  {
    id: '4',
    title: 'Chăm Sóc Và Bảo Quản Quần Áo Đúng Cách',
    slug: 'cham-soc-va-bao-quan-quan-ao-dung-cach',
    excerpt: 'Những mẹo nhỏ giúp quần áo của bạn luôn bền đẹp, giữ form và màu sắc lâu hơn.',
    content: 'Việc chăm sóc quần áo đúng cách không chỉ giúp chúng bền hơn mà còn tiết kiệm chi phí mua sắm. Dưới đây là những tips quan trọng bạn cần biết...',
    image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80',
    category: 'Hướng Dẫn',
    author: 'Hương Giang',
    date: '2026-03-12',
    readTime: '4 phút',
  },
];

// Cart State Interface
export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

// User Interface
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  isDefault: boolean;
}

// Order Interface
export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  items: CartItem[];
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
}
