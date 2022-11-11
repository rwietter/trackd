/* eslint-disable consistent-return */
import { NextRequest, NextResponse } from 'next/server'

import { parseCookies } from 'nookies'


const middleware = async (req: NextRequest, res: NextResponse) => {
  try {
    const authorization = await parseCookies()
    console.log("🚀 ~ file: middleware.ts ~ line 7 ~ withAuth ~ authorization", authorization)
  } catch (error: any) {
    return NextResponse.rewrite(new URL('/', req.url))
  }
}

export default middleware

export const config = {
  matcher: '/dashboard',
}