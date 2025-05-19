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
    transform: "translateX(-20px)",
  },
  show: {
    opacity: 1,
    transform: "translateX(0)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
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
      <Label htmlFor="name" className="text-[#121D39] dark:text-white">{t("contact:name_label")}</Label>
      <Input
        id="name"
        name="name"
        placeholder={t("contact:name_placeholder")}
        className="border-[#057dcd] focus:border-[#a5e2ff] focus:ring-[#a5e2ff]"
        required
      />
    </motion.div>
  );
}

const emailInputVariants: Variants = {
  hide: {
    opacity: 0,
    transform: "translateX(20px)",
  },
  show: {
    opacity: 1,
    transform: "translateX(0)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
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
      <Label htmlFor="email" className="text-[#121D39] dark:text-white">{t("contact:email_label")}</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder={t("contact:email_placeholder")}
        className="border-[#057dcd] focus:border-[#a5e2ff] focus:ring-[#a5e2ff]"
        required
      />
    </motion.div>
  );
}

const messageInputVariants: Variants = {
  hide: {
    opacity: 0,
    transform: "translateY(20px)",
  },
  show: {
    opacity: 1,
    transform: "translateY(0)",
    transition: {
      duration: 0.5,
      ease: "easeOut"
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
      <Label htmlFor="message" className="text-[#121D39] dark:text-white">{t("contact:message_label")}</Label>
      <Textarea
        id="message"
        name="message"
        placeholder={t("contact:message_placeholder")}
        rows={5}
        className="min-h-[120px] md:min-h-[150px] border-[#057dcd] focus:border-[#a5e2ff] focus:ring-[#a5e2ff]"
        required
      />
    </motion.div>
  );
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full py-8 md:py-12 lg:py-16 bg-[#FBFCFF] dark:bg-[#020817]">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl lg:max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#121D39] dark:text-white">
              {t("contact:title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              {t("contact:desc")}
            </p>
          </div>
          <form className="space-y-6 text-left bg-white dark:bg-[#0A1128] p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <NameInput />
              <EmailInput />
            </div>
            <MessageInput />
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-[#057dcd] hover:bg-[#a5e2ff] text-white font-semibold rounded-[8px] px-9 py-2 transition"
            >
              {t("contact:submit")}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
