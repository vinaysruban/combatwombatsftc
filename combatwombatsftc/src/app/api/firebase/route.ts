import { NextRequest } from "next/server";
import { app, db } from "@/utils/init";
import { collection, addDoc } from "firebase/firestore";
import { stat } from "fs";

export async function POST(req: NextRequest) {
    const {email, firstName, lastName, message} = await req.json();
    try {
        console.log("Adding document");
        const docRef = await addDoc(collection(db, "requests"), {
          email: email,
          lastName: lastName,
          firstName: firstName,
          message: message,
        });
        return Response.json({ body: "Success", doc: docRef.id, status: 200});
      } catch (e) {
        console.error("Error adding document: ", e);
        return Response.json({ body: "Error", e, status: 500});
      }
}