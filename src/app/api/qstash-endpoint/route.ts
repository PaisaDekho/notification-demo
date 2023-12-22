import {NextRequest, NextResponse} from 'next/server'
import {verifySignatureAppRouter} from "@upstash/qstash/dist/nextjs";

async function handler(_req: NextRequest) {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("success")
    return NextResponse.json({
        message: "success"
    })
}


export const POST = verifySignatureAppRouter(handler)