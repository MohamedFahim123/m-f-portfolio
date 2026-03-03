"use client";

import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaSpinner className="h-10 w-10 animate-spin text-primary" />
        <p className="text-lg font-medium text-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}

export default Loading;
