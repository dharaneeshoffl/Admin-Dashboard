import StatCard from "../components/cards/StatCard";

export default function Dashboard() {
  const stats = [
    { title: "Users", value: "1,245" },
    { title: "Revenue", value: "$32,450" },
    { title: "Orders", value: "320" },
    { title: "Sales", value: "$12,400" },
    { title: "Growth", value: "+24%" },
    { title: "Visitors", value: "8,940" },
    { title: "Feedback", value: "128" },
    { title: "Issues", value: "5" },
    { title: "Sessions", value: "3,240" },
    { title: "Reports", value: "18" },
  ];

  return (
    <div
      className="pt-20 px-4 sm:px-6 lg:px-10xl:px-14 pb-10"
    > 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
            type="users"
          />
        ))}
      </div>
    </div>
  );
}
