import { NextResponse } from "next/server";

export async function GET() {
  // 2초 지연을 주어 CSR과 SSR의 차이를 극대화합니다.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json({
    title: " 🚀 COTATO FE Networking: CSR vs SSR",
    description: "이미지 로딩 시점과 컴포넌트 렌더링의 차이를 관찰해보세요.",
    imageUrl:
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000",
    // 이미지는 무지개색 배경 이미지입니다.
  });
}
