import { MessageSquare, Target, Trophy, Users, Gamepad2, Lightbulb } from "lucide-react";

export default function Features() {
  return (
    <>
      {/* Value Proposition */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Для тех, кто требует большего<br />
                  <span className="text-primary">от учёбы, от себя, от мира</span>
                </h2>
              </div>
              <div>
                <p className="text-xl text-gray-700 mb-4">Это не просто курсы.</p>
                <p className="text-lg text-gray-600">
                  Это путь, где ты растёшь и выходишь на новый уровень
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Прокачиваем soft skills
                </h3>
                <p className="text-gray-600">
                  Как выступать, как мыслить, как общаться
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-success text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Готовим к ЕГЭ на 80+ баллов
                </h3>
                <p className="text-gray-600">
                  Помогаем понять не только «что сдавать», но и зачем
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-6">
                  <Trophy className="text-warning text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Помогаем выигрывать олимпиады
                </h3>
                <p className="text-gray-600">
                  Настраиваем на поступление в топ: МГУ, ВШЭ, МФТИ, СПбГУ — ты выбираешь
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Наставники, которые недавно были на твоём месте
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  У нас преподы — студенты топовых вузов, не «дядьки из прошлого». 
                  Они знают, как сдать сейчас, объясняют простым языком и реально понимают, 
                  через что ты проходишь.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-6">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mb-3">
                    <Gamepad2 className="text-primary text-sm" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Учёба с элементами игры</h3>
                  <p className="text-sm text-gray-600">
                    Челленджи, рейтинги, уровни, аватары, награды — скучно не будет.
                  </p>
                </div>
                <div className="bg-success/5 rounded-xl p-6">
                  <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center mb-3">
                    <Users className="text-success text-sm" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Закрытое коммьюнити</h3>
                  <p className="text-sm text-gray-600">
                    Ты попадаешь в тусовку сильных и целеустремлённых.
                  </p>
                </div>
                <div className="bg-warning/5 rounded-xl p-6 col-span-2">
                  <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center mb-3">
                    <Lightbulb className="text-warning text-sm" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Навыки, которые пригодятся в жизни</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Говорить так, чтобы тебя слушали</li>
                    <li>• Презентовать свои идеи</li>
                    <li>• Критически мыслить и решать реальные задачи</li>
                    <li>• Организовывать себя и своё время</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Тебе подойдёт если
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="text-primary text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Ты хочешь</h3>
                <p className="text-gray-600 text-sm">
                  Не просто сдавать, а выигрывать
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-success text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Ты стремишься</h3>
                <p className="text-gray-600 text-sm">
                  В топ и готов работать на результат
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="text-warning text-xl" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Тебе важно</h3>
                <p className="text-gray-600 text-sm">
                  Куда идти дальше: вузы, профессии, проекты
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-purple-600 text-xl" />
                </div>
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
