"use client";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

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
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white shadow-sm"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="mr-6 text-xl font-bold text-slate-900">
            RealEstate
          </div>
          <div>
            <nav className="hidden sm:flex sm:space-x-8">
              <Link href="/" className="group relative px-1 py-2">
                <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                  Home
                </span>
                <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link href="/find" className="group relative px-1 py-2">
                <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                  Find
                </span>
                <span className="absolute bottom-2  left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
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
                <Bars3Icon className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
