"use client";

import { LogoutBtn } from "./auth/logoutBtn";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export const DashboardLayout = ({ isLandlord, username, children }) => {
  const router = useRouter();

  if (isLandlord) {
    return (
      <div>
        <header className="p-6 flex justify-between items-center">
          <div>Landlord</div>
          <div className="flex items-center gap-4">
            menu landlord
            <div>{username}</div>
            <LogoutBtn />
          </div>
        </header>
        <main>{children}</main>
      </div>
    );
  } else {
    router.push("/") &&
      router.push(router.asPath, undefined, { shallow: true });
    // window.location.reload("/");
  }
};
