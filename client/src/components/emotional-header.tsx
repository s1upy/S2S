import mentorImage from "@assets/Mask group (1)_1755025858652.png";
import gameElementsImage from "@assets/Frame 479_1755025307481.png";
import megaphoneImage from "@assets/Group 228 (1)_1755025300515.png";
import teamImage from "@assets/Frame 501_1755025340599.png";

export default function EmotionalHeader() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
          Эмоциональный заголовок
        </h2>

        {/* Первый блок - Наставники */}
        <div className="mb-8">
          <div className="bg-gray-50 rounded-[30px] p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-bold mb-4">
                Наставники, которые недавно были на вашём месте
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Преподаватели, которые буквально на прошлой неделе сами сдавали экзамен на олимпиаде. 
                Они еще помнят как дрожали руки на экзамене.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src={mentorImage} 
                alt="Студент-наставник с книгами"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Второй ряд - Учёба с элементами игры и Закрытые сообщества */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Учёба с элементами игры */}
          <div className="bg-gray-50 rounded-[30px] p-8 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4">
              Учёба с элементами игры
            </h3>
            <p className="text-gray-600 mb-4">
              Челленджи, рейтинги, уровни, звания, награды — скучно не будет
            </p>
            <p className="text-sm text-gray-500">
              Мы геймифицировали образование полностью, чтобы ты не боялся сложности, а каждый день бежал к компьютеру изучать новое.
            </p>
            <div className="mt-4">
              <img 
                src={gameElementsImage} 
                alt="Игровые элементы с прогрессом"
                className="w-full h-auto max-w-xs"
              />
            </div>
          </div>

          {/* Закрытые сообщества */}
          <div className="bg-gray-50 rounded-[30px] p-8 relative overflow-hidden">
            <h3 className="text-xl font-bold mb-4">
              Закрытое комьюнити
            </h3>
            <p className="text-gray-600 mb-4">
              Ты попадаешь в тусовку сильных и целеустремлённых
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Твоим одноклассникам — тико попадают и двигают вместе с тобой. 
              Никаких троечников. Только мотивированные ребята, которые хотят достигать.
            </p>
            <div className="mt-4">
              <img 
                src={teamImage} 
                alt="Команда мотивированных студентов"
                className="w-full h-auto max-w-xs"
              />
            </div>
          </div>
        </div>

        {/* Третий блок - Навыки для жизни */}
        <div className="bg-gray-50 rounded-[30px] p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
          <div className="flex-1">
            <img 
              src={megaphoneImage} 
              alt="Мегафон с задачами"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
          <div className="flex-1 z-10">
            <h3 className="text-2xl font-bold mb-4">
              Навыки, которые пригодятся в жизни
            </h3>
            <p className="text-gray-600 mb-4">
              Здесь не только готовят к ЕГЭ, но и дают суперсилы
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Ты учишься красиво выступать перед людьми</li>
              <li>• Презентовать свои идеи</li>
              <li>• Мотивировать команду и учить с детьми работать</li>
              <li>• А значит, быть лидером во всех сферах жизни</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}