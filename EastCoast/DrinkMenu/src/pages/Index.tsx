import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useMenuSections } from "@/hooks/useMenuSections";

const Index = () => {
  const { sections } = useMenuSections();
  const [activeCategory, setActiveCategory] = useState(
    () => sections[0]?.id ?? "",
  );

  useEffect(() => {
    if (!activeCategory && sections[0]) {
      setActiveCategory(sections[0].id);
    }
  }, [sections, activeCategory]);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const els = sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean) as HTMLElement[];

      let current = "";
      for (const section of els) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 200) {
          current = section.id;
          break;
        }
      }

      if (current) {
        setActiveCategory((prev) => (prev !== current ? current : prev));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />
      <MenuCategoryNav
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
        categories={sections.map((s) => ({ id: s.id, label: s.title }))}
      />

      {sections.map((section, index) => (
        <MenuSection key={section.id} section={section} index={index} />
      ))}

      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
