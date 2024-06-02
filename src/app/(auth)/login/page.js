import { Login } from "@/components/auth/login";
// import { cookies } from "next/headers";
// import jwt from "jsonwebtoken";

export default function Page() {
  // const cookieStore = cookies();

  // const token = cookieStore.get("token");
  // jwt.verify(token?.value, "rambutnenek");

  // const decodedData = jwt.decode(token.value);

  return <Login />;
  // return <Login isLandlord={decodedData.role === "LANDLORD"} />;
}
