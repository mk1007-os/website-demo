import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-honey">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Telli Oma Mesi Täna
        </h2>
        <p className="text-xl text-white/90 mb-12">
          Võta ühendust ja too looduse magusus oma koju
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <span className="text-3xl mb-2 block">📞</span>
              <CardTitle className="text-white">Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90">+372 123 4567</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <span className="text-3xl mb-2 block">✉️</span>
              <CardTitle className="text-white">E-post</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90">info@eestimesi.ee</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <span className="text-3xl mb-2 block">🚚</span>
              <CardTitle className="text-white">Kohaletoimetamine</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90">Üle Eesti</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90 text-lg">
            Telli Kohe
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-foreground text-lg">
            Küsi Pakkumist
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70">
            © 2024 Eesti Mesi. Kõik õigused kaitstud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;