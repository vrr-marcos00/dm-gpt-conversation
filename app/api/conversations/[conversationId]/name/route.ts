import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest, { params }: {
  params: { conversationId: string }
}) {
  const body = await request.json()
  const {
    auto_generate,
    name,
  } = body
  const { conversationId } = params
  const { user } = getInfo(request)
  const appKey = request.nextUrl.searchParams.get('app-key') as string

  // auto generate name
  const { data } = await client(appKey).renameConversation(conversationId, name, user, auto_generate)
  return NextResponse.json(data)
}
