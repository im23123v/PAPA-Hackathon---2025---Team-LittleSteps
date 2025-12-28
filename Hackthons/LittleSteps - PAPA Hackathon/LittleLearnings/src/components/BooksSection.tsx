import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Star, Users } from "lucide-react";

const books = [
  {
    title: "Little Steps Level - 1",
    ageRange: "5 to 10 years",
    description: "Foundation for digital citizenship and healthy habits for young learners.",
    color: "from-primary to-sky",
    bgColor: "bg-sky-light",
    stars: 5,
  },
  {
    title: "Little Steps Level - 2",
    ageRange: "10 to 15 years",
    description: "Advanced digital skills, online safety, and responsible technology use.",
    color: "from-mint to-accent",
    bgColor: "bg-mint-light",
    stars: 5,
  },
  {
    title: "CyberSafeGirls 7.0",
    ageRange: "All Ages",
    description: "Empowering girls with cybersecurity awareness and digital confidence.",
    color: "from-lavender to-coral",
    bgColor: "bg-lavender-light",
    stars: 5,
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lavender-light text-lavender font-semibold text-sm mb-4">
            Our Books
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Learning Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Carefully crafted educational books designed to guide children through their digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {books.map((book, index) => (
            <Card 
              key={book.title} 
              variant="book"
              className="group relative"
            >
              {/* Book spine effect */}
              <div className={`absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-b ${book.color} rounded-l-2xl`} />
              
              <CardContent className="p-6 pl-8">
                <div className={`w-full h-32 ${book.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${book.color} flex items-center justify-center shadow-float`}>
                    <BookOpen className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: book.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-sunshine text-sunshine" />
                  ))}
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-2">{book.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{book.ageRange}</span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{book.description}</p>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
