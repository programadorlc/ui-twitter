import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from '../components/Tweet'
import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweets] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweets('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweets('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/programadorlc.png" alt="Programador Lc" />
          <textarea
            name="tweet"
            id="tweet"
            onKeyDown={handleHotkeySubmit}
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event) => {
              setNewTweets(event.target.value)
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}