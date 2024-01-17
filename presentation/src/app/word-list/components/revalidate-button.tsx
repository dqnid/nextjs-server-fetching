'use client'

import { revalidateFetchByTag } from '../actions'

export default function RevalidateButton(props: { tag?: string }) {
    return (
        <button onClick={() => revalidateFetchByTag(props.tag ?? 'wordlist')}>
            Revalidate!
        </button>
    )
}
