import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { Teacher } from "@shared/schema";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cupImg from "@assets/cup.png";
import hundredImg from "@assets/100.png";
import medalImg from "@assets/medal.png";
import studentImg from "@assets/student.png";
import universityImg from "@assets/university.png";

const iconMap: Record<string, string> = {
    student: studentImg,
    medal: medalImg,
    cup: cupImg,
    hundred: hundredImg,
    university: universityImg
};

// Стили для слайдера
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function Teachers() {
  const { data: teachers = [], isLoading } = useQuery<Teacher[]>({
    queryKey: ['/api/teachers'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Загрузка преподавателей...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="teachers" className="mt-10">
        <style>{`
        .teachers-slider .slick-slide > div {
          margin: 0 2px;
        }
        .teachers-slider .slick-list {
          margin: 0 -2px;
        }
        .teachers-slider .slick-track {
          padding: 10px 0;
        }
        .teachers-slider .slick-slide {
          transition: transform 0.3s ease;
        }
        .teachers-slider .slick-slide:hover {
          transform: translateY(-5px);
        }
        .teachers-slider .slick-dots li button:before {
          font-size: 10px;
        }

        /* Изменения для точек слайдера */
        .teachers-slider .slick-dots {
          margin: 0px 0px -25px;
        }
        .teachers-slider .slick-dots li {
          margin: 0 10px;
        }
        .teachers-slider .slick-dots li button:before {
          color: #ccc;
        }
        .teachers-slider .slick-dots li.slick-active button:before {
          color: #007bff;
        }
      `}</style>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Наши преподаватели
            </h2>
            <p className="text-lg font-normal">
              Опытные наставники и выпускники ведущих вузов России
            </p>
          </div>

          {/* Слайдер с преподавателями */}
          <Slider className="w-full teachers-slider" {...settings}>
            {teachers.map((teacher) => (
              <div key={teacher.id} className="px-2">
                <Card className="border-primary border-solid border-2 border-b-4 rounded-[40px] p-6 text-left h-full">
                  <img
                    src={teacher.imageUrl || "null"}
                    alt={teacher.name}
                    className="w-[124px] h-[124px] rounded-2xl mx-auto mb-4"
                  />
                  <h3 className="font-normal mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm">
                    {teacher.subject}
                  </p>
                  <div className="text-xs space-y-1 my-4">
                    {teacher.achievements.map((achievement, index) => (
                        <div className="flex items-gap gap-2 items-center" key={index}>
                            <div className="bg-[#F4F4F4] rounded-xl max-w-[40px] border-2 border-solid border-[#F8F8F8]">
                                <img className="w-full" src={iconMap[achievement.icon]} alt={achievement.text} />
                            </div>
                            <p>{achievement.text}</p>
                        </div>
                    ))}
                  </div>
                    <p className="font-regular text-primary">
                        {teacher.quote}
                    </p>
                </Card>
              </div>
            ))}
          </Slider>

          {/* Reviews Section */}
          <div className="text-center mt-[140px] mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Отзывы родителей и учеников
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">Антонина, Мама</h4>
                      <p className="text-sm text-gray-600 mt-2">
                        Сын поступил в МГУ хотя только год назад не умел складывать дроби!
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                      Подготовка к ЕГЭ по физике
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Часто задаваемые вопросы
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Как проходит подготовка к ЕГЭ?",
                "Какие гарантии результата вы даете?",
                "Можно ли заниматься в группе?",
                "Какая стоимость занятий?",
                "Как записаться на пробный урок?"
              ].map((question, index) => (
                <Card key={index} className="text-left">
                  <CardContent className="p-4">
                    <button className="flex justify-between items-center w-full text-left">
                      <span className="font-medium text-gray-900">{question}</span>
                      <span className="text-gray-400">+</span>
                    </button>
                    {index === 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm text-gray-600">
                          Наши консультанты помогут составить индивидуальный план подготовки на основе ваших целей и текущего уровня знаний
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Не нашли ответы на свой вопрос?
              </h4>
              <p className="text-gray-600 mb-4">
                Наши консультанты готовы помочь вам с любыми вопросами о подготовке к ЕГЭ
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}