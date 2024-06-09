import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
      <Label htmlFor="name">{t("contact:name_label")}</Label>
      <Input
        id="name"
        name="name"
        placeholder={t("contact:name_placeholder")}
        required
      />
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
  const { t } = useTranslation();

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
      <Label htmlFor="email">{t("contact:email_label")}</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder={t("contact:email_label")}
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
  const { t } = useTranslation();

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
      <Label htmlFor="message">{t("contact:message_label")}</Label>
      <Textarea
        id="message"
        name="message"
        placeholder={t("contact:message_label")}
        rows={5}
        required
      />
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("contact:title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              {t("contact:desc")}
            </p>
          </div>
          <form className="space-y-4 text-left">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <NameInput />
              <EmailInput />
            </div>
            <MessageInput />
            <Button type="submit" className="w-full sm:w-auto">
              {t("contact:submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
