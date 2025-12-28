export type AgeGroup = 'level1' | 'level2' | 'all';

export interface Product {
  id: string;
  name: string;
  description: string;
  priceRupees: number;
  priceCoins: number;
  image: string;
  category: 'books' | 'stationery' | 'games' | 'kits' | 'sports' | 'art';
  ageGroup: AgeGroup;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  isBundle?: boolean;
  bundleItems?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserWallet {
  attentionCoins: number;
  rupees: number;
}
