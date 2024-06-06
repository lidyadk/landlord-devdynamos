import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { username, email, password, role } = await req.json();

  if (!username || !email || !password || !role) {
    return Response.json(
      { message: "All field must be filled!" },
      { status: 400 }
    );
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashPassword,
      role,
    },
  });

  return Response.json(
    { message: "User registered succesfully", data: newUser },
    { status: 201 }
  );
}
