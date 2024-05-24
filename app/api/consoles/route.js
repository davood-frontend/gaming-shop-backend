import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import Console from "@/app/models/Console";
import { revalidatePath } from "next/cache";
export const GET = async () => {
    try {
        await connect();
        const res = await Console.find()
        revalidatePath('/')
        return new NextResponse(JSON.stringify(res), { status: 200 })
    } catch (err) {
        return new NextResponse(err, { status: 500 })
    }
}