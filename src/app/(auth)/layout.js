import { LoginHero } from "@/components/auth/LoginHero";

export default function Layout({ children }) {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 h-[500px] rounded-3xl shadow-2xl shadow-black">
        <div className="w-[500px] h-auto bg-base-content rounded-l-3xl ">
          <LoginHero />
        </div>
        <div className="w-[500px] bg-base-300 flex justify-center items-center rounded-r-3xl">
          <div className="w-[350px]">{children}</div>
        </div>
      </div>
    </main>
  );
}
