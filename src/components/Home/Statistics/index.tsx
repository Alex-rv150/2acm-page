import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const oddVariants: Variants = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const evenVariants: Variants = {
  hide: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

function Members() {
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
      className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center"
      ref={ref}
      initial="hide"
      animate={control}
      variants={oddVariants}
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white flex">
        +
        <AnimatedNumbers
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={130}
        />
      </span>
      <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">
        Miembros totales
      </p>
    </motion.div>
  );
}

function Events() {
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
      className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center"
      ref={ref}
      initial="hide"
      animate={control}
      variants={evenVariants}
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white">
        <AnimatedNumbers
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={60}
        />
      </span>
      <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">
        Eventos
      </p>
    </motion.div>
  );
}

function Departments() {
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
      className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50 p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center"
      ref={ref}
      initial="hide"
      animate={control}
      variants={oddVariants}
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-white">
        <AnimatedNumbers
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={10}
        />
      </span>
      <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-3 lg:mt-4">
        Departamentos
      </p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <Members />
        <Events />
        <Departments />
      </div>
    </section>
  );
}
