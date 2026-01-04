import { useState } from "react";
import LightRays from "./components/Background";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import CountdownTimer from "./components/Timer";

const App = () => {
  const text = "Zero";
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true; // Default to dark
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
    return isDark;
  });

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#ffffff] dark:bg-black transition-colors">
      {/* Background */}
      <LightRays
        className="light-rays"
        raysOrigin="bottom-center"
        raysColor={dark ? "#00FFFF" : "rgba(0,0,0,0.03)"}
      />

      {/* Top Bar */}
      <header className="absolute top-0 left-0 w-full px-7 py-5 flex items-center justify-between z-50">
        {/* Logo */}
        <p className="animated-logo text-[1.728rem] text-gray-700 dark:text-white select-none">
          {text.split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </p>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/iamsurajthakur"
            target="_blank"
            rel="noreferrer"
            className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#171717] rounded-lg text-gray-700 dark:text-white transition"
          >
            <FaGithub size={20} />
          </a>

          <div className="w-px h-5 bg-gray-300 dark:bg-gray-500/40"></div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleTheme}
                className="block px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#171717] rounded-lg text-gray-700 dark:text-white transition cursor-pointer"
              >
                {dark ? (
                  <SunIcon className="w-6 h-5" />
                ) : (
                  <MoonIcon className="w-6 h-5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Mode T</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </header>

      {/* Timer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default App;
