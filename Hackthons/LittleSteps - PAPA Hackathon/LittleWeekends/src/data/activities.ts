import drawingCuteCat from '@/assets/drawing-cute-cat.png';
import drawingUnicorn from '@/assets/drawing-unicorn.png';
import drawingDragon from '@/assets/drawing-dragon.png';
import drawingButterfly from '@/assets/drawing-butterfly.png';

export interface Activity {
  id: string;
  title: string;
  category: 'drawing' | 'coloring' | 'crafts' | 'family' | 'outdoor' | 'games';
  ageRange: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  materials: string[];
  steps: string[];
  youtubeId?: string;
  image: string;
  featured?: boolean;
}

export const categories = [
  { id: 'drawing', name: 'Drawing', emoji: '✏️', color: 'bg-coral' },
  { id: 'coloring', name: 'Coloring', emoji: '🎨', color: 'bg-sunshine' },
  { id: 'crafts', name: 'Arts & Crafts', emoji: '✂️', color: 'bg-teal' },
  { id: 'family', name: 'Family Fun', emoji: '👨‍👩‍👧‍👦', color: 'bg-lavender' },
  { id: 'outdoor', name: 'Outdoor', emoji: '🌳', color: 'bg-mint' },
  { id: 'games', name: 'Games', emoji: '🎲', color: 'bg-sky' },
];

export const activities: Activity[] = [
  {
    id: 'draw-cute-cat',
    title: 'How to Draw a Cute Cat',
    category: 'drawing',
    ageRange: '5-10',
    duration: '15 min',
    difficulty: 'easy',
    description: 'Learn to draw an adorable cartoon cat step by step! Perfect for beginners who want to master basic shapes and create cute animal characters.',
    materials: ['Paper', 'Pencil', 'Eraser', 'Colored pencils or markers'],
    steps: [
      'Start by drawing a circle for the head',
      'Add two triangular ears on top',
      'Draw two large oval eyes with pupils',
      'Add a small triangle nose and a W-shaped mouth',
      'Draw whiskers on each side',
      'Add the body with a curved line',
      'Draw the tail and paws',
      'Color your cat with your favorite colors!'
    ],
    youtubeId: 'OArlBOp3grk',
    image: drawingCuteCat,
    featured: true
  },
  {
    id: 'draw-rainbow-unicorn',
    title: 'Draw a Magical Unicorn',
    category: 'drawing',
    ageRange: '6-12',
    duration: '20 min',
    difficulty: 'medium',
    description: 'Create your own magical unicorn with a flowing rainbow mane! This fun tutorial teaches you to draw one of the most beloved fantasy creatures.',
    materials: ['Paper', 'Pencil', 'Eraser', 'Rainbow colored pencils'],
    steps: [
      'Draw an oval for the head tilted slightly',
      'Add a curved neck and body outline',
      'Draw the magical spiral horn on the forehead',
      'Add almond-shaped eyes with long lashes',
      'Draw flowing mane in wavy sections',
      'Add legs and a flowing tail',
      'Draw small details like nostrils and ears',
      'Color the mane with rainbow colors!'
    ],
    youtubeId: 'DYu4BsBKJ8Y',
    image: drawingUnicorn,
    featured: true
  },
  {
    id: 'draw-dragon',
    title: 'Easy Dragon Drawing',
    category: 'drawing',
    ageRange: '8-15',
    duration: '25 min',
    difficulty: 'medium',
    description: 'Learn to draw a friendly dragon with wings and scales! Great for kids who love fantasy creatures and want to improve their drawing skills.',
    materials: ['Paper', 'Pencil', 'Eraser', 'Colored markers'],
    steps: [
      'Draw a large oval for the body',
      'Add a smaller circle for the head connected by a curved neck',
      'Draw pointed ears and horns',
      'Add big expressive eyes',
      'Draw two large wing shapes',
      'Add spikes along the back and tail',
      'Draw legs with claws',
      'Add scale patterns and color with bright colors!'
    ],
    youtubeId: 'YLp_aBEBJdY',
    image: drawingDragon
  },
  {
    id: 'draw-butterfly',
    title: 'Beautiful Butterfly Drawing',
    category: 'drawing',
    ageRange: '5-10',
    duration: '15 min',
    difficulty: 'easy',
    description: 'Create a stunning butterfly with symmetrical wings! Perfect for practicing symmetry and learning about nature.',
    materials: ['Paper', 'Pencil', 'Eraser', 'Bright colored pencils'],
    steps: [
      'Draw a small oval for the body',
      'Add a round head with antennae',
      'Draw the top wings - make them mirror each other',
      'Draw the bottom wings, slightly smaller',
      'Add patterns inside the wings',
      'Draw circles and lines for decoration',
      'Add details to the body',
      'Color with your favorite bright colors!'
    ],
    youtubeId: 'BuABq4lwjd8',
    image: drawingButterfly
  },
  {
    id: 'color-mandala',
    title: 'Relaxing Mandala Coloring',
    category: 'coloring',
    ageRange: '8-15',
    duration: '30 min',
    difficulty: 'easy',
    description: 'Color beautiful mandala patterns for relaxation and mindfulness. Mandalas help improve focus and create stunning art!',
    materials: ['Printed mandala page', 'Colored pencils', 'Fine tip markers'],
    steps: [
      'Print out a mandala design',
      'Choose a color scheme (warm, cool, or rainbow)',
      'Start from the center and work outward',
      'Use light pressure for softer colors',
      'Try different patterns - alternate colors',
      'Add shading for depth',
      'Take your time and enjoy the process',
      'Display your finished masterpiece!'
    ],
    youtubeId: 'uoHe08Ft_iI',
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'color-animals',
    title: 'Zoo Animals Coloring',
    category: 'coloring',
    ageRange: '5-8',
    duration: '20 min',
    difficulty: 'easy',
    description: 'Color adorable zoo animals including lions, elephants, and giraffes! Learn about animals while creating colorful art.',
    materials: ['Animal coloring pages', 'Crayons or colored pencils', 'Markers (optional)'],
    steps: [
      'Choose your favorite animal to color',
      'Look at real pictures for color reference',
      'Start with the main body color',
      'Add spots, stripes, or patterns',
      'Color the background',
      'Add grass, sky, or trees',
      'Use darker shades for shadows',
      'Sign your artwork!'
    ],
    youtubeId: 'i4y5gAspSTU',
    image: '/placeholder.svg'
  },
  {
    id: 'color-underwater',
    title: 'Underwater World Coloring',
    category: 'coloring',
    ageRange: '6-12',
    duration: '25 min',
    difficulty: 'easy',
    description: 'Dive into an underwater adventure with fish, dolphins, and coral! Create a vibrant ocean scene.',
    materials: ['Ocean coloring pages', 'Blue and green pencils', 'Bright colors for fish'],
    steps: [
      'Print the underwater scene',
      'Start with light blue for water',
      'Color the coral in warm colors',
      'Make fish bright and colorful',
      'Add bubbles with white or light blue',
      'Color seaweed in greens',
      'Add sandy bottom in yellow/tan',
      'Create depth with darker blues!'
    ],
    youtubeId: 'NXq_2CqF0BA',
    image: '/placeholder.svg'
  },
  {
    id: 'paper-airplane',
    title: 'Ultimate Paper Airplane',
    category: 'crafts',
    ageRange: '6-15',
    duration: '10 min',
    difficulty: 'easy',
    description: 'Learn to fold the best paper airplane that flies really far! Perfect for indoor and outdoor fun.',
    materials: ['A4 paper', 'Ruler (optional)', 'Markers for decoration'],
    steps: [
      'Start with a rectangular piece of paper',
      'Fold it in half lengthwise and unfold',
      'Fold top corners to the center line',
      'Fold the top edges to the center again',
      'Fold in half along the original crease',
      'Create wings by folding each side down',
      'Adjust wing angles for best flight',
      'Test fly and adjust as needed!'
    ],
    youtubeId: 'veyZNyurlwU',
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'origami-crane',
    title: 'Origami Paper Crane',
    category: 'crafts',
    ageRange: '10-15',
    duration: '20 min',
    difficulty: 'hard',
    description: 'Master the traditional Japanese paper crane! A beautiful decoration and symbol of peace and good luck.',
    materials: ['Square origami paper', 'Flat surface', 'Patience!'],
    steps: [
      'Start with a square paper, colored side down',
      'Fold diagonally both ways, then unfold',
      'Fold in half horizontally and vertically',
      'Collapse into a square base',
      'Fold the edges to center on both sides',
      'Petal fold to create the bird base',
      'Fold up the bottom points for head and tail',
      'Shape the wings and head, and you are done!'
    ],
    youtubeId: 'KfHE1D6yLmA',
    image: '/placeholder.svg'
  },
  {
    id: 'friendship-bracelet',
    title: 'Friendship Bracelets',
    category: 'crafts',
    ageRange: '8-15',
    duration: '45 min',
    difficulty: 'medium',
    description: 'Create beautiful woven bracelets to share with friends! Learn basic patterns and color combinations.',
    materials: ['Embroidery floss (3-4 colors)', 'Scissors', 'Tape or clipboard', 'Ruler'],
    steps: [
      'Cut 4 strings about 60cm each',
      'Tie them together at one end',
      'Tape the knot to a surface',
      'Arrange strings in color order',
      'Make forward knots with the left string',
      'Continue across to the right',
      'Repeat until desired length',
      'Tie off and trim excess!'
    ],
    youtubeId: '1uHDSvvqxLU',
    image: '/placeholder.svg'
  },
  {
    id: 'slime-making',
    title: 'DIY Fluffy Slime',
    category: 'crafts',
    ageRange: '6-12',
    duration: '20 min',
    difficulty: 'easy',
    description: 'Make super satisfying fluffy slime at home! A fun sensory activity the whole family can enjoy.',
    materials: ['White glue', 'Shaving cream', 'Contact lens solution', 'Food coloring', 'Bowl and spoon'],
    steps: [
      'Pour glue into a large bowl',
      'Add shaving cream and mix well',
      'Add a few drops of food coloring',
      'Slowly add contact lens solution',
      'Stir until it starts pulling away from bowl',
      'Knead with your hands',
      'Add more solution if too sticky',
      'Store in an airtight container!'
    ],
    youtubeId: 'pd_U3xyYxzg',
    image: '/placeholder.svg'
  },
  {
    id: 'painted-rocks',
    title: 'Painted Rock Art',
    category: 'crafts',
    ageRange: '5-15',
    duration: '30 min',
    difficulty: 'easy',
    description: 'Transform ordinary rocks into colorful art! Create animals, patterns, or inspirational messages.',
    materials: ['Smooth rocks', 'Acrylic paints', 'Paintbrushes', 'Sealer spray', 'Pencil'],
    steps: [
      'Find smooth, flat rocks and wash them',
      'Let rocks dry completely',
      'Sketch your design with pencil',
      'Paint the base color first',
      'Let dry before adding details',
      'Add patterns, faces, or words',
      'Use fine brushes for details',
      'Seal with clear spray when dry!'
    ],
    youtubeId: 'TBT29KL_0Wc',
    image: '/placeholder.svg'
  },
  {
    id: 'family-scavenger-hunt',
    title: 'Indoor Scavenger Hunt',
    category: 'family',
    ageRange: '5-12',
    duration: '45 min',
    difficulty: 'easy',
    description: 'Create an exciting scavenger hunt around your home! Great for rainy days and family bonding.',
    materials: ['Paper', 'Pen', 'Small prizes', 'Hiding spots around home'],
    steps: [
      'Create a list of 10-15 items to find',
      'Write clues for each item location',
      'Hide the clues around the house',
      'Set up a treasure at the final spot',
      'Give the first clue to start',
      'Let kids follow the trail',
      'Celebrate when they find the treasure',
      'Take turns creating hunts!'
    ],
    youtubeId: 'uOKtOmFzB8Y',
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 'family-game-night',
    title: 'DIY Board Game',
    category: 'family',
    ageRange: '7-15',
    duration: '60 min',
    difficulty: 'medium',
    description: 'Design and create your very own board game! Use creativity to make something the whole family can play.',
    materials: ['Cardboard', 'Markers', 'Dice', 'Game pieces', 'Index cards'],
    steps: [
      'Decide on a theme for your game',
      'Draw the game board path',
      'Create game spaces with actions',
      'Make chance and challenge cards',
      'Design tokens or use small toys',
      'Write clear rules',
      'Decorate the board colorfully',
      'Play and adjust rules as needed!'
    ],
    youtubeId: '0TybHUKOyuY',
    image: '/placeholder.svg'
  },
  {
    id: 'cooking-together',
    title: 'No-Bake Energy Bites',
    category: 'family',
    ageRange: '6-15',
    duration: '30 min',
    difficulty: 'easy',
    description: 'Make delicious and healthy snacks together! No oven needed, just mixing and rolling.',
    materials: ['Oats', 'Peanut butter', 'Honey', 'Chocolate chips', 'Mixing bowl'],
    steps: [
      'Mix 1 cup oats with 1/2 cup peanut butter',
      'Add 1/3 cup honey',
      'Stir in chocolate chips',
      'Add any extras (coconut, raisins)',
      'Refrigerate for 30 minutes',
      'Roll into small balls',
      'Store in the refrigerator',
      'Enjoy your healthy treats!'
    ],
    youtubeId: 'wKjZqPKYP3c',
    image: '/placeholder.svg'
  },
  {
    id: 'nature-walk',
    title: 'Nature Collection Walk',
    category: 'outdoor',
    ageRange: '5-12',
    duration: '60 min',
    difficulty: 'easy',
    description: 'Explore nature and collect treasures! Learn about plants, bugs, and the environment while getting fresh air.',
    materials: ['Bag for collecting', 'Magnifying glass', 'Nature journal', 'Pencil'],
    steps: [
      'Choose a park or nature trail',
      'Bring a bag for treasures',
      'Look for leaves, rocks, and flowers',
      'Observe bugs and birds',
      'Sketch interesting finds in journal',
      'Take photos of things you cannot take',
      'Learn names of what you find',
      'Create a nature display at home!'
    ],
    youtubeId: '6JJyPMnSY1E',
    image: '/placeholder.svg'
  },
  {
    id: 'garden-planting',
    title: 'Start a Mini Garden',
    category: 'outdoor',
    ageRange: '5-15',
    duration: '45 min',
    difficulty: 'easy',
    description: 'Plant seeds and watch them grow! Learn about plants and responsibility while creating something beautiful.',
    materials: ['Pots or containers', 'Potting soil', 'Seeds', 'Water', 'Small shovel'],
    steps: [
      'Choose easy-to-grow seeds (beans, sunflowers)',
      'Fill containers with potting soil',
      'Make small holes for seeds',
      'Place 2-3 seeds in each hole',
      'Cover gently with soil',
      'Water lightly',
      'Place in a sunny spot',
      'Water regularly and watch them grow!'
    ],
    youtubeId: 'EZjCw8sBLFE',
    image: '/placeholder.svg'
  },
  {
    id: 'outdoor-art',
    title: 'Sidewalk Chalk Art',
    category: 'outdoor',
    ageRange: '5-12',
    duration: '45 min',
    difficulty: 'easy',
    description: 'Create amazing artwork on sidewalks and driveways! Make your neighborhood more colorful and fun.',
    materials: ['Sidewalk chalk', 'Water spray bottle', 'Sponge', 'Stencils (optional)'],
    steps: [
      'Find a clean sidewalk or driveway',
      'Plan your design',
      'Start with large shapes',
      'Add details and patterns',
      'Use water to blend colors',
      'Create 3D illusions',
      'Add hopscotch or games',
      'Take photos before it washes away!'
    ],
    youtubeId: 'k3gwfN8Tl2Q',
    image: '/placeholder.svg'
  },
  {
    id: 'card-games',
    title: 'Classic Card Games',
    category: 'games',
    ageRange: '6-15',
    duration: '30 min',
    difficulty: 'easy',
    description: 'Learn fun card games the whole family can play! From Go Fish to Crazy Eights, hours of entertainment await.',
    materials: ['Deck of cards', 'Table or floor space', 'Snacks (optional)'],
    steps: [
      'Choose a game (Go Fish, Uno, War)',
      'Shuffle the deck well',
      'Deal cards according to rules',
      'Learn the basic rules together',
      'Play a practice round',
      'Keep score if needed',
      'Take turns being dealer',
      'Try different games each time!'
    ],
    youtubeId: 'CGH5fbpKWWM',
    image: '/placeholder.svg'
  },
  {
    id: 'puzzle-challenge',
    title: 'Family Puzzle Time',
    category: 'games',
    ageRange: '5-15',
    duration: '60 min',
    difficulty: 'medium',
    description: 'Work together on a jigsaw puzzle! Great for teamwork, patience, and problem-solving skills.',
    materials: ['Jigsaw puzzle', 'Large flat surface', 'Good lighting', 'Sorting trays'],
    steps: [
      'Choose an age-appropriate puzzle',
      'Set up on a large table',
      'Sort pieces by color and edges',
      'Build the border first',
      'Work on sections together',
      'Each person can have a section',
      'Connect sections as you go',
      'Celebrate when complete!'
    ],
    youtubeId: 'dgKfqf1yCvk',
    image: '/placeholder.svg'
  },
  {
    id: 'charades',
    title: 'Family Charades',
    category: 'games',
    ageRange: '6-15',
    duration: '45 min',
    difficulty: 'easy',
    description: 'Act out words without speaking! A hilarious game that gets everyone moving and laughing.',
    materials: ['Paper strips', 'Pen', 'Timer', 'Container for words'],
    steps: [
      'Write words on paper strips',
      'Include animals, movies, actions',
      'Divide into teams',
      'One person acts, others guess',
      'No talking or pointing at objects',
      'Set a time limit per turn',
      'Keep score by correct guesses',
      'Switch teams and repeat!'
    ],
    youtubeId: 'r9PVlf-qNz8',
    image: '/placeholder.svg'
  },
  {
    id: 'shadow-puppets',
    title: 'Shadow Puppet Show',
    category: 'crafts',
    ageRange: '5-12',
    duration: '45 min',
    difficulty: 'medium',
    description: 'Create magical shadow puppets and put on a show! Combine crafting with storytelling for double the fun.',
    materials: ['Black cardstock', 'Scissors', 'Wooden sticks', 'Tape', 'Flashlight', 'White sheet'],
    steps: [
      'Draw puppet shapes on cardstock',
      'Cut out your characters carefully',
      'Attach sticks with tape',
      'Set up a white sheet as screen',
      'Shine flashlight from behind',
      'Practice moving your puppets',
      'Create a simple story',
      'Perform for family!'
    ],
    youtubeId: 'MHpL1y-IJ2E',
    image: '/placeholder.svg'
  },
  {
    id: 'tie-dye',
    title: 'Tie-Dye T-Shirts',
    category: 'crafts',
    ageRange: '8-15',
    duration: '120 min',
    difficulty: 'medium',
    description: 'Create colorful tie-dye wearable art! A classic craft that never goes out of style.',
    materials: ['White cotton shirts', 'Tie-dye kit', 'Rubber bands', 'Plastic bags', 'Gloves'],
    steps: [
      'Wet the shirt and wring out',
      'Twist or fold in your pattern',
      'Secure with rubber bands',
      'Mix the dye colors',
      'Apply dye to sections',
      'Wrap in plastic and wait 6-24 hours',
      'Rinse until water runs clear',
      'Wash separately and wear!'
    ],
    youtubeId: 'FG4kZJWJFXQ',
    image: '/placeholder.svg'
  }
];

export const coloringPages = [
  { id: 1, title: 'Cute Cat', category: 'Animals', image: '/placeholder.svg' },
  { id: 2, title: 'Butterfly Garden', category: 'Nature', image: '/placeholder.svg' },
  { id: 3, title: 'Unicorn Magic', category: 'Fantasy', image: '/placeholder.svg' },
  { id: 4, title: 'Ocean Friends', category: 'Sea Life', image: '/placeholder.svg' },
  { id: 5, title: 'Dinosaur World', category: 'Dinosaurs', image: '/placeholder.svg' },
  { id: 6, title: 'Space Adventure', category: 'Space', image: '/placeholder.svg' },
  { id: 7, title: 'Flower Mandala', category: 'Mandala', image: '/placeholder.svg' },
  { id: 8, title: 'Jungle Animals', category: 'Animals', image: '/placeholder.svg' },
];
