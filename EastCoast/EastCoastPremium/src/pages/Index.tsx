import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { menuCategories } from "@/data/menuData";
import { getDietType } from "@/lib/diet";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [isVegOnly, setIsVegOnly] = useState(false);

  // Filter categories and items if veg only
  const filteredCategories = menuCategories.map(category => {
    if (!isVegOnly) return category;
    
    const newCat = { ...category };
    
    if (newCat.subCategories) {
      newCat.subCategories = newCat.subCategories.map(sub => ({
        ...sub,
        items: sub.items.filter(item => getDietType(item) !== 'non-veg')
      })).filter(sub => sub.items.length > 0);
      
      if (newCat.subCategories.length === 0) return null;
    } else if (newCat.items) {
      newCat.items = newCat.items.filter(item => getDietType(item) !== 'non-veg');
      if (newCat.items.length === 0) return null;
    }
    
    return newCat;
  }).filter(Boolean) as typeof menuCategories;

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = filteredCategories.map(c => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
      
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
  }, [filteredCategories]);

  return (
    <div className="min-h-screen bg-background overflow-x-clip w-full max-w-[100vw]">
      <Navbar />
      <HeroSection />
      <MenuCategoryNav 
        activeCategory={activeCategory} 
        onCategoryClick={handleCategoryClick} 
        categories={filteredCategories.map(c => ({ id: c.id, label: c.title }))}
        isVegOnly={isVegOnly}
        setIsVegOnly={setIsVegOnly}
      />
      
      {filteredCategories.map((category, index) => (
        <MenuSection key={category.id} category={category} index={index} />
      ))}
      
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
