"use client";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("signin")}>로그인</button>
      <button onClick={() => router.push("signup")}>회원가입</button>
    </>
  );
}
