import { useParams } from 'react-router';
import { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import { SlidersHorizontal } from 'lucide-react';

export function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const categoryName = slug
    ? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
    : 'Tất Cả';

  const allSizes = ['S', 'M', 'L', 'XL', 'XXL', '26', '27', '28', '29', '30'];
  const allColors = [
    { name: 'Trắng', hex: '#FFFFFF' },
    { name: 'Đen', hex: '#000000' },
    { name: 'Xám', hex: '#6B7280' },
    { name: 'Be', hex: '#EADBC8' },
    { name: 'Xanh Navy', hex: '#001F3F' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = slug
      ? products.filter(
          (p) => p.category.toLowerCase() === categoryName.toLowerCase() || p.category === 'Unisex'
        )
      : products;

    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    }

    // Filter by color
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) => p.colors.some((c) => selectedColors.includes(c.name)));
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        filtered = filtered.filter((p) => p.price >= min && p.price <= max);
      } else {
        filtered = filtered.filter((p) => p.price >= min);
      }
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (a.isNew ? -1 : 1));
    } else if (sortBy === 'bestseller') {
      filtered.sort((a, b) => (a.isBestseller ? -1 : 1));
    }

    return filtered;
  }, [slug, categoryName, selectedSizes, selectedColors, priceRange, sortBy]);

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange('all');
    setSortBy('newest');
  };

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Size Filter */}
      <div>
        <h3 className="font-medium mb-4">Kích Thước</h3>
        <div className="grid grid-cols-3 gap-2">
          {allSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`border py-2 transition-colors ${
                selectedSizes.includes(size)
                  ? 'border-black bg-black text-white'
                  : 'border-border hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-medium mb-4">Màu Sắc</h3>
        <div className="space-y-2">
          {allColors.map((color) => (
            <div key={color.name} className="flex items-center gap-2">
              <Checkbox
                id={`color-${color.name}`}
                checked={selectedColors.includes(color.name)}
                onCheckedChange={() => handleColorToggle(color.name)}
              />
              <Label htmlFor={`color-${color.name}`} className="flex items-center gap-2 cursor-pointer">
                <span
                  className="w-6 h-6 border border-border"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-4">Khoảng Giá</h3>
        <div className="space-y-2">
          {[
            { label: 'Tất cả', value: 'all' },
            { label: 'Dưới 500.000₫', value: '0-500000' },
            { label: '500.000₫ - 1.000.000₫', value: '500000-1000000' },
            { label: 'Trên 1.000.000₫', value: '1000000-999999999' },
          ].map((range) => (
            <div key={range.value} className="flex items-center gap-2">
              <Checkbox
                id={`price-${range.value}`}
                checked={priceRange === range.value}
                onCheckedChange={() => setPriceRange(range.value)}
              />
              <Label htmlFor={`price-${range.value}`} className="cursor-pointer">
                {range.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full">
        Xóa Bộ Lọc
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-light mb-2">{categoryName}</h1>
        <p className="text-muted-foreground">{filteredProducts.length} sản phẩm</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar Filter */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <FilterContent />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 gap-4">
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal size={18} className="mr-2" />
                  Bộ Lọc
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Bộ Lọc</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Mới nhất</SelectItem>
                <SelectItem value="bestseller">Bán chạy</SelectItem>
                <SelectItem value="price-asc">Giá thấp đến cao</SelectItem>
                <SelectItem value="price-desc">Giá cao đến thấp</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Không tìm thấy sản phẩm nào</p>
              <Button onClick={clearFilters} variant="outline" className="mt-4">
                Xóa Bộ Lọc
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
