export default function Header() {
  return (
    <header className="mb-16 text-center">
      <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
        CSR <span className="text-slate-400 text-3xl mx-2">vs</span> SSR
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        새로고침(F5)을 눌러보세요. 데이터와 이미지가 <br />
        <span className="font-bold text-slate-800 underline decoration-yellow-400">
          어느 시점에 화면에 나타나는지
        </span>{" "}
        관찰하는 것이 핵심입니다.
      </p>
    </header>
  );
}
