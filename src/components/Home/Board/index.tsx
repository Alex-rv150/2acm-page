import Image, { StaticImageData } from "next/image";

// imgs
import president_img from "@/assets/high-board/president.jpg";
import vicepresident_img from "@/assets/high-board/vicepresident.jpg";
import secretary_img from "@/assets/high-board/secretary.jpg";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const memberVariants: Variants = {
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

interface MemberProps {
  name: string;
  role: string;
  img: StaticImageData;
}

function Member({ name, role, img }: MemberProps) {
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
      className="space-y-4 text-center"
      ref={ref}
      initial="hide"
      animate={control}
      variants={memberVariants}
    >
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt="President"
          width={400}
          height={600}
          className="h-full w-full object-cover object-center rounded-xl"
        />
      </div>
      <h4 className="text-2xl font-bold">{name}</h4>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
    </motion.div>
  );
}

export default function Board() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <h3 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
        Junta directiva
      </h3>
      <div className="container grid items-start justify-center gap-8 px-4 md:px-6 py-12 lg:grid-cols-3 lg:gap-12">
        <Member name="Tabata Llach" role="Presidente" img={president_img} />
        <Member
          name="Santiago Heras"
          role="Vicepresidente"
          img={vicepresident_img}
        />
        <Member name="Johan Vergara" role="Secretario" img={secretary_img} />
      </div>
    </section>
  );
}
