import FadeIn from "./FadeIn";

const MenuNotice = () => {
  return (
    <section className="py-12 md:py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn delay={100}>
          <div className="space-y-4">
            <h3 className="text-primary font-body text-xs md:text-sm tracking-[0.2em] font-semibold uppercase">
              SERVICE CHARGES/TIPS IS AT YOUR DISCRETION
            </h3>
            <p className="text-primary/80 font-body text-sm md:text-base font-medium">
              5% GST is not included and will be added at billing.
            </p>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-primary/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <span className="w-12 h-px bg-primary/20" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default MenuNotice;
