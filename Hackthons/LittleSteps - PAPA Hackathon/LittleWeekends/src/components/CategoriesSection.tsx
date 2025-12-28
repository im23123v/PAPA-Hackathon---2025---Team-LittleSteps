import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, activities } from '@/data/activities';

export const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect activity for every mood and moment
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const count = activities.filter(a => a.category === category.id).length;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/activities?category=${category.id}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${category.color} rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all cursor-pointer h-full`}
                  >
                    <div className="text-4xl md:text-5xl mb-3">{category.emoji}</div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/70">{count} activities</p>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
