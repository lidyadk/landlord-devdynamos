import { cookies } from "next/headers";
import { LandingPage } from "@/components/landingPage";
import { LogoutBtn } from "@/components/auth/logoutBtn";
import Link from "next/link";

export default function Home() {
  const cookieStore = cookies();

  const token = cookieStore.get("token");

  if (!token?.value) {
    return (
      <div>
        <header className="flex justify-between">
          <div>Landlord</div>
          <Link href="/login">
            <div>Login</div>
          </Link>
        </header>
        <main>
          <LandingPage />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <header className="flex justify-between">
          <div>Landlord</div>
          <LogoutBtn />
        </header>
        <main>
          <LandingPage />
        </main>
      </div>
    );
  }
}
