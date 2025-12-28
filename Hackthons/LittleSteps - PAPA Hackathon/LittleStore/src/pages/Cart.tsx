import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, Coins, ArrowRight, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Cart: React.FC = () => {
  const {
    cart,
    wallet,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalRupees,
    getTotalCoins,
    useCoins,
    setUseCoins
  } = useCart();

  const totalRupees = getTotalRupees();
  const totalCoins = getTotalCoins();
  
  // Calculate final payment when using coins
  const coinsToUse = useCoins ? Math.min(wallet.attentionCoins, totalCoins) : 0;
  const coinDiscount = useCoins ? Math.round((coinsToUse / totalCoins) * totalRupees * 0.4) : 0;
  const finalAmount = totalRupees - coinDiscount;

  const handleCheckout = () => {
    toast.success('Order placed successfully! (Mock checkout)', {
      description: `Total: ₹${finalAmount}${coinsToUse > 0 ? ` + ${coinsToUse} coins` : ''}`
    });
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <>
        <Helmet>
          <title>Your Cart - LittleStore</title>
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <Navbar />
          
          <main className="container mx-auto px-4 py-16">
            <div className="text-center max-w-md mx-auto">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any products yet. Start exploring our amazing collection!
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Start Shopping
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </main>
          
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Your Cart ({cart.length} items) - LittleStore</title>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Your <span className="text-gradient">Cart</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl p-4 md:p-6 shadow-card border border-border/50 flex flex-col md:flex-row gap-4"
                >
                  {/* Image */}
                  <div className="w-full md:w-32 h-32 rounded-xl bg-muted overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display font-semibold text-lg">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {item.ageGroup === 'level1' ? '5-10 yrs' : item.ageGroup === 'level2' ? '10-15 yrs' : 'All Ages'}
                          </Badge>
                          {item.isBundle && (
                            <Badge className="gradient-kit text-accent-foreground text-xs">Bundle</Badge>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-rupee">
                          ₹{item.priceRupees * item.quantity}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                          <Coins className="h-3.5 w-3.5 text-coin" />
                          {item.priceCoins * item.quantity} coins
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 sticky top-24">
                <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>

                {/* Wallet Info */}
                <div className="bg-muted rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Your Wallet</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Coins className="h-5 w-5 text-coin" />
                      <span className="font-semibold">{wallet.attentionCoins} coins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-rupee font-bold">₹{wallet.rupees.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Use Coins Toggle */}
                <div className="flex items-center justify-between py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-coin" />
                    <span className="font-medium">Use Attention Coins</span>
                  </div>
                  <Switch checked={useCoins} onCheckedChange={setUseCoins} />
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 py-4 border-b border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{totalRupees}</span>
                  </div>
                  {useCoins && coinsToUse > 0 && (
                    <div className="flex justify-between text-success">
                      <span className="flex items-center gap-1">
                        <Coins className="h-4 w-4" />
                        Coin Discount ({coinsToUse} coins)
                      </span>
                      <span>-₹{coinDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-success">FREE</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center py-4 mb-6">
                  <span className="font-display font-bold text-lg">Total</span>
                  <div className="text-right">
                    <p className="font-display font-bold text-2xl text-rupee">
                      ₹{finalAmount}
                    </p>
                    {useCoins && coinsToUse > 0 && (
                      <p className="text-sm text-coin">+ {coinsToUse} coins</p>
                    )}
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="xl"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Checkout (Mock)
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Free shipping on all orders! 🎉
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cart;
