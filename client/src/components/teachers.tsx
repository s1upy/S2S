import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import type { Teacher } from "@shared/schema";

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
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши преподаватели
            </h2>
            <p className="text-lg text-gray-600">
              Ответы на самые популярные вопросы о нашей школе и подготовке к ЕГЭ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="text-center">
                <h3 className="font-bold text-gray-900 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {teacher.subject}
                </p>
                <p className="text-sm text-gray-600">
                  {teacher.university}
                </p>
              </div>
            ))}
          </div>

          {/* Reviews Section */}
          <div className="text-center mb-12">
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
