import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, BookOpen, Users } from "lucide-react";
import ApplicationModal from "@/components/application-modal";
import type { Course } from "@shared/schema";

const categories = [
  { name: "Все курсы", key: "all" },
  { name: "ЕГЭ", key: "ЕГЭ" },
  { name: "ОГЭ", key: "ОГЭ" },
  { name: "Олимпиады", key: "Олимпиады" },
  { name: "Основы", key: "Основы" },
  { name: "Углубление", key: "Углубление" }
];

const subjects = ["Астрономия", "Информатика", "Математика", "Физика"];

export default function CoursesCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    const matchesSearch = !searchQuery || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryCounts = () => {
    const counts: Record<string, number> = { all: courses.length };
    courses.forEach(course => {
      counts[course.category] = (counts[course.category] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Загрузка курсов...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Выберите предметы для подготовки
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Комплексная подготовка к ЕГЭ и ОГЭ по всем предметам с индивидуальным<br />
                подходом и гарантией результата
              </p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                <div className="relative w-full md:w-96">
                  <Input
                    type="text"
                    placeholder="Поиск курсов"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActiveCategory(category.key)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      activeCategory === category.key
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {subjects.map((subject) => (
                  <Badge key={subject} variant="secondary" className="bg-primary/10 text-primary">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="mb-8">
              <p className="text-gray-600 mb-6">
                Найдено курсов: <span className="font-medium">{filteredCourses.length}</span>
              </p>
              
              {filteredCourses.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Курсы не найдены</p>
                  <p className="text-gray-400">Попробуйте изменить критерии поиска</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                            {course.title}
                          </h3>
                          {course.isPopular && (
                            <Badge className="bg-primary text-white">Популярный</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {course.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.lessons} урока</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.grades}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-900 mb-2">Что включено:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {course.features.slice(0, 4).map((feature, index) => (
                              <li key={index}>• {feature}</li>
                            ))}
                            {course.features.length > 4 && (
                              <li className="text-gray-500">• и ещё {course.features.length - 4} пунктов</li>
                            )}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500 line-through">
                              от {course.originalPrice.toLocaleString()} ₽
                            </span>
                            <span className="text-lg font-bold text-gray-900">
                              от {course.currentPrice.toLocaleString()} ₽
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Button
                            onClick={() => handleSelectCourse(course)}
                            className="w-full bg-primary text-white hover:bg-blue-600"
                          >
                            Выбрать тариф
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full"
                          >
                            Подробнее о курсе
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                size="lg"
              >
                Показать все {courses.length} курсов
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Не можете определиться с предметами?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Наши консультанты помогут составить индивидуальный план подготовки на основе ваших целей и текущего уровня знаний
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white hover:bg-blue-600"
                size="lg"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="border-primary text-primary hover:bg-primary hover:text-white"
                size="lg"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCourse(null);
        }}
        courseId={selectedCourse?.id}
      />
    </>
  );
}
