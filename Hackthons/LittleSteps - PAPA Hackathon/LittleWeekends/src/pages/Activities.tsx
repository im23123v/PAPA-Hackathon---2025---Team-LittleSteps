import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ActivityCard } from '@/components/ActivityCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { activities } from '@/data/activities';
import { Input } from '@/components/ui/input';

const Activities = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = useMemo(() => {
    return activities.filter(activity => {
      const matchesCategory = !selectedCategory || activity.category === selectedCategory;
      const matchesSearch = !searchQuery || 
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Helmet>
        <title>All Activities - LittleWeekends</title>
        <meta name="description" content="Browse 20+ fun screen-free activities for kids including drawing, coloring, crafts, games, and outdoor adventures. Step-by-step guides with video tutorials." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="py-12 md:py-16 bg-gradient-to-br from-peach/30 via-background to-mint/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Explore All Activities ✨
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  {activities.length} fun activities waiting for you!
                </p>

                {/* Search */}
                <div className="relative max-w-md mx-auto mb-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search activities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-xl bg-card border-border"
                  />
                </div>

                {/* Category Filter */}
                <CategoryFilter
                  selected={selectedCategory}
                  onSelect={handleCategorySelect}
                />
              </motion.div>
            </div>
          </section>

          {/* Activities Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              {filteredActivities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredActivities.map((activity, index) => (
                    <ActivityCard key={activity.id} activity={activity} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    No activities found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </motion.div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Activities;
