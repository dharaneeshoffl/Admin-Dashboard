import { motion } from "framer-motion";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";

export default function Navbar({ setSidebarOpen }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        fixed top-0 left-0
        w-full
        h-16
        px-4 md:px-6
        flex items-center justify-between
        bg-neutral-800
        border-b border-neutral-700
        z-50
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-xl text-white hover:opacity-80 transition"
        >
          <FiMenu />
        </button>

        <h1 className="text-lg font-semibold tracking-wide text-white">
          Dashboard
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative text-xl text-white hover:opacity-80 transition">
          <FiBell />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer text-white">
          <div className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center">
            <FiUser className="text-lg" />
          </div>
          <span className="hidden sm:block text-sm font-medium">Admin</span>
        </div>
      </div>
    </motion.header>
  );
}
