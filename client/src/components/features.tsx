import {
  MessageSquare,
  Target,
  Trophy,
  Users,
  Gamepad2,
  Lightbulb,
} from "lucide-react";
import universityLogos from "@assets/Group 142 (1)_1755024712505.png";

export default function Features() {
  return (
    <>
      {/* Statistics Section */}
      <section className="bg-white mt-14 max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="font-display md:text-3xl font-bold text-[36px]">
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
          <div className="col-span-12 bg-[#FCFCFF] md:col-span-8 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[30px] p-6 min-h-[150px] flex items-start">
            Прокачиваем soft skills: как выступать, как мыслить, как общаться
          </div>
          {/* Вторая карточка - узкая */}
          <div className="col-span-12 md:col-span-4 border-solid bg-[#FCFCFF] border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[30px] p-6 min-h-[150px] flex items-end">
            Готовим к ЕГЭ на 80+ баллов
          </div>
          {/* Третья карточка - узкая */}
          <div className="bg-[#FCFCFF] col-span-12 md:col-span-4 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[30px] p-6 min-h-[150px] flex items-end">
            Помогаем выигрывать олимпиады
          </div>
          {/* Четвертая карточка - широкая */}
          <div className="bg-[#FCFCFF] col-span-12 md:col-span-8 border-solid border border-b-4 border-[#0080FF] text-[20px] font-semibold rounded-[30px] p-6 min-h-[150px] flex items-start">
            Помогаем понять не только «что сдавать», но и зачем
          </div>
        </div>

        {/* Нижний блок */}
        <div className="bg-[#0080FF] text-white p-6 flex items-center justify-between rounded-[30px] relative overflow-hidden">
          <div className="relative z-10">
            <p className="font-medium text-lg">
              Настраиваем на поступление в топ:<br />
              МГУ, ВШЭ, МФТИ, СПбГУ — ты выбираешь
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full">
            <img 
              src={universityLogos} 
              alt="Логотипы университетов" 
              className="h-full w-auto object-cover object-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
