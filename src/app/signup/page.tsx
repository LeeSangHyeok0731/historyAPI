"use client";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  return (
    <>
      회원가입 페이지
      <button onClick={() => router.push("main")}>홈으로 가기</button>
    </>
  );
}
