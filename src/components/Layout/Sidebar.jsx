import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiHome, FiUsers, FiSettings, FiX } from "react-icons/fi";

const menu = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Users", icon: <FiUsers />, path: "/users" },
  { name: "Settings", icon: <FiSettings />, path: "/settings" },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            onClick={() => setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-100/80 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed z-40 w-72 h-full bg-white border-r md:hidden"
          >
            <div className="flex justify-between items-center p-6 font-bold text-lg">
              Admin Panel
              <button onClick={() => setSidebarOpen(false)}>
                <FiX />
              </button>
            </div>

            <nav className="px-4 space-y-2">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)} // ✅ CLOSE ON CLICK
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-lg transition
                     ${
                       isActive
                         ? "bg-indigo-100 text-indigo-700"
                         : "hover:bg-indigo-50"
                     }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      
      <aside className="hidden md:flex w-72 bg-white border-r flex-col">
        <div className="p-6 font-bold text-lg">Admin Panel</div>

        <nav className="px-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition
                 ${
                   isActive
                     ? "bg-indigo-100 text-indigo-700"
                     : "hover:bg-indigo-50"
                 }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
