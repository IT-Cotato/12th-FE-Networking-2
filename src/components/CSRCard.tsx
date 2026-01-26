"use client";

import CardLayout from "@/components/layout/CardLayout";
import { useEffect, useState } from "react";

interface PostData {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CSRCard() {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  // CSR에서 아직 데이터가 없으면 스켈레톤 UI를 보여줍니다!
  return <CardLayout type="CSR" isLoading={!data} {...(data || {})} />;
}
