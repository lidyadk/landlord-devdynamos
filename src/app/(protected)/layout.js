import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { DashboardLayout } from "@/components/dashboardLayout";

export default async function Layout({ children }) {
  const cookieStore = cookies();

  const token = cookieStore.get("token");
  if (!token?.value) {
    redirect("/");
  }

  try {
    jwt.verify(token.value, "rambutnenek");

    const decodedData = jwt.decode(token.value);

    return (
      <DashboardLayout
        username={decodedData.username}
        isLandlord={decodedData.role === "LANDLORD"}
      >
        {children}
      </DashboardLayout>
    );
  } catch {
    error;
  }
}
