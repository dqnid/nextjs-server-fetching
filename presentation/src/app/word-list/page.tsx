import NextAPIWordList from './components/apiside-word-list'
import ClientWordList from './components/clientside-word-list'
import GoBackButton from './components/go-back-button'
import ServerWordList from './components/serverside-word-list'

export default function WordList() {
    return (
        <div className="data-fetching">
            <ClientWordList />
            <ServerWordList />
            <NextAPIWordList />
        </div>
    )
}
