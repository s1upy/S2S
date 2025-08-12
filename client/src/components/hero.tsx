import { useState } from "react";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/application-modal";
import heroImage from "@assets/Group 140_1755012473337.png";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative mt-10 bg-tranperent overflow-hidden">
        <div className="container mx-auto rounded-3xl border-solid border-2 border-b-4 border-[#0080FF]">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left side - Content */}
            <div className="max-w-xl px-6 py-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display">
                Здесь учатся
                <br />
                <span className="text-primary">выигрывать</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-semibold">
                Школа, где не просто готовятся к ЕГЭ, а играют в долгую. Готовим
                к экзаменам, олимпиадам и поступлению в топовые вузы.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="default"
                  size="lg"
                >
                  Оставить заявку
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToCourses}
                  size="lg"
                >
                  Выбрать курс
                </Button>
              </div>
            </div>

            {/* Right side - Illustration */}
            <div className="relative flex justify-end lg:pr-0 pr-0">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Студент с ноутбуком и кубком - образовательная платформа S2S"
                  className="w-full h-auto max-w-lg ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
