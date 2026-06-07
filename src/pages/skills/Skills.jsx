import { skillsTabs, skillsContent } from "./skillsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 ">
      <div className="sm:pt-10">

        <h2 className="text-[var(--h1-font-size)] text-center font-semibold">
          Habilidades
        </h2>

        <span className="block text-center text-sm text-gray-500 mb-12">
          Tecnologías que manejo
        </span>

        <div className="max-w-[968px] mx-auto px-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {skillsTabs.map((tab) => (
              <SwiperSlide key={tab.id}>
                <div
                  className="rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center min-h-[350px]"
                  style={{ backgroundColor: "var(--card-color)" }}
                >
                  {/* Titulo */}
                  <h3 className="text-xl font-semibold mb-1">  {tab.title} </h3>

                  {/* Subtitulo */}
                  <span className="text-sm text-gray-500 mb-8"> {tab.subtitle} </span>

                  {/* Lista de skills */}
                  <div className="flex flex-wrap justify-center gap-8">
                    {skillsContent[tab.id].map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex flex-col items-center text-sm"
                      >
                        <Icon className=" text-blue-800 w-10 h-10 transition-transform duration-300 hover:scale-125 hover:text-blue-600" />
                        <span className="mt-2">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

    </section>
  );
};

export default Skills;
