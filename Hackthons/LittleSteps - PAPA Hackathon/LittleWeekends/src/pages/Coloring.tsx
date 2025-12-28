import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Download, Palette, Printer } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

import coloringCat from '@/assets/coloring-cat.png';
import coloringUnicorn from '@/assets/coloring-unicorn.png';
import coloringButterfly from '@/assets/coloring-butterfly.png';
import coloringMandala from '@/assets/coloring-mandala.png';

const coloringPages = [
  { id: 1, title: 'Cute Kitten', category: 'Animals', image: coloringCat },
  { id: 2, title: 'Butterfly Garden', category: 'Nature', image: coloringButterfly },
  { id: 3, title: 'Magical Unicorn', category: 'Fantasy', image: coloringUnicorn },
  { id: 4, title: 'Flower Mandala', category: 'Mandala', image: coloringMandala },
  { id: 5, title: 'Ocean Dolphin', category: 'Sea Life', emoji: '🐬' },
  { id: 6, title: 'Friendly Dinosaur', category: 'Dinosaurs', emoji: '🦕' },
  { id: 7, title: 'Space Rocket', category: 'Space', emoji: '🚀' },
  { id: 8, title: 'Jungle Lion', category: 'Animals', emoji: '🦁' },
  { id: 9, title: 'Princess Castle', category: 'Fantasy', emoji: '🏰' },
  { id: 10, title: 'Racing Car', category: 'Vehicles', emoji: '🏎️' },
  { id: 11, title: 'Happy Robot', category: 'Fun', emoji: '🤖' },
  { id: 12, title: 'Tropical Fish', category: 'Sea Life', emoji: '🐠' },
  { id: 13, title: 'Bird in Tree', category: 'Nature', emoji: '🐦' },
  { id: 14, title: 'Dragon Adventure', category: 'Fantasy', emoji: '🐉' },
  { id: 15, title: 'Ice Cream Treat', category: 'Food', emoji: '🍦' },
  { id: 16, title: 'Rainbow Scene', category: 'Nature', emoji: '🌈' },
];

const categoryColors: Record<string, string> = {
  Animals: 'bg-coral',
  Nature: 'bg-mint',
  Fantasy: 'bg-lavender',
  'Sea Life': 'bg-sky',
  Dinosaurs: 'bg-sunshine',
  Space: 'bg-primary',
  Mandala: 'bg-peach',
  Vehicles: 'bg-teal',
  Fun: 'bg-sunshine',
  Food: 'bg-coral',
};

const Coloring = () => {
  return (
    <>
      <Helmet>
        <title>Coloring Pages - LittleWeekends</title>
        <meta name="description" content="Free printable coloring pages for kids. Download and print cute animals, mandalas, fantasy creatures, and more!" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="py-12 md:py-16 bg-gradient-to-br from-lavender/30 via-background to-sunshine/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft border border-border">
                  <Palette className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Free Printable Pages
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Coloring Pages 🎨
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  {coloringPages.length} beautiful designs ready to print and color!
                </p>

                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4" />
                    <span>Print at home</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>High quality</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {coloringPages.map((page, index) => (
                  <motion.div
                    key={page.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border">
                      {/* Image */}
                      <div className="aspect-square relative bg-muted/20 flex items-center justify-center overflow-hidden">
                        {page.image ? (
                          <img 
                            src={page.image} 
                            alt={page.title} 
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <div className="text-7xl md:text-8xl">{page.emoji}</div>
                        )}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Print
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-4">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[page.category]} text-foreground mb-2`}>
                          {page.category}
                        </span>
                        <h3 className="font-display font-semibold text-foreground line-clamp-1">
                          {page.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Coloring Tips for Kids 🖍️
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Start Light', tip: 'Begin with light pressure and build up color gradually', emoji: '🌟' },
                    { title: 'Stay Inside Lines', tip: 'Take your time - there is no rush to finish!', emoji: '✨' },
                    { title: 'Mix Colors', tip: 'Layer different colors for unique effects', emoji: '🎨' },
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 shadow-soft border border-border text-center">
                      <div className="text-3xl mb-2">{item.emoji}</div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Coloring;
