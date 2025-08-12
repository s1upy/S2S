import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CoursesCatalog from "@/components/courses-catalog";
import Teachers from "@/components/teachers";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CoursesCatalog />
      <Teachers />
      <ContactForm />
      <Footer />
    </div>
  );
}
