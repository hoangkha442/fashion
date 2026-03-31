import { useParams, Link, useNavigate } from 'react-router';
import { blogPosts } from '../data/mockData';
import { Clock, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl mb-4">Không tìm thấy bài viết</h1>
        <Button onClick={() => navigate('/blog')}>Về Trang Blog</Button>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] bg-secondary">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto -mt-20 relative z-10">
          <div className="bg-white p-6 md:p-10">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft size={16} className="mr-2" />
              Về Blog
            </Button>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>{post.category}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </div>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-light mb-4">{post.title}</h1>

            <div className="flex items-center gap-2 mb-8 pb-8 border-b border-border">
              <span className="text-sm">Bởi {post.author}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-6">{post.excerpt}</p>
              <p className="whitespace-pre-line">{post.content}</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16 md:mt-24 mb-12">
            <h2 className="text-2xl font-light mb-8">Bài Viết Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                  <div className="aspect-[4/3] bg-secondary mb-4 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {new Date(relatedPost.date).toLocaleDateString('vi-VN')}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
