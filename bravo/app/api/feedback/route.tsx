import fs from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    console.log("GET /api/feedback")
    return NextResponse.json({ message: "Hello, World!" })
}

export async function POST(req: NextRequest) {
    console.log("POST /api/feedback")
    const reqJson = await req.json()
    const email = reqJson.email
    const text = reqJson.text
    const newFeedback = {
        id: (new Date()).toISOString(),
        email,
        text,
    }
    const filePath = path.join(process.cwd(), "data", "feedback.json")
    const fileData = fs.readFileSync(filePath, "utf-8")
    const data = JSON.parse(fileData)
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(data))
    return NextResponse.json({ message: "success", feedback: newFeedback })
}