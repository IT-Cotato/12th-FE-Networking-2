import CardLayout from "@/components/layout/CardLayout";

export default async function SSRCard() {
  try {
    const res = await fetch("http://localhost:3000/api/data", { cache: "no-store"});
    if (!res.ok) throw new Error();

    const data = await res.json(); 
    return (
      <CardLayout
        type="SSR"
        isLoading={false}
        {...data}
      />
    );
  } catch {
    return (
      <div className="border-2 border-red-200 rounded-2xl p-6 bg-white shadow-lg flex items-center justify-center min-h-100">
        <p className="text-red-500 font-medium font-sans">
          데이터 로드 실패 (서버 에러)
        </p>
      </div>
    );
  }
}
