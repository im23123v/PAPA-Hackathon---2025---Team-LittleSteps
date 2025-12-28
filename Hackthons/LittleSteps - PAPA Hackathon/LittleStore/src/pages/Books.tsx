import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const Books: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  const books = products.filter(p => p.category === 'books');
  const filteredBooks = selectedLevel 
    ? books.filter(b => b.ageGroup === selectedLevel)
    : books;

  const level1Books = books.filter(b => b.ageGroup === 'level1');
  const level2Books = books.filter(b => b.ageGroup === 'level2');

  return (
    <>
      <Helmet>
        <title>LittleSteps Books - Learning Series for Kids | LittleStore</title>
        <meta name="description" content="Explore LittleSteps Level 1 and Level 2 books designed for Indian children. Age-appropriate learning materials for students 5-15 years." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-level1/10 via-background to-level2/10 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
                  <BookOpen className="h-4 w-4" />
                  <span>LittleSteps Learning Series</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Books That Make <span className="text-gradient">Learning Fun</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Our specially curated LittleSteps series is designed to ignite curiosity and build strong foundations. Choose the right level for your child!
                </p>

                {/* Level Selection */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant={selectedLevel === null ? 'hero' : 'outline'}
                    size="lg"
                    onClick={() => setSelectedLevel(null)}
                  >
                    All Books ({books.length})
                  </Button>
                  <Button
                    variant={selectedLevel === 'level1' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setSelectedLevel('level1')}
                    className={selectedLevel === 'level1' ? 'bg-level1 hover:bg-level1/90' : 'border-level1 text-level1 hover:bg-level1 hover:text-primary-foreground'}
                  >
                    Level 1 (5-10 yrs) - {level1Books.length}
                  </Button>
                  <Button
                    variant={selectedLevel === 'level2' ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => setSelectedLevel('level2')}
                    className={selectedLevel === 'level2' ? 'bg-level2 hover:bg-level2/90' : 'border-level2 text-level2 hover:bg-level2 hover:text-primary-foreground'}
                  >
                    Level 2 (10-15 yrs) - {level2Books.length}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Level Info Cards */}
          {selectedLevel === null && (
            <section className="py-12 container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-level1/10 rounded-2xl p-6 border-2 border-level1/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-level1 flex items-center justify-center">
                      <span className="text-2xl">📖</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">Level 1</h3>
                      <p className="text-sm text-muted-foreground">Ages 5-10 years</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Colorful illustrations, simple language, and engaging stories that build foundational skills in reading, math, and science.
                  </p>
                </div>

                <div className="bg-level2/10 rounded-2xl p-6 border-2 border-level2/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-level2 flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg">Level 2</h3>
                      <p className="text-sm text-muted-foreground">Ages 10-15 years</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Advanced concepts, challenging projects, and in-depth exploration of subjects like coding, history, and science experiments.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Books Grid */}
          <section className="py-8 container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <div key={book.id} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={book} />
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Books;
