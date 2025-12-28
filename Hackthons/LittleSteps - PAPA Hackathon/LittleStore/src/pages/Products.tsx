import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('popular');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedAge) {
      result = result.filter(p => p.ageGroup === selectedAge || p.ageGroup === 'all');
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.priceRupees - b.priceRupees);
        break;
      case 'price-high':
        result.sort((a, b) => b.priceRupees - a.priceRupees);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [selectedCategory, selectedAge, sortBy]);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Helmet>
        <title>All Products - LittleStore | Educational Products for Kids</title>
        <meta name="description" content="Browse our complete collection of educational products for Indian children. Books, games, puzzles, art supplies, and more!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              All <span className="text-gradient">Products</span>
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products available
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-card rounded-2xl border border-border/50">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Category:
              </span>
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryClick(null)}
              >
                All
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.icon} {cat.name}
                </Button>
              ))}
            </div>

            {/* Age Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground">Age:</span>
              <Button
                variant={selectedAge === null ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedAge(null)}
              >
                All Ages
              </Button>
              <Button
                variant={selectedAge === 'level1' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedAge('level1')}
                className={selectedAge === 'level1' ? 'bg-level1 text-primary-foreground' : ''}
              >
                5-10 yrs
              </Button>
              <Button
                variant={selectedAge === 'level2' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedAge('level2')}
                className={selectedAge === 'level2' ? 'bg-level2 text-primary-foreground' : ''}
              >
                10-15 yrs
              </Button>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-muted border-0 rounded-lg px-3 py-1.5 text-sm font-medium focus:ring-2 focus:ring-primary"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-display text-xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Products;
