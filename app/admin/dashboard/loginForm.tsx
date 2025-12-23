'use client';

import './admin.css';
import { useActionState } from 'react';
import { login } from './login';
import Form from 'next/form';
import Link from 'next/link';

export default function LoginForm() {
    // This hook captures the return value of 'login' into 'state'
    const [state, formAction, isPending] = useActionState(login, null);

    return (
        <Form action={formAction} className='login-form'>
            <div>
                <label className='login-label'>Username</label>
                <input name="username" />
            </div>
            <div>
                <label className='login-label'>Password</label>
                <input name="password" type="password" />
            </div>
            
            {/* Display the error if it exists */}
            {state?.error && <p style={{color: 'red'}}>{state.error}</p>}
            
            <button type="submit" disabled={isPending}>
                {isPending ? 'Logging in...' : 'Log in'}
            </button>
            <Link href={'/'}>Home</Link>
        </Form>
    );
}