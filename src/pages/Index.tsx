import { useState, useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { OrderForm } from "@/components/sections/OrderForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-12-31T23:59:59');
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header onOrderClick={() => setIsFormOpen(true)} />
      <HeroSection timeLeft={timeLeft} onOrderClick={() => setIsFormOpen(true)} />
      <VideoSection onOrderClick={() => setIsFormOpen(true)} />
      <FeaturesSection />
      <SpecsSection />
      <ReviewsSection />
      <ContactSection onOrderClick={() => setIsFormOpen(true)} />
      <Footer />
      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Index;
