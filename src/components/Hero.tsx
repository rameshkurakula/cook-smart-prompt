import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-produce.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden rounded-3xl mx-4 my-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">Fresh & Organic</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Farm Fresh Produce
            <span className="block text-primary">Delivered to Your Door</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            Discover the finest selection of organic fruits, vegetables, and cooking essentials. 
            Sourced directly from local farms to ensure maximum freshness and quality.
          </p>
          
          <div className="flex gap-4">
            <Button variant="hero" size="lg" className="gap-2">
              <ShoppingCart className="w-5 h-5" />
              Start Shopping
            </Button>
            <Button variant="outline" size="lg">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
