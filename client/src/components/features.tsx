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
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Для тех, кто требует большего<br />
                  <span className="text-gray-600 font-normal">от учёбы, от себя, от мира</span>
                </h2>
              </div>
              <div>
                <p className="text-xl text-gray-700 font-semibold mb-4">Это не просто курсы.</p>
                <p className="text-lg text-gray-600">
                  Это путь, где ты растёшь и выходишь на новый уровень
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Прокачиваем soft skills: как выступать, как мыслить, как общаться
                </h3>
              </div>

              {/* Feature 2 */}
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Готовим к ЕГЭ на 80+ баллов
                </h3>
                <p className="text-gray-600">
                  Помогаем понять не только «что сдавать», но и зачем
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Помогаем выигрывать олимпиады
                </h3>
              </div>

              {/* Feature 4 */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Настраиваем на поступление в топ:
                </h3>
                <p className="text-gray-600">
                  МГУ, ВШЭ, МФТИ, СПбГУ — ты выбираешь
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Headline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-2xl text-gray-500 mb-8">
              Эмоциональный заголовок
            </h2>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Наставники, которые<br />
                  недавно были на твоём<br />
                  месте
                </h2>
                <p className="text-lg text-gray-600">
                  У нас преподы — студенты топовых вузов, не «дядьки из прошлого». 
                  Они знают, как сдать сейчас, объясняют простым языком и реально понимают, 
                  через что ты проходишь.
                </p>
              </div>

              {/* Three column layout */}
              <div className="space-y-8">
                {/* Row 1: Gamification and Community */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Учёба с элементами игры</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Челленджи, рейтинги, уровни, аватары, награды — скучно не будет.
                    </p>
                    <p className="text-sm text-gray-600">
                      Мы встроили геймификацию в учебный процесс, чтобы ты 
                      оставался в тонусе и видел свой рост каждую неделю.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Закрытое коммьюнити</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Ты попадаешь в тусовку сильных и целеустремлённых.
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Здесь поддерживают, прокачивают и делятся возможностями.
                    </p>
                    <p className="text-sm text-gray-600">
                      Через год — это уже не просто клуб выпускников, а твоя сеть полезных связей.
                    </p>
                  </div>
                </div>

                {/* Row 2: Life Skills */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Навыки, которые пригодятся в жизни</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Здесь не только тесты и задачи. Ты научишься:
                  </p>
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
