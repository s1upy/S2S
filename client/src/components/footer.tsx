export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and main info */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S2S</span>
            </div>
            <span className="text-xl font-bold">S2S</span>
          </div>
          
          {/* Footer columns */}
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {/* Subjects column */}
            <div>
              <h4 className="font-semibold mb-4">Предметы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Математика</li>
                <li>Физика</li>
                <li>Химия</li>
                <li>История</li>
                <li>Информатика</li>
                <li>Обществознание</li>
              </ul>
            </div>

            {/* About column */}
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Преподавателям</li>
                <li>Контакты</li>
                <li>О платформе</li>
                <li>Договор оферта</li>
              </ul>
            </div>

            {/* Additional column 1 */}
            <div>
              <h4 className="font-semibold mb-4">Ещё столбик</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Студентам</li>
                <li>Преподавателям</li>
                <li>Контакты</li>
              </ul>
            </div>

            {/* Additional column 2 */}
            <div>
              <h4 className="font-semibold mb-4">Ещё столбик</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Отзывы</li>
                <li>Преподавателям</li>
                <li>Студентам</li>
                <li>Контакты</li>
                <li>Договор оферта</li>
              </ul>
            </div>

            {/* Additional column 3 */}
            <div>
              <h4 className="font-semibold mb-4">Ещё столбик</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Отзывы</li>
                <li>Студентам</li>
                <li>Преподавателям</li>
                <li>Контакты</li>
                <li>Договор оферта</li>
              </ul>
            </div>
          </div>

          {/* Contact info and copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
                <span>8 900 800 60 70</span>
                <span>Москва, ул Московская 1</span>
                <span>help@s2s.ru</span>
              </div>
              
              <div className="text-sm text-gray-400">
                <p>&copy; S2S (2025)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
