import { MessageSquare, Target, Trophy, Users, Gamepad2, Lightbulb } from "lucide-react";

export default function Features() {
  return (
    <>
      {/* Statistics Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <p className="text-gray-600">Учеников поступили в топ вузы</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85+</div>
                <p className="text-gray-600">Средний балл ЕГЭ наших учеников</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-gray-600">Предметов для подготовки</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
                <p className="text-gray-600">Готовим к экзаменам и олимпиадам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Как проходят занятия?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Мы создали уникальную методику, которая сочетает классические подходы с современными технологиями
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Персональный план</h3>
                <p className="text-gray-600">
                  Составляем индивидуальную программу на основе ваших целей и текущего уровня знаний
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Опытные преподаватели</h3>
                <p className="text-gray-600">
                  Наши преподаватели - выпускники МГУ, ВШЭ, МФТИ с высокими результатами ЕГЭ
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Контроль прогресса</h3>
                <p className="text-gray-600">
                  Регулярные тестирования и анализ результатов для корректировки программы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Эмоциональный заголовок
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Персональный подход</h3>
                      <p className="text-gray-600">Индивидуальная программа для каждого ученика с учетом его уровня и целей</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Опытные наставники</h3>
                      <p className="text-gray-600">Преподаватели с высокими результатами ЕГЭ и опытом подготовки к олимпиадам</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Современные технологии</h3>
                      <p className="text-gray-600">Интерактивная платформа с играми, тестами и системой мотивации</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Illustration */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="w-full h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <p className="text-lg font-semibold">Учеба с удовольствием</p>
                    </div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full blur-sm opacity-70"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-300 rounded-full blur-sm opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section with icons */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Выбирайте подходящий для себя формат
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              Разные форматы обучения для достижения ваших целей
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Индивидуальные занятия</h3>
                <p className="text-gray-600 mb-6">
                  Персональная программа с учетом ваших целей и уровня знаний
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Гибкое расписание</li>
                  <li>• Персональный преподаватель</li>
                  <li>• Индивидуальная программа</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Групповые занятия</h3>
                <p className="text-gray-600 mb-6">
                  Обучение в небольших группах до 8 человек с активным взаимодействием
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• До 8 учеников в группе</li>
                  <li>• Командная работа</li>
                  <li>• Доступная цена</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Онлайн-курсы</h3>
                <p className="text-gray-600 mb-6">
                  Интерактивные курсы с видеолекциями, тестами и домашними заданиями
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Доступ 24/7</li>
                  <li>• Интерактивные материалы</li>
                  <li>• Автоматическая проверка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Тебе подойдёт если
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Ты хочешь</h3>
                <p className="text-gray-600 text-sm">
                  Не просто сдавать, а выигрывать
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Ты стремишься</h3>
                <p className="text-gray-600 text-sm">
                  В топ и готов работать на результат
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Тебе важно</h3>
                <p className="text-gray-600 text-sm">
                  Куда идти дальше: вузы, профессии, проекты
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-3">Ты ищешь</h3>
                <p className="text-gray-600 text-sm">
                  Сильное окружение — своих по духу
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
