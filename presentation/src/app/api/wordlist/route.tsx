import { NextResponse } from 'next/server'
import { fetchWordlist } from 'src/app/word-list/utils'

export async function GET(request: Request) {
    // const { searchParams } = new URL(request.url)
    // const url = searchParams.get('url')
    // console.log(url)

    const res = await fetchWordlist()

    console.log('API Data fetch is done', res)
    return NextResponse.json(res)
}
