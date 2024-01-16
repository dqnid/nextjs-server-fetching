'use client'

import { revalidateFetchByTag } from '../actions'

export default function RevalidateButton() {
    return (
        <button onClick={() => revalidateFetchByTag('wordlist')}>
            Revalidate!
        </button>
    )
}
