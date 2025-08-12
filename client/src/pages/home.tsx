import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import EmotionalHeader from "@/components/emotional-header";
import CoursesCatalog from "@/components/courses-catalog";
import Teachers from "@/components/teachers";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-background">
      <Header />
      <Hero />
      <Features />
      <EmotionalHeader />
      <CoursesCatalog />
      <Teachers />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
