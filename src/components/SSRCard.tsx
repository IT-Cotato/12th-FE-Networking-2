import CardLayout from '@/components/layout/CardLayout';

export default async function SSRCard() {
  try {
    const res = await fetch('http://localhost:3000/api/data', {
      cache: 'no-store',
    });
    /**
     * [TODO 1] 서버에서 데이터를 직접 가져오세요.
     * - hint: const res = await fetch("주소", { 옵션 });
     *
     * - URL: "http://localhost:3000/api/data"
     * - 옵션: { cache: "no-store" }
     */

    // 위 null 부분을 힌트를 이용하여 완성하세요!!!
    // 완성하면 아래 res의 오류는 사라집니다.
    if (!res.ok) throw new Error();

    /**
     * [TODO 2] 응답받은 데이터를 JSON으로 변환하세요.
     * - hint: await res.json()을 사용하세요.
     */
    const data = await res.json(); // 이 null부분에 hint로 코드를 완성하세요!!

    /**
     * [TODO 3] 가져온 데이터를 CardLayout에 넘겨주세요.
     * - isLoading은 false로 고정합니다.
     * - data 객체는 spread 연산자(...)를 사용하세요.
     */

    return (
      <CardLayout
        type='SSR'
        isLoading={false}
        {...data}
        /* 여기에 spread 연산자를 사용하여 TODO를 수행하세요 */
      />
    );
  } catch {
    return (
      <div className='border-2 border-red-200 rounded-2xl p-6 bg-white shadow-lg flex items-center justify-center min-h-100'>
        <p className='text-red-500 font-medium font-sans'>
          데이터 로드 실패 (서버 에러)
        </p>
      </div>
    );
  }
}
