"use client";

import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  // const router = useRouter();
  function handleLogout() {
    Cookies.remove("token");
    // router.push("/");
    window.location.reload("/");
  }

  return (
    <button onClick={handleLogout} className="w-fit btn bg-black text-white">
      Log Out
    </button>
  );
};
