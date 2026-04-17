import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useMenuCategories } from "@/hooks/useMenuCategories";

const Index = () => {
  const { categories } = useMenuCategories();
  const [activeCategory, setActiveCategory] = useState(
    () => categories[0]?.id ?? "",
  );

  // If the live data resolves to a different first-category than the fallback,
  // or if categories re-order, keep the active section in sync.
  useEffect(() => {
    if (!activeCategory && categories[0]) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(c => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
      
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
  }, [categories]);

  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />
      <MenuCategoryNav 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick} 
        categories={categories.map(c => ({ id: c.id, label: c.title }))}
      />
      
      {categories.map((category, index) => (
        <MenuSection key={category.id} category={category} index={index} />
      ))}
      
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
