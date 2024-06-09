import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface ExploreProps {
  headerHeight: number;
}

export function Explore({ headerHeight }: ExploreProps) {
  const handleClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="container mx-auto flex items-center justify-center cursor-pointer"
      /* Dynamic height: */ style={{ height: `${100 - headerHeight}vh` }}
      onClick={handleClick}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: [-50, 30, -50] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <ArrowDown className="w-16 h-auto" />
      </motion.div>
    </div>
  );
}
