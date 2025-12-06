import { cookies } from 'next/headers';
import LoginForm from './loginForm';

export default async function Admin() {
    const cookieStore = await cookies();
    const auth_token = cookieStore.get('auth_token')

    const isAuthenticated = !!auth_token?.value && auth_token?.value === process.env.AUTH_TOKEN
    if (!isAuthenticated) {
        return <LoginForm/>
    }

    return (
    <div>
        Logged in
    </div>
    );
}
