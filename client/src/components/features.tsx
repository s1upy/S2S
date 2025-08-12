import {
  MessageSquare,
  Target,
  Trophy,
  Users,
  Gamepad2,
  Lightbulb,
} from "lucide-react";

export default function Features() {
  return (
    <>
      {/* Statistics Section */}
      <section className="bg-white mt-14 max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-display md:text-3xl font-bold leading-snug">
            Для тех, кто требует большего <br /> от учёбы, от себя, от мира
          </h1>
          <p className="text-[#212225] font-regular text-sm mt-2 md:mt-0 max-w-xl">
            Это не просто курсы. <br /> Это путь, где ты растёшь и выходишь на
            новый уровень
          </p>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          {/* Первая карточка - широкая */}
          <div className="col-span-12 md:col-span-8 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[40px] p-6 min-h-[150px] flex items-start">
            Прокачиваем soft skills: как выступать, как мыслить, как общаться
          </div>
          {/* Вторая карточка - узкая */}
          <div className="col-span-12 md:col-span-4 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[40px] p-6 min-h-[150px] flex items-start">
            Готовим к ЕГЭ на 80+ баллов
          </div>
          {/* Третья карточка - узкая */}
          <div className="col-span-12 md:col-span-4 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[40px] p-6 min-h-[150px] flex items-start">
            Помогаем выигрывать олимпиады
          </div>
          {/* Четвертая карточка - широкая */}
          <div className="col-span-12 md:col-span-8 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[40px] p-6 min-h-[150px] flex items-start">
            Помогаем понять не только «что сдавать», но и зачем
          </div>
        </div>

        {/* Нижний блок */}
        <div className="bg-blue-500 text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center">
          <p className="font-medium mb-4 md:mb-0">
            Настраиваем на поступление в топ: <br className="md:hidden" /> МГУ,
            ВШЭ, МФТИ, СПбГУ — ты выбираешь
          </p>
          <div className="flex space-x-4 opacity-70">
            <img src="/logos/mgu.png" alt="МГУ" className="h-10" />
            <img src="/logos/vshe.png" alt="ВШЭ" className="h-10" />
            <img src="/logos/mfti.png" alt="МФТИ" className="h-10" />
            <img src="/logos/spbgu.png" alt="СПбГУ" className="h-10" />
          </div>
        </div>
      </section>
    </>
  );
}
