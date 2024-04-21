import { NextRequest } from "next/server";
import { app, db } from "@/utils/init";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { stat } from "fs";

export async function POST(req: NextRequest) {
    const {email, firstName, lastName, message} = await req.json();
    try {
        const docRef = await addDoc(collection(db, "requests"), {
          email: email,
          lastName: lastName,
          firstName: firstName,
          message: message,
        });
        return Response.json({ body: "Success", doc: docRef.id, status: 200});
      } catch (e) {
        return Response.json({ body: "Error", e, status: 500});
      }
}

export async function GET() {
    const q = query(collection(db, "requests"));
    const querySnapshot = await getDocs(q);
    let data: any[] = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return Response.json({ body: data, status: 200 });
}