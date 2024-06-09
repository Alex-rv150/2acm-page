import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { Award, Rocket, Smile, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const textVariants: Variants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

const pointsVariants: Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function Text() {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial="hide"
      animate={control}
      variants={textVariants}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
        Acerca de nosotros
      </h2>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        ACM Uninorte es un capítulo estudiantil en donde nuestro eje central es
        la practica como medio para aprender más. Queremos rediseñar el
        aprendizaje en aula y aportar conocimientos por fuera de la linea de
        aprendizaje de la Universidad.
      </p>
    </motion.div>
  );
}

function Points() {
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start("show");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial="hide"
      animate={control}
      variants={pointsVariants}
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <Award className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <div>
            <h3 className="text-lg font-medium">Experiencia Estudiantil</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              El grupo estudiantil ACM Uninorte se ha dedicado a promover el
              aprendizaje.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Rocket className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <div>
            <h3 className="text-lg font-medium">Enfoque Innovador</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Exploramos constantemente nuevas tecnologías y técnicas.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Users className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <div>
            <h3 className="text-lg font-medium">Equipo Diverso</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nuestro grupo está formado por estudiantes de diversas áreas de
              interés.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Smile className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          <div>
            <h3 className="text-lg font-medium">Miembros Satisfechos</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nos enorgullece nuestra capacidad para brindar experiencias
              educativas.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2">
          <Text />
          <Points />
        </div>
      </div>
    </section>
  );
}
