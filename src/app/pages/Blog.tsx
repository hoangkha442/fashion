import { Link } from 'react-router';
import { blogPosts } from '../data/mockData';
import { Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'Xu Hướng', 'Phối Đồ', 'Hướng Dẫn'];

  const filteredPosts =
    selectedCategory === 'all'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-light mb-8">Blog</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'Tất Cả' : category}
          </Button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="group">
            <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{post.category}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
              <h2 className="font-medium text-lg group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-sm">
                <span>{post.author}</span>
                <span>•</span>
                <span className="text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
