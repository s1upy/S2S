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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Здесь учатся<br />
                <span className="text-primary">выигрывать</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-semibold">
                Школа, где не просто готовятся к ЕГЭ, а играют в долгую. 
                Готовим к экзаменам, олимпиадам и поступлению в топовые вузы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                  size="lg"
                >
                  Записаться
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToCourses}
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  size="lg"
                >
                  Подробнее
                </Button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Студент с ноутбуком и кубком - образовательная платформа S2S" 
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full blur-sm opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-green-300 rounded-full blur-sm opacity-60"></div>
            </div>
          </div>
        </div>
      </section>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
