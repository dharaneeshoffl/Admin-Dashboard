import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="
        bg-amber-200 border border-slate-200/40rounded-2xl p-10 min-h-[190px]flex flex-col justify-center"
    >
      <p className="text-lg text-gray-500 font-medium">{title}</p>

      <h2 className="text-4xl font-bold text-gray-900 mt-4">{value}</h2>
    </motion.div>
  );
}
