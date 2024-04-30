import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/utils/init";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  let result, error;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return NextResponse.json({ result, error });
}
