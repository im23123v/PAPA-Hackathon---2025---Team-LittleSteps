import { useEffect, useRef } from "react";

const AIChatSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Zapier Interfaces script
    const script = document.createElement("script");
    script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
    script.async = true;
    script.type = "module";
    document.body.appendChild(script);

    // Create the chatbot element
    if (containerRef.current) {
      const chatbot = document.createElement("zapier-interfaces-chatbot-embed");
      chatbot.setAttribute("is-popup", "true");
      chatbot.setAttribute("chatbot-id", "cmjp43y2t003eqm91n98aqwnc");
      chatbot.setAttribute("position", "left");
      containerRef.current.appendChild(chatbot);
    }

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="ai-chat" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-lavender/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            AI Assistant
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Chat with LittleSteps AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get instant answers to your questions about digital wellness and child development.
          </p>
        </div>

        <div ref={containerRef} className="flex justify-center" />
      </div>
    </section>
  );
};

export default AIChatSection;
