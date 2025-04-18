import { readFileSync, writeFileSync } from "fs"
import { NextResponse, NextRequest } from "next/server"

interface Habit {
    title: string,
    startDay: string,
    dates: Record<string, boolean>
}

export const GET = async () => {
    const data = readFileSync('public/data.json', "utf-8")
    return new NextResponse(data)
}

export const PATCH = async (request: NextRequest) => {
    const body = await request.json()
    const data = readFileSync('public/data.json', "utf-8")
    const oldData = JSON.parse(data)
    oldData.forEach((habit: Habit, i: number) => {
        if (habit.title === body.title) {
            oldData[i] = body
        }
    });

    writeFileSync('public/data.json', JSON.stringify(oldData))
    return new NextResponse(JSON.stringify(oldData))
}
