import Image from "next/image";

interface CardLayoutProps {
  type: "CSR" | "SSR";
  title?: string;
  description?: string;
  imageUrl?: string;
  isLoading?: boolean;
}

export default function CardLayout({
  type,
  title,
  description,
  imageUrl,
  isLoading,
}: CardLayoutProps) {
  const isCsr = type === "CSR";

  return (
    <div
      className={`border-2 rounded-2xl p-6 bg-white shadow-lg min-h-100 ${isCsr ? "border-pink-200" : "border-blue-200"}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-bold text-lg ${isCsr ? "text-pink-500" : "text-blue-500"}`}
        >
          📍 {isCsr ? "Client-Side Rendering" : "Server-Side Rendering"}
        </h3>
        <span
          className={`${isCsr ? "bg-pink-100 text-pink-500" : "bg-blue-100 text-blue-600"} text-[10px] px-2 py-1 rounded-full font-bold uppercase`}
        >
          {isCsr ? "Client Side" : "Server Side"}
        </span>
      </div>
      {isLoading ? (
        <div className="flex flex-col gap-4 animate-pulse">
          <div className="w-full h-52 bg-slate-200 rounded-xl" />
          <div className="h-6 bg-slate-200 w-3/4 rounded" />
          <div className="h-4 bg-slate-200 w-full rounded" />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {imageUrl && (
            <div className="relative w-full h-52">
              <Image
                src={imageUrl}
                alt="img"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}
          <h4 className="text-xl font-bold text-slate-800">{title}</h4>
          <p className="text-slate-500 leading-relaxed">{description}</p>
          <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-xs text-slate-400 italic">
              {isCsr
                ? "브라우저에서 JS를 실행해 데이터를 요청합니다!"
                : "서버에서 HTML이 완성되어 도착했습니다!"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
