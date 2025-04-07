"use client";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: easeInOut }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mr-6 text-xl font-bold text-slate-900"
          >
            RealEstate
          </motion.div>
          <nav className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="group relative px-1 py-2">
              <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                Home
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="/find" className="group relative px-1 py-2">
              <span className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                Find
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg"
          >
            Sell Your House
          </motion.button>

          <motion.div className="ml-4 sm:hidden" whileTap={{ scale: 0.9 }}>
            <button className="flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
