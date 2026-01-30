import CardLayout from "@/components/layout/CardLayout";

export default async function SSRCard() {
  try {
    // 서버 사이드에서 데이터를 가져옵니다.

    const res = await fetch("http://localhost:3000/api/data", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error();

    const data = await res.json();

    /**

     * 서버 컴포넌트는 로딩 상태가 필요없습니다

     * 이미 데이터를 가지고 렌더링되니까요!

     */

    return <CardLayout type="SSR" isLoading={false} {...data} />;
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
