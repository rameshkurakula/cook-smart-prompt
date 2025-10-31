import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import fruitsImage from "@/assets/fruits-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";
import cookingImage from "@/assets/cooking-category.jpg";

const Index = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      image: fruitsImage,
      description: "Sweet, juicy and farm-fresh"
    },
    {
      title: "Organic Vegetables",
      image: vegetablesImage,
      description: "Crisp, healthy and locally sourced"
    },
    {
      title: "Cooking Essentials",
      image: cookingImage,
      description: "Premium oils, spices and herbs"
    }
  ];

  const featuredProducts = [
    {
      name: "Organic Strawberries",
      price: "$4.99",
      image: fruitsImage,
      rating: 5,
      unit: "per lb"
    },
    {
      name: "Fresh Broccoli",
      price: "$3.49",
      image: vegetablesImage,
      rating: 5,
      unit: "per bunch"
    },
    {
      name: "Extra Virgin Olive Oil",
      price: "$12.99",
      image: cookingImage,
      rating: 5,
      unit: "500ml"
    },
    {
      name: "Mixed Bell Peppers",
      price: "$5.99",
      image: vegetablesImage,
      rating: 4,
      unit: "per pack"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our wide range of fresh produce and cooking essentials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked selections of the finest quality produce
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/30 border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FreshMart</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted source for fresh, organic produce delivered straight to your door.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Fruits</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vegetables</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cooking Items</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 FreshMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
