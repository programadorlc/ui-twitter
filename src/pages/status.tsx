import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './status.css'
import { PaperPlaneRight } from "@phosphor-icons/react"

export function Status() {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabens pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswers, ...answers])
    setNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptate nam aliquid deserunt natus rerum, itaque perspiciatis recusandae suscipit et possimus aspernatur cum facilis blanditiis facere amet dolores eligendi illo!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/programadorlc.png" alt="Programador Lc" />
          <textarea
            name="tweet"
            id="tweet"
            value={newAnswers}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value)
            }}
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>



      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}