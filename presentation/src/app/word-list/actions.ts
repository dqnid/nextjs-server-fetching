'use server'
import { revalidateTag } from 'next/cache'

export async function revalidateFetchByTag(tag: string) {
    revalidateTag(tag)
}
