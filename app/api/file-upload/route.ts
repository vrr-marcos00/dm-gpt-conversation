import { type NextRequest } from 'next/server'
import { client, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const { user } = getInfo(request)
    formData.append('user', user)
    const appKey = request.nextUrl.searchParams.get('app-key') as string

    const res = await client(appKey).fileUpload(formData)
    return new Response(res.data.id as any)
  }
  catch (e: any) {
    return new Response(e.message)
  }
}
