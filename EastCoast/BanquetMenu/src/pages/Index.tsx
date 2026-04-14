import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { banquetMenuData, termsAndConditionsGroups } from "@/data/banquetMenuData";

const highlightKeyInfo = (text: string) => {
  // Split on times (e.g. 12:30 PM) and percentages (e.g. 75%)
  const parts = text.split(/(\d{1,2}:\d{2}\s?(?:AM|PM)|\d{1,3}%)/gi);

  return (
    <>
      {parts.map((part, i) =>
        /(\d{1,2}:\d{2}\s?(?:AM|PM)|\d{1,3}%)/i.test(part) ? (
          <strong key={i} className="font-semibold text-foreground">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />

      {banquetMenuData.map((category, index) => (
        <MenuSection key={category.id} category={category} index={index} />
      ))}

      {/* ── Terms and Conditions Section ── */}
      <div className="bg-[#f4f1dd]/50">
        <div className="flex items-center justify-center py-10 md:py-14">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        </div>
        <section className="px-6 md:px-14 pb-14 md:pb-24 pt-4 md:pt-6">
          <div className="max-w-3xl mx-auto w-full">
            {/* Main heading */}
            <div className="mb-10 md:mb-14 text-center">
              <h2 className="font-heading text-[2rem] md:text-[2.75rem] font-bold text-foreground mb-3 tracking-[0.08em] uppercase">
                Terms and Conditions
              </h2>
              <div className="w-12 h-[2px] bg-gold mx-auto" />
            </div>

            {/* Card container */}
            <div className="bg-background border border-gold/15 rounded-xl p-8 md:p-12 lg:p-14 shadow-sm">
              <div className="space-y-10 md:space-y-12">
                {termsAndConditionsGroups.map((group, groupIdx) => (
                  <div key={group.title}>
                    {/* Group subheading */}
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-5 md:mb-6 tracking-[0.06em] uppercase">
                      {group.title}
                    </h3>

                    {/* Bulleted list */}
                    <ul className="space-y-3.5 md:space-y-4">
                      {group.items.map((term, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-muted-foreground text-[14px] md:text-[15.5px] font-body leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0 mt-[9px]" />
                          <span>{highlightKeyInfo(term)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Subtle divider between groups */}
                    {groupIdx !== termsAndConditionsGroups.length - 1 && (
                      <div className="w-full h-px bg-gold/10 mt-10 md:mt-12" />
                    )}
                  </div>
                ))}
              </div>
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
