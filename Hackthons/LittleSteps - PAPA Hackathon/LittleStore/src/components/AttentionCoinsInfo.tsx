import React from 'react';
import { Coins, CheckCircle, Star, Zap } from 'lucide-react';

const AttentionCoinsInfo: React.FC = () => {
  const benefits = [
    { icon: CheckCircle, text: 'Complete learning tasks to earn coins' },
    { icon: Star, text: 'Use coins for discounts on products' },
    { icon: Zap, text: 'Combine with rupees for any purchase' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 relative overflow-hidden">
            {/* Decorative coin icons */}
            <div className="absolute top-4 right-4 text-coin/20 text-6xl">💰</div>
            <div className="absolute bottom-4 left-4 text-coin/10 text-8xl">🪙</div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl gradient-coin flex items-center justify-center shadow-md">
                  <Coins className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">
                    Attention Coins
                  </h2>
                  <p className="text-muted-foreground">
                    Reward your child's learning journey
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                Attention Coins are earned by completing educational activities and can be used alongside Indian Rupees to purchase products. Encourage learning through rewards!
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl"
                  >
                    <benefit.icon className="h-6 w-6 text-coin flex-shrink-0" />
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttentionCoinsInfo;
