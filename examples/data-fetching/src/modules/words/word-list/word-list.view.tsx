import React from 'react'
import styles from './word-list.module.css'
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import { getRandomWordList, getStaticProps } from './utils'

export function WordListView(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <div data-testid="word-list-view" className={styles.container}>
            WordList: {JSON.stringify(props?.randomWordList)}
        </div>
    )
}

