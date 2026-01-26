interface RenderingSectionProps {
  title: string;
  dotColor: "pink" | "blue";
  children: React.ReactNode;
}

export default function RenderingSection({
  title,
  dotColor,
  children,
}: RenderingSectionProps) {
  const bgColor =
    dotColor === "pink" ? "bg-pink-500 animate-pulse" : "bg-blue-500";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
        <span className={`w-3 h-3 rounded-full ${bgColor}`} />
        <h2 className="text-xl font-bold text-slate-700">{title}</h2>
      </div>
      {children}
    </div>
  );
}
