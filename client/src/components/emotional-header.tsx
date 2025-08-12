import mentorImage from "@assets/Mask group (1)_1755025858652.png";
import gameElementsImage from "@assets/Frame 479_1755025307481.png";
import megaphoneImage from "@assets/Group 228 (1)_1755025300515.png";
import teamImage from "@assets/Frame 501_1755025340599.png";

export default function EmotionalHeader() {
  return (
    <section className="bg-white mt-36">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-display">
          Эмоциональный заголовок
        </h2>

        {/* Первый блок - Наставники */}
        <div className="mb-8">
          <div className="bg-transperent border-solid border-2 border-b-4 border-[#B5F43F] max-h-[502px] rounded-[30px] p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex-1 z-10">
              <h2 className="text-2xl font-semibold font-display mb-4 text-[36px]">
                Наставники, которые недавно были на твоём месте
              </h2>
              <p className="font-regular">
                У нас преподы — студенты топовых вузов, не «дядьки из прошлого».
                Они знают, как сдать сейчас, объясняют простым языком и реально
                понимают, через что ты проходишь.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={mentorImage}
                alt="Студент-наставник с книгами"
                className="w-full h-auto mx-auto scale-[240%] ml-[35%]"
              />
            </div>
          </div>
        </div>

        {/* Второй ряд - Учёба с элементами игры и Закрытые сообщества */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Учёба с элементами игры */}
          <div className="bg-transperent border-solid border-2 border-b-4 border-[#B5F43F] max-h-[502px] rounded-[30px] relative overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold font-display mb-4 text-[36px]">
                Учёба с элементами игры
              </h3>
              <p className="font-semibold mb-4">
                Челленджи, рейтинги, уровни, аватары, награды — скучно не будет.
              </p>
              <p className="text-sm font-regular">
                Мы встроили геймификацию в учебный процесс, чтобы ты оставался в
                тонусе и видел свой рост каждую неделю.
              </p>
            </div>
            <div className="mt-4">
              <img
                src={gameElementsImage}
                alt="Игровые элементы с прогрессом"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Закрытые сообщества */}
          <div className="bg-transperent border-solid border-2 border-b-4 border-[#B5F43F] max-h-[502px] rounded-[30px] relative overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold font-display mb-4 text-[36px]">Закрытое комьюнити</h3>
              <p className="font-semibold mb-4">
                Челленджи, рейтинги, уровни, аватары, награды — скучно не будет.
              </p>
              <p className="text-sm font-regular">
                Мы встроили геймификацию в учебный процесс, чтобы ты оставался в
                тонусе и видел свой рост каждую неделю.
              </p>
            </div>
            <div className="mt-4">
              <img
                src={teamImage}
                alt="Игровые элементы с прогрессом"
                className="w-full h-auto"
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
            <h3 className="text-2xl font-semibold font-display mb-4">
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
