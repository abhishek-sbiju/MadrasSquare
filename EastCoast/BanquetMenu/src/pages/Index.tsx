import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { banquetMenuData, termsAndConditions } from "@/data/banquetMenuData";

const Index = () => {

  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />
      
      {banquetMenuData.map((category, index) => (
        <MenuSection key={category.id} category={category} index={index} />
      ))}

      {/* Terms and Conditions Section */}
      <div className="bg-section-even">
        <div className="flex items-center justify-center py-10 md:py-14">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        </div>
        <section className="px-6 md:px-14 lg:px-24 pb-14 md:pb-24 pt-6 md:pt-10">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-10 md:mb-14">
              <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-foreground mb-3 tracking-[0.08em] md:tracking-[0.12em] uppercase">
                TERMS AND CONDITIONS
              </h2>
              <div className="w-8 md:w-10 h-[2px] bg-gold" />
            </div>
            <div className="bg-background/50 border border-gold/10 rounded-lg p-6 md:p-10 space-y-2 md:space-y-3">
              {termsAndConditions.map((term, i) => (
                <p key={i} className="text-muted-foreground text-[13px] md:text-[15px] font-body leading-relaxed">
                  {term}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
