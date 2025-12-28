import { Button } from "@/components/ui/button";
import { Wallet, Sparkles } from "lucide-react";

const AttentionWallet = () => {
  const handleClick = () => {
    window.open("https://littlesteps.foundation", "_blank");
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-br from-sunshine/40 to-coral/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70 group-hover:opacity-100" />
      <div className="relative bg-gradient-to-br from-sunshine-light via-card to-coral-light border-2 border-sunshine/30 rounded-3xl p-6 md:p-8 shadow-float hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sunshine to-coral flex items-center justify-center shadow-soft animate-pulse-glow">
            <Wallet className="w-7 h-7 text-foreground" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
              Attention Wallet
              <Sparkles className="w-5 h-5 text-sunshine animate-wiggle" />
            </h3>
            <p className="text-sm text-muted-foreground">Track & Reward Digital Habits</p>
          </div>
        </div>
        <p className="text-muted-foreground mb-4 text-sm md:text-base">
          Help children earn rewards for healthy screen time habits. Monitor, motivate, and manage digital attention effectively.
        </p>
        <Button variant="wallet" size="lg" className="w-full">
          Open Attention Wallet
        </Button>
      </div>
    </div>
  );
};

export default AttentionWallet;
