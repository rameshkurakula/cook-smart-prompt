import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  rating: number;
  unit: string;
}

const ProductCard = ({ name, price, image, rating, unit }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({rating}.0)</span>
        </div>
        
        <h3 className="font-semibold text-lg">{name}</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">{price}</p>
            <p className="text-xs text-muted-foreground">{unit}</p>
          </div>
          
          <Button size="icon" className="rounded-full">
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
