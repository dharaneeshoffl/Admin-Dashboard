import { motion } from "framer-motion";
import { FiUser, FiLock, FiBell, FiMoon, FiSave } from "react-icons/fi";

export default function Settings() {
  return (
    <div
      className="
        pt-20
        px-4 sm:px-6 lg:px-10 xl:px-14
        pb-12
        space-y-8
      "
    >
      
      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-slate-200/40 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <FiUser />
          Profile Settings
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <input
              type="text"
              placeholder="Admin User"
              className="mt-2 w-full rounded-lg border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email Address</label>
            <input
              type="email"
              placeholder="admin@example.com"
              className="mt-2 w-full rounded-lg border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-slate-200/40 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <FiLock />
          Security
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-500">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-lg border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-lg border border-slate-200 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </motion.div>

    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white border border-slate-200/40 rounded-2xl p-6 md:p-8 space-y-6"
      >
        <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
          <FiBell />
          Preferences
        </div>

        <div className="space-y-4">
          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Email Notifications</p>
              <p className="text-sm text-gray-500">
                Receive system updates via email
              </p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5 accent-indigo-600"
              defaultChecked
            />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Dark Mode</p>
              <p className="text-sm text-gray-500">Enable dark theme</p>
            </div>
            <input type="checkbox" className="h-5 w-5 accent-indigo-600" />
          </div>
        </div>
      </motion.div>

     
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          <FiSave />
          Save Changes
        </button>
      </div>
    </div>
  );
}
