"use client";
import { easeInOut, motion } from "framer-motion";
function LoadSlide() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen flex justify-center items-center h-screen bg-black -50 z-50"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 0.8, duration: 0.8, ease: easeInOut }}
    >
      <div className="max-w-120 text-center">
        <h1 className="text-5xl">Finding Your</h1>
        <h1 className="text-7xl "> Dream Home</h1>
      </div>
    </motion.div>
  );
}

export default LoadSlide;
