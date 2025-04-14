"use client";

export default function Header() {
  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  const handleClick = () => {
    console.log("현재 히스토리 길이:", window.history.length);
    console.log("현재 URL:", window.location.href);
    console.log("현재 상태:", window.history.state);
  };

  return (
    <>
      <div>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goForward}>앞으로 가기</button>
      </div>
      <button onClick={handleClick}>히스토리 확인하기</button>
    </>
  );
}
