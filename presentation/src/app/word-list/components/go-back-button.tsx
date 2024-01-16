'use client'

import { useRouter } from 'next/navigation'

export default function GoBackButton() {
    const router = useRouter()
    return (
        <button
            style={{ position: 'absolute' }}
            onClick={() => router.push('/presentation')}
        >
            Go back to presentation
        </button>
    )
}
