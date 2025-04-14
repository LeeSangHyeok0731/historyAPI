"use client";

import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  return (
    <>
      로그인 페이지
      <button onClick={() => router.push("main")}>홈으로 가기</button>
    </>
  );
}
