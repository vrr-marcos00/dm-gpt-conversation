import { type NextRequest } from 'next/server'
import { ChatClient } from 'dify-client'
import { v4 } from 'uuid'

import { API_URL, APP_ID, APP_KEY_JORDAN } from '@/config'

const userPrefix = `user_${APP_ID}:`

export const getInfo = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id')?.value || v4()
  const user = userPrefix + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession = (sessionId: string) => {
  return { 'Set-Cookie': `session_id=${sessionId}` }
}

export const client = (appKey: string) => {
  return new ChatClient(appKey, API_URL || undefined)
} 
