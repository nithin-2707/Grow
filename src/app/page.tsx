import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import Specialties from '@/components/Specialties';
import SupportSection from '@/components/SupportSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import BackgroundSection from '@/components/BackgroundSection';
import OurOffice from '@/components/OurOffice';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>
      <Hero />
      <AboutPreview />
      <Specialties />
      <SupportSection />
      <AboutSection />
      <FAQSection />
      <BackgroundSection />
      <OurOffice />
      <CTASection />
      <Footer />
    </main>
  );
}
