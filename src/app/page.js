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
        <header>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
              </div>
              <a className="btn btn-ghost text-xl">Landlord</a>
            </div>

            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a className="font-bold">Be a Landlord</a>
                  </li>
                </ul>
              </div>
              <Link href="/login">
                <div className="w-fit btn bg-black text-white">Login</div>
              </Link>
            </div>
          </div>
        </header>
        <main>
          <LandingPage />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
              </div>
              <a className="btn btn-ghost text-xl">Landlord</a>
            </div>

            <div className="navbar-end">
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a className="font-bold">Be a Landlord</a>
                  </li>
                </ul>
              </div>
              <LogoutBtn />
            </div>
          </div>
        </header>
        <main>
          <LandingPage />
        </main>
      </div>
    );
  }
}
