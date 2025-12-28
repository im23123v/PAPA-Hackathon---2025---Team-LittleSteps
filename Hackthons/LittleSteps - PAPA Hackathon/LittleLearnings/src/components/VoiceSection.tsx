import { useEffect, useRef } from "react";

const VoiceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load ElevenLabs widget script
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    // Create the widget element
    if (containerRef.current) {
      const widget = document.createElement("elevenlabs-convai");
      widget.setAttribute("agent-id", "agent_5101kdhbt2dnf0mtwfjg8qx45cgb");
      containerRef.current.appendChild(widget);
    }

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="voice" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-coral-light text-coral font-semibold text-sm mb-4">
            Voice Interaction
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Talk to LittleSteps
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use your voice to interact with our AI assistant powered by ElevenLabs technology.
          </p>
        </div>

        <div ref={containerRef} className="flex justify-center" />
      </div>
    </section>
  );
};

export default VoiceSection;
