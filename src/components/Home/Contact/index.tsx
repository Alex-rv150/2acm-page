import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const nameInputVariants: Variants = {
  hide: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function NameInput() {
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
      className="space-y-2"
      ref={ref}
      initial="hide"
      animate={control}
      variants={nameInputVariants}
    >
      <Label htmlFor="name">Nombre</Label>
      <Input id="name" name="name" placeholder="Tu nombre" required />
    </motion.div>
  );
}

const emailInputVariants: Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function EmailInput() {
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
      className="space-y-2"
      ref={ref}
      initial="hide"
      animate={control}
      variants={emailInputVariants}
    >
      <Label htmlFor="email">Correo</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Tu correo"
        required
      />
    </motion.div>
  );
}

const messageInputVariants: Variants = {
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

function MessageInput() {
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
      className="space-y-2"
      ref={ref}
      initial="hide"
      animate={control}
      variants={messageInputVariants}
    >
      <Label htmlFor="message">Mensaje</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Tu mensaje"
        rows={5}
        required
      />
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Escribenos
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Queremos saber de tus opiniones o inquietudes. Por favor, llena el
              formulario y te estaremos contactando lo mas pronto posible.
            </p>
          </div>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <NameInput />
              <EmailInput />
            </div>
            <MessageInput />
            <Button type="submit" className="w-full sm:w-auto">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
