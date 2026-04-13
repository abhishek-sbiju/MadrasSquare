import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { menuSections } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuSections[0].id);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuSections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      
      let current = "";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Trigger area is between 0 and 300px from the top of the viewport
        if (rect.top <= 250 && rect.bottom >= 200) {
           current = section.id;
           break;
        }
      }
      
      if (current) {
        setActiveCategory(prev => prev !== current ? current : prev);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <MenuCategoryNav 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick} 
        categories={menuSections.map(s => ({ id: s.id, label: s.title }))}
      />
      
      {menuSections.map((section, index) => (
        <MenuSection key={section.id} section={section} index={index} />
      ))}
      
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
