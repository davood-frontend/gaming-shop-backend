import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import Console from "@/app/models/Console"
import { revalidatePath } from "next/cache"
export const GET = async (request, { params }) => {
    const { slug } = params;
    try {
        await connect()
        const consoles = await Console.findOne({ slug: slug })
        revalidatePath('/')
        return new NextResponse(JSON.stringify(consoles), { status: 200 })
    } catch (err) {
        return new NextResponse(err.message, { status: 500 })
    }
}