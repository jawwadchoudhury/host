'use server';

import { revalidatePath } from 'next/cache';
import updateEdgeConfig from './updateEdge';

export async function updateDatabase(formData: FormData) {
    const key = formData.get('key') as string;
    const value = formData.get('value') as string;
    await updateEdgeConfig(key, value);
    revalidatePath('/admin/dashboard');
}