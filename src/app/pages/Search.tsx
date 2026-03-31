import { useApp } from '../context/AppContext';
import { products } from '../data/mockData';
import { ProductCard } from '../components/ProductCard';
import { useMemo } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const { searchQuery } = useApp();

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-light mb-2">Kết Quả Tìm Kiếm</h1>
        <p className="text-muted-foreground">
          {searchQuery && (
            <>
              Tìm thấy {searchResults.length} sản phẩm cho "<strong>{searchQuery}</strong>"
            </>
          )}
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <SearchIcon size={64} className="mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl mb-2">Không tìm thấy sản phẩm nào</h2>
          <p className="text-muted-foreground">
            Vui lòng thử lại với từ khóa khác
          </p>
        </div>
      )}
    </div>
  );
}
