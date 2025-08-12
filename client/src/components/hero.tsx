import { useState } from "react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/application-modal";
import heroImage from "@assets/Group 140_1755012473337.png";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Hero Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto border border-primary/20">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Left side - Content */}
              <div className="p-8 lg:p-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
                  Здесь учатся<br />
                  <span className="text-primary">выигрывать</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Школа, где не просто готовятся к ЕГЭ, а играют в долгую
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                    size="lg"
                  >
                    Оставить заявку
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={scrollToCourses}
                    className="text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                    size="lg"
                  >
                    Выбрать курс
                  </Button>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="relative h-full bg-gradient-to-br from-blue-400 to-indigo-500 p-8 lg:p-12">
                <div className="relative z-10 h-full flex items-center justify-center">
                  <img 
                    src={heroImage} 
                    alt="Студент с ноутбуком и кубком - образовательная платформа S2S" 
                    className="w-full h-auto max-w-sm mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
