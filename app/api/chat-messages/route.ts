import { type NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    inputs,
    query,
    files,
    conversation_id: conversationId,
    response_mode: responseMode,
  } = body
  const { user } = getInfo(request)
  const appKey = request.nextUrl.searchParams.get('app-key') as string

  const res = await client(appKey).createChatMessage(inputs, query, user, responseMode, conversationId, files)
  return new Response(res.data as any)
}
