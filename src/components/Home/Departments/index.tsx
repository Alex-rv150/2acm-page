import Image, { StaticImageData } from "next/image";
import { motion, Variants, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Depts
import investigations_img from "@/assets/depts/investigacion.jpeg";
import logistics_img from "@/assets/depts/logistica.jpeg";
import marathons_img from "@/assets/depts/maratones.jpeg";
import marketing_img from "@/assets/depts/marketing.jpeg";
import mentorship_img from "@/assets/depts/mentoria.jpeg";
import presidency_img from "@/assets/depts/presidente.jpeg";
import secretary_img from "@/assets/depts/secretarix.jpeg";
import treasury_img from "@/assets/depts/tesoreria.jpeg";
import vicepresidency_img from "@/assets/depts/vicepresidente.jpeg";
import videogames_img from "@/assets/depts/videojuegos.jpeg";
import webdev_img from "@/assets/depts/webdev.jpeg";

const deptVariants: Variants = {
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

interface DepartmentProps {
  name: string;
  desc: string;
  img: StaticImageData;
}

function Department({ name, desc, img }: DepartmentProps) {
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
      className="flex items-center gap-4"
      ref={ref}
      initial="hide"
      animate={control}
      variants={deptVariants}
    >
      <Image
        src={img}
        alt="Item 1"
        width={300}
        height={300}
        className="w-32 md:w-40 aspect-square object-cover rounded-xl"
      />
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Departments() {
  return (
    <section
      id="departments"
      className="container mx-auto py-12 md:py-16 lg:py-20"
    >
      <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
        Departmentos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 py-12">
        <Department
          name="Investigación"
          desc="Departamento encargado de la búsqueda de información y conocimiento."
          img={investigations_img}
        />
        <Department
          name="Logística"
          desc="Encargado de la gestión eficiente de recursos y distribución de eventos."
          img={logistics_img}
        />
        <Department
          name="Maratones"
          desc="Organiza eventos con los miembros de ACM."
          img={marathons_img}
        />
        <Department
          name="Marketing"
          desc="Encargado de promocionar y posicionar ACM en las redes sociales."
          img={marketing_img}
        />
        <Department
          name="Mentoría"
          desc="Brinda orientación y apoyo a individuos en su desarrollo academico."
          img={mentorship_img}
        />
        <Department
          name="Presidencia"
          desc="Encargado de liderar y tomar decisiones estratégicas en el grupo."
          img={presidency_img}
        />
        <Department
          name="Vicepresidencia"
          desc="Apoya al presidente en la toma de decisiones y en la gestión del grupo."
          img={vicepresidency_img}
        />
        <Department
          name="Secretaría"
          desc="Encargada de la gestión administrativa y documental del grupo."
          img={secretary_img}
        />
        <Department
          name="Tesorería"
          desc="Responsable de la gestión financiera y control de los recursos económicos."
          img={treasury_img}
        />
        <Department
          name="Videojuegos"
          desc="Desarrolla y produce actividades para el grupo con respecto a videojuegos."
          img={videogames_img}
        />
        <Department
          name="Desarrollo web"
          desc="Desarrolla y produce actividades para el grupo con respecto al desarrollo web."
          img={webdev_img}
        />
      </div>
    </section>
  );
}
