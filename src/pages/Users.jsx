import { motion } from "framer-motion";
import { FiMail, FiUser } from "react-icons/fi";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    role: "Manager",
    status: "Active",
  },
  {
    id: 5,
    name: "David Johnson",
    email: "david.johnson@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Robert Miller",
    email: "robert.miller@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    role: "Manager",
    status: "Active",
  },
];

export default function Users() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Users</h1>

    
      <div className="hidden md:block bg-white border border-slate-200/40 rounded-xl overflow-hidden">
        <table className="w-full table-fixed text-sm">
          <thead className="bg-slate-100 text-slate-700">
            <tr>
              <th className="px-6 py-3 text-left w-[25%]">Name</th>
              <th className="px-6 py-3 text-left w-[35%]">Email</th>
              <th className="px-6 py-3 text-left w-[20%]">Role</th>
              <th className="px-6 py-3 text-left w-[20%]">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-slate-200/40 hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center">
                      <FiUser />
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 truncate">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="flex flex-col gap-4 md:hidden">
        {users.map((user) => (
          <motion.div
            key={user.id}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-white border border-slate-200/40 rounded-xl p-4"
          >
            {/* TOP */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-600 text-white flex items-center justify-center shrink-0">
                <FiUser />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-800 truncate">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500 truncate flex items-center gap-1">
                  <FiMail className="shrink-0" />
                  <span className="truncate">{user.email}</span>
                </p>
              </div>
            </div>

            
            <div className="my-3 h-px bg-slate-200/60" />

           
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{user.role}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
