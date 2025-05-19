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
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// imgs
import workshop_img from "@/assets/events/workshop.jpg";
import talk_img from "@/assets/events/talk.jpg";
import marathon_img from "@/assets/events/marathon.jpg";
import project_img from "@/assets/events/project.jpg";

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
  const { t } = useTranslation("events");

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
        {t("title")}
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
                name={t("workshop_title")}
                desc={t("workshop_desc")}
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
              <Event
                img={talk_img}
                name={t("talk_title")}
                desc={t("talk_desc")}
                date="Septiembre 20-22, 2023"
                location="Auditorio"
              />
              <Event
                img={marathon_img}
                name={t("marathon_title")}
                desc={t("marathon_desc")}
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
              <Event
                img={project_img}
                name={t("project_title")}
                desc={t("project_desc")}
                date="Septiembre 20-22, 2023"
                location="Bloque K, piso 6"
              />
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex justify-center mt-8">
            <Button 
              className="bg-[#057dcd] hover:bg-[#a5e2ff] text-white font-semibold rounded-[8px] px-9 py-2 transition"
              asChild
            >
              <Link href="/events">
                {t("view_all")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
