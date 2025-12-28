import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const LittleKitsShowcase: React.FC = () => {
  const { addToCart } = useCart();
  const kits = products.filter(p => p.category === 'kits');

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-kit opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6">
            <Gift className="h-4 w-4" />
            <span>Complete Learning Bundles</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Introducing <span className="text-gradient">LittleKits</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything bundled together for the ultimate learning experience! Save big with our curated kits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map((kit, index) => (
            <div
              key={kit.id}
              className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50 card-hover slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Kit Header */}
              <div className="gradient-kit p-6 text-accent-foreground">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-card/20 text-accent-foreground border-0">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {kit.badge}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Save 40%</p>
                    <p className="font-display text-2xl font-bold">₹{kit.priceRupees}</p>
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{kit.name}</h3>
                <p className="opacity-90">{kit.description}</p>
              </div>

              {/* Kit Contents */}
              <div className="p-6">
                <h4 className="font-display font-semibold text-lg mb-4">What's Inside:</h4>
                <ul className="space-y-3 mb-6">
                  {kit.bundleItems?.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-coin font-bold">{kit.priceCoins}</span>
                    <span className="text-muted-foreground">coins + ₹{Math.round(kit.priceRupees * 0.6)}</span>
                  </div>
                  <Button variant="kit" onClick={() => addToCart(kit)}>
                    <Gift className="h-4 w-4" />
                    Add Kit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/littlekits">
            <Button variant="outline" size="lg">
              View All LittleKits
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LittleKitsShowcase;
