const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Loodusest Otse Teie Lauale
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Meie mesi pärineb Eesti puutumatutest loodusaladest, kus mesilased koguvad 
              nektarit õitsvate heinamaade ja metsade lilledelt. Iga tilk on täis looduse 
              energiat ja puhtust.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100% Naturaalne</h3>
                  <p className="text-muted-foreground">Ilma lisaainete ja säilitusaineteta</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Kohalik Päritolu</h3>
                  <p className="text-muted-foreground">Eesti mesilastelt otse teile</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-nature-green rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Traditsiooniline Tootmine</h3>
                  <p className="text-muted-foreground">Vanades meetodites säilinud kvaliteet</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-honey rounded-lg p-8 shadow-warm">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🐝</span>
                <h3 className="text-2xl font-bold text-white mb-4">Meie Missioon</h3>
                <p className="text-white/90">
                  Tuua teie lauale Eesti looduse parimad maitseelämused, 
                  säilitades traditsioonilised tootmismeetodid ja looduse puhtuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;