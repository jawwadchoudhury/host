'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')
  const cookieStore = await cookies();

  if (
    username === process.env.ADMIN_USERNAME && 
    password === process.env.ADMIN_PASSWORD
  ) {
    cookieStore.set('auth_token', process.env.AUTH_TOKEN!, { 
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // one week
    })
    
    redirect('/admin/dashboard')
  } else {
    return { error: 'Incorrect username/password' }
  }
}