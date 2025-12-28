import React, { createContext, useContext, useState, useCallback } from 'react';
import { CartItem, Product, UserWallet } from '@/types/product';
import { toast } from 'sonner';

interface CartContextType {
  cart: CartItem[];
  wallet: UserWallet;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalRupees: () => number;
  getTotalCoins: () => number;
  getItemCount: () => number;
  useCoins: boolean;
  setUseCoins: (use: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [useCoins, setUseCoins] = useState(true);
  
  // Mock wallet - in real app, this would come from backend
  const [wallet] = useState<UserWallet>({
    attentionCoins: 500,
    rupees: 5000
  });

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        toast.success(`Added another ${product.name} to cart!`);
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => {
      const item = prev.find(i => i.id === productId);
      if (item) {
        toast.info(`${item.name} removed from cart`);
      }
      return prev.filter(item => item.id !== productId);
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
    toast.info('Cart cleared');
  }, []);

  const getTotalRupees = useCallback(() => {
    return cart.reduce((total, item) => total + item.priceRupees * item.quantity, 0);
  }, [cart]);

  const getTotalCoins = useCallback(() => {
    return cart.reduce((total, item) => total + item.priceCoins * item.quantity, 0);
  }, [cart]);

  const getItemCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        wallet,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalRupees,
        getTotalCoins,
        getItemCount,
        useCoins,
        setUseCoins
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
