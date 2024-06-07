"use client";

import { motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "backIn", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
