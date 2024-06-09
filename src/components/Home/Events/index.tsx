import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Locate } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Variants, motion, useAnimation, useInView } from "framer-motion";

// imgs
import workshop_img from "@/assets/events/workshop.jpg";
import talk_img from "@/assets/events/talk.jpg";
import marathon_img from "@/assets/events/marathon.jpg";
import project_img from "@/assets/events/project.jpg";
import { useEffect, useRef } from "react";

interface EventProps {
  img: StaticImageData;
  name: string;
  desc: string;
  date: string;
  location: string;
}

function Event({ img, name, desc, date, location }: EventProps) {
  return (
    <CarouselItem>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <Image
          src={img}
          width={600}
          height={400}
          alt="Event Image"
          className="aspect-[3/2] object-cover rounded-xl"
        />
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400">{desc}</p>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Locate className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {location}
            </span>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

const eventsVariants: Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Events() {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.section
      id="events"
      className="w-full py-12 md:py-24 lg:py-32"
      ref={ref}
      initial="hide"
      animate={control}
      variants={eventsVariants}
    >
      <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
        Eventos
      </h3>
      <div className="container py-12">
        <div className="w-full max-w-5xl mx-auto">
          <Carousel
            className="rounded-lg overflow-hidden lg:overflow-visible"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              <Event
                img={workshop_img}
                name="Workshop"
                desc="Aprende con proyecto guiados de la mano de estudiantes expertos y profesores de la decanatura."
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
              <Event
                img={talk_img}
                name="Charlas"
                desc="Para incentivar la participación y escucha de los estudiantes con los temas más relevantes de la tecnología emergente y los videojuegos."
                date="Septiembre 20-22, 2023"
                location="Auditorio"
              />
              <Event
                img={marathon_img}
                name="Maratones de Programación"
                desc="Reta tus conocimientos y habilidades en estas competencias. Conoce a personas apasionadas por la tecnología."
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
              <Event
                img={project_img}
                name="Proyectos"
                desc="Incentivamos la creación de proyectos independientes brindando el laboratorio y un equipo de trabajo increíble."
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}
