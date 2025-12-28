import { Product } from '@/types/product';

// Import images
import bookLevel1 from '@/assets/book-level1.jpg';
import bookLevel2 from '@/assets/book-level2.jpg';
import chessSet from '@/assets/chess-set.jpg';
import rubiksCube from '@/assets/rubiks-cube.jpg';
import puzzlesCollection from '@/assets/puzzles-collection.jpg';
import worldMapPuzzle from '@/assets/world-map-puzzle.jpg';
import indiaMapPuzzle from '@/assets/india-map-puzzle.jpg';
import artSet from '@/assets/art-set.jpg';
import studyKit from '@/assets/study-kit.jpg';
import badmintonSet from '@/assets/badminton-set.jpg';
import skippingRope from '@/assets/skipping-rope.jpg';
import origamiKit from '@/assets/origami-kit.jpg';
import claySet from '@/assets/clay-set.jpg';
import littlekitBundle from '@/assets/littlekit-bundle.jpg';

export const products: Product[] = [
  // Books - Level 1 (5-10 years)
  {
    id: 'book-l1-1',
    name: 'LittleSteps Level 1 - Adventure Tales',
    description: 'Exciting stories that spark imagination and build reading skills for young learners.',
    priceRupees: 299,
    priceCoins: 50,
    image: bookLevel1,
    category: 'books',
    ageGroup: 'level1',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 'book-l1-2',
    name: 'LittleSteps Level 1 - Math Magic',
    description: 'Fun puzzles and activities that make numbers exciting for children.',
    priceRupees: 249,
    priceCoins: 40,
    image: bookLevel1,
    category: 'books',
    ageGroup: 'level1',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'book-l1-3',
    name: 'LittleSteps Level 1 - Science Wonders',
    description: 'Discover the amazing world of science through colorful illustrations.',
    priceRupees: 279,
    priceCoins: 45,
    image: bookLevel1,
    category: 'books',
    ageGroup: 'level1',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    badge: 'New'
  },
  // Books - Level 2 (10-15 years)
  {
    id: 'book-l2-1',
    name: 'LittleSteps Level 2 - Young Scientists',
    description: 'Advanced experiments and concepts for curious young minds.',
    priceRupees: 399,
    priceCoins: 70,
    image: bookLevel2,
    category: 'books',
    ageGroup: 'level2',
    rating: 4.8,
    reviews: 312,
    inStock: true,
    badge: 'Popular'
  },
  {
    id: 'book-l2-2',
    name: 'LittleSteps Level 2 - History Heroes',
    description: 'Journey through time with inspiring stories from Indian history.',
    priceRupees: 349,
    priceCoins: 60,
    image: bookLevel2,
    category: 'books',
    ageGroup: 'level2',
    rating: 4.6,
    reviews: 178,
    inStock: true
  },
  {
    id: 'book-l2-3',
    name: 'LittleSteps Level 2 - Coding Adventures',
    description: 'Learn programming basics through fun projects and games.',
    priceRupees: 449,
    priceCoins: 80,
    image: bookLevel2,
    category: 'books',
    ageGroup: 'level2',
    rating: 4.9,
    reviews: 267,
    inStock: true,
    badge: 'Trending'
  },
  // Games
  {
    id: 'game-1',
    name: 'Chess Set - Tournament Edition',
    description: 'Premium wooden chess set perfect for beginners and advanced players.',
    priceRupees: 599,
    priceCoins: 100,
    image: chessSet,
    category: 'games',
    ageGroup: 'all',
    rating: 4.9,
    reviews: 445,
    inStock: true,
    badge: 'Premium'
  },
  {
    id: 'game-2',
    name: "Rubik's Cube - Speed Edition",
    description: 'Smooth rotating speed cube for puzzle enthusiasts.',
    priceRupees: 349,
    priceCoins: 55,
    image: rubiksCube,
    category: 'games',
    ageGroup: 'all',
    rating: 4.7,
    reviews: 523,
    inStock: true
  },
  {
    id: 'game-3',
    name: 'Puzzle Collection - 15+ Brain Teasers',
    description: 'Collection of wooden puzzles to challenge young minds.',
    priceRupees: 799,
    priceCoins: 130,
    image: puzzlesCollection,
    category: 'games',
    ageGroup: 'all',
    rating: 4.8,
    reviews: 289,
    inStock: true
  },
  {
    id: 'game-4',
    name: 'World Map Puzzle - 500 Pieces',
    description: 'Educational puzzle featuring countries and capitals of the world.',
    priceRupees: 499,
    priceCoins: 85,
    image: worldMapPuzzle,
    category: 'games',
    ageGroup: 'all',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 'game-5',
    name: 'India Map Puzzle - 300 Pieces',
    description: 'Learn Indian states and capitals through this fun puzzle.',
    priceRupees: 399,
    priceCoins: 65,
    image: indiaMapPuzzle,
    category: 'games',
    ageGroup: 'all',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    badge: 'Made in India'
  },
  // Stationery
  {
    id: 'stat-1',
    name: 'Premium Art Set - 72 Colors',
    description: 'Complete art set with color pencils, markers, and crayons.',
    priceRupees: 699,
    priceCoins: 110,
    image: artSet,
    category: 'stationery',
    ageGroup: 'all',
    rating: 4.8,
    reviews: 678,
    inStock: true,
    badge: 'Value Pack'
  },
  {
    id: 'stat-2',
    name: 'Study Kit - Complete Pack',
    description: 'Notebooks, pens, pencils, and organizers for school.',
    priceRupees: 449,
    priceCoins: 75,
    image: studyKit,
    category: 'stationery',
    ageGroup: 'all',
    rating: 4.5,
    reviews: 345,
    inStock: true
  },
  // LittleKits Bundle
  {
    id: 'kit-1',
    name: 'LittleKit - Explorer Bundle',
    description: 'The ultimate learning bundle! Includes LittleSteps Level 1 Book, Chess Set, Rubik\'s Cube, 15+ Puzzles, World Map, and India Map.',
    priceRupees: 2499,
    priceCoins: 400,
    image: littlekitBundle,
    category: 'kits',
    ageGroup: 'all',
    rating: 4.9,
    reviews: 789,
    inStock: true,
    badge: 'Best Value',
    isBundle: true,
    bundleItems: [
      'LittleSteps Level 1 Book',
      'Tournament Chess Set',
      "Rubik's Cube Speed Edition",
      '15+ Brain Teaser Puzzles',
      'World Map Poster',
      'India Map Poster'
    ]
  },
  {
    id: 'kit-2',
    name: 'LittleKit - Scholar Bundle',
    description: 'Advanced learning bundle for older kids. Includes LittleSteps Level 2 Book, Chess Set, Rubik\'s Cube, 15+ Puzzles, World Map, and India Map.',
    priceRupees: 2799,
    priceCoins: 450,
    image: littlekitBundle,
    category: 'kits',
    ageGroup: 'level2',
    rating: 4.9,
    reviews: 456,
    inStock: true,
    badge: 'Premium Bundle',
    isBundle: true,
    bundleItems: [
      'LittleSteps Level 2 Book',
      'Tournament Chess Set',
      "Rubik's Cube Speed Edition",
      '15+ Brain Teaser Puzzles',
      'World Map Poster',
      'India Map Poster'
    ]
  },
  // Sports
  {
    id: 'sport-1',
    name: 'Badminton Set - Pro Junior',
    description: 'Complete badminton set with 2 rackets and shuttlecocks.',
    priceRupees: 799,
    priceCoins: 130,
    image: badmintonSet,
    category: 'sports',
    ageGroup: 'all',
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: 'sport-2',
    name: 'Skipping Rope - Digital Counter',
    description: 'Fun skipping rope with built-in digital counter.',
    priceRupees: 299,
    priceCoins: 50,
    image: skippingRope,
    category: 'sports',
    ageGroup: 'all',
    rating: 4.5,
    reviews: 189,
    inStock: true
  },
  // Art
  {
    id: 'art-1',
    name: 'Origami Paper Kit - 200 Sheets',
    description: 'Colorful origami papers with instruction book for beginners.',
    priceRupees: 249,
    priceCoins: 40,
    image: origamiKit,
    category: 'art',
    ageGroup: 'all',
    rating: 4.7,
    reviews: 312,
    inStock: true
  },
  {
    id: 'art-2',
    name: 'Clay Modeling Set - 24 Colors',
    description: 'Non-toxic modeling clay set for creative projects.',
    priceRupees: 399,
    priceCoins: 65,
    image: claySet,
    category: 'art',
    ageGroup: 'level1',
    rating: 4.8,
    reviews: 267,
    inStock: true,
    badge: 'Safe & Fun'
  }
];

export const categories = [
  { id: 'books', name: 'Books', icon: '📚', description: 'LittleSteps Learning Series' },
  { id: 'games', name: 'Games & Puzzles', icon: '🎮', description: 'Brain Training Fun' },
  { id: 'stationery', name: 'Stationery', icon: '✏️', description: 'School Essentials' },
  { id: 'kits', name: 'LittleKits', icon: '🎁', description: 'Complete Learning Bundles' },
  { id: 'sports', name: 'Sports', icon: '⚽', description: 'Active & Healthy' },
  { id: 'art', name: 'Art & Craft', icon: '🎨', description: 'Creative Expression' }
];
