import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Gift, Check, Star, Sparkles, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const LittleKits: React.FC = () => {
  const { addToCart } = useCart();
  const kits = products.filter(p => p.category === 'kits');

  // Calculate savings
  const calculateSavings = (kitPrice: number) => {
    const originalPrice = Math.round(kitPrice * 1.67);
    const savings = originalPrice - kitPrice;
    const percentage = Math.round((savings / originalPrice) * 100);
    return { originalPrice, savings, percentage };
  };

  return (
    <>
      <Helmet>
        <title>LittleKits - Complete Learning Bundles | LittleStore</title>
        <meta name="description" content="Get everything in one bundle! LittleKits include books, chess, Rubik's cube, puzzles, and maps. Perfect gift for Indian children. Save up to 40%!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-16 md:py-20">
            <div className="absolute inset-0 gradient-kit opacity-10" />
            
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6">
                  <Gift className="h-4 w-4" />
                  <span>Complete Learning Bundles</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Introducing <span className="text-gradient">LittleKits</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Why buy separately when you can get everything together? Our carefully curated bundles combine the best products for maximum learning and fun!
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-sm">
                    <Star className="h-5 w-5 text-warning fill-warning" />
                    <span className="font-semibold">4.9 Average Rating</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-sm">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold">6+ Items per Kit</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-sm">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Save up to 40%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kits Section */}
          <section className="py-12 container mx-auto px-4">
            <div className="space-y-12">
              {kits.map((kit, index) => {
                const { originalPrice, savings, percentage } = calculateSavings(kit.priceRupees);
                
                return (
                  <div
                    key={kit.id}
                    className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="grid lg:grid-cols-2">
                      {/* Left - Image & Badge */}
                      <div className="relative aspect-video lg:aspect-auto gradient-kit p-8 flex items-center justify-center">
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-card/20 text-accent-foreground border-0 text-sm px-3 py-1">
                            <Sparkles className="h-4 w-4 mr-1" />
                            {kit.badge}
                          </Badge>
                        </div>
                        
                        <div className="text-center text-accent-foreground">
                          <div className="text-8xl mb-4">🎁</div>
                          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                            {kit.name}
                          </h2>
                          <p className="text-accent-foreground/80 text-lg">
                            {kit.ageGroup === 'level2' ? 'For ages 10-15 years' : 'For all ages 5-15 years'}
                          </p>
                        </div>
                      </div>

                      {/* Right - Details */}
                      <div className="p-8 lg:p-10">
                        <p className="text-muted-foreground text-lg mb-6">
                          {kit.description}
                        </p>

                        {/* What's Included */}
                        <h3 className="font-display font-bold text-xl mb-4">What's Inside:</h3>
                        <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                          {kit.bundleItems?.map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                                <Check className="h-4 w-4 text-success" />
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Pricing */}
                        <div className="bg-muted rounded-2xl p-6 mb-6">
                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <span className="text-3xl font-display font-bold text-rupee">
                                  ₹{kit.priceRupees}
                                </span>
                                <span className="text-lg text-muted-foreground line-through">
                                  ₹{originalPrice}
                                </span>
                                <Badge className="bg-success text-success-foreground">
                                  Save {percentage}%
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <span className="text-coin font-semibold">{kit.priceCoins} coins</span>
                                <span>+ ₹{Math.round(kit.priceRupees * 0.6)}</span>
                                <span>(with coins)</span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground mb-1">You save</p>
                              <p className="text-2xl font-bold text-success">₹{savings}</p>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            variant="kit"
                            size="xl"
                            className="flex-1"
                            onClick={() => addToCart(kit)}
                          >
                            <Gift className="h-5 w-5" />
                            Add Kit to Cart
                          </Button>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                            ))}
                          </div>
                          <span className="font-semibold">{kit.rating}</span>
                          <span className="text-muted-foreground">({kit.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why LittleKits */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose <span className="text-gradient">LittleKits</span>?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-display font-bold text-lg mb-2">Save More</h3>
                  <p className="text-muted-foreground">
                    Up to 40% savings compared to buying items separately
                  </p>
                </div>
                
                <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-display font-bold text-lg mb-2">Curated Selection</h3>
                  <p className="text-muted-foreground">
                    Expert-picked items that complement each other perfectly
                  </p>
                </div>
                
                <div className="bg-card rounded-2xl p-6 text-center shadow-card">
                  <div className="text-4xl mb-4">🎁</div>
                  <h3 className="font-display font-bold text-lg mb-2">Perfect Gift</h3>
                  <p className="text-muted-foreground">
                    Ready-to-gift packaging for birthdays and special occasions
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LittleKits;
