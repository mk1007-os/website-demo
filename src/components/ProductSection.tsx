import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Lillemesi",
    description: "Mahe lillemesi kevadistest õitsvatest heinamaadest",
    price: "12€",
    weight: "500g",
    features: ["100% naturaalne", "Toorelt surutud", "Kohalik päritolu"]
  },
  {
    name: "Metsemesi",
    description: "Tumeda maitsega metsemesi männimetsadest",
    price: "15€",
    weight: "500g",
    features: ["Rikkalik mineraalide sisaldus", "Antioksüdandid", "Traditsiooniline"]
  },
  {
    name: "Akaasiamesi",
    description: "Hele ja pehme akaasiamesi, ideaalne lastele",
    price: "18€",
    weight: "500g",
    features: ["Väga pehme maitse", "Aeglaselt kristalliseeruv", "Laste lemmik"]
  }
];

const ProductSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Meie Mee Valik
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Iga purk sisaldab looduse parimat - hoolikalt kogutud ja säilitatud
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 bg-card border-honey-light/20">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-honey rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍯</span>
                </div>
                <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground ml-2">/ {product.weight}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                      <span className="w-2 h-2 bg-nature-green rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="default">
                  Lisa Korvi
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;