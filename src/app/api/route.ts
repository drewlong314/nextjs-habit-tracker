import { readFileSync } from "fs"
import { NextResponse } from "next/server"

export const GET = async () => {
    const data = readFileSync('public/data.json', "utf-8")
    return new NextResponse(data)
}
