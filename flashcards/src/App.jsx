import { useState } from 'react'
import { cardSet, cards } from './data/cards'
import { isCorrectGuess } from './matchGuess'
import FlashCard from './components/FlashCard'
import GuessForm from './components/GuessForm'
import CardNav from './components/CardNav'
import MasteredList from './components/MasteredList'
import './App.css'

function shuffleDeck(deck) {
  const nextDeck = [...deck]
  for (let index = nextDeck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    const current = nextDeck[index]
    nextDeck[index] = nextDeck[swapIndex]
    nextDeck[swapIndex] = current
  }
  return nextDeck
}

function App() {
  const [deck, setDeck] = useState(cards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)
  const [mastered, setMastered] = useState([])
  const card = deck[currentIndex]

  function resetCard() {
    setIsFlipped(false)
    setGuess('')
    setFeedback(null)
  }

  function handleFlip() {
    setIsFlipped((flipped) => !flipped)
  }

  function handleGuessChange(value) {
    setGuess(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!card || feedback === 'correct') {
      return
    }

    if (isCorrectGuess(guess, card)) {
      const nextStreak = currentStreak + 1
      setFeedback('correct')
      setCurrentStreak(nextStreak)
      setLongestStreak((longest) => Math.max(longest, nextStreak))
      return
    }

    setFeedback('incorrect')
    setCurrentStreak(0)
  }

  function handleBack() {
    if (currentIndex === 0) {
      return
    }
    setCurrentIndex(currentIndex - 1)
    resetCard()
  }

  function handleNext() {
    if (currentIndex >= deck.length - 1) {
      return
    }
    setCurrentIndex(currentIndex + 1)
    resetCard()
  }

  function handleShuffle() {
    if (deck.length < 2) {
      return
    }
    setDeck(shuffleDeck(deck))
    setCurrentIndex(0)
    resetCard()
  }

  function handleMastered() {
    if (!card) {
      return
    }
    const nextDeck = deck.filter((item) => item.id !== card.id)
    setMastered((list) => [...list, card])
    setDeck(nextDeck)
    setCurrentIndex(nextDeck.length === 0 ? 0 : Math.min(currentIndex, nextDeck.length - 1))
    resetCard()
  }

  const feedbackClass =
    feedback === 'correct' ? 'card-correct' : feedback === 'incorrect' ? 'card-incorrect' : ''
  const isFirst = !card || currentIndex === 0
  const isLast = !card || currentIndex >= deck.length - 1
  const positionLabel = card ? `${currentIndex + 1} of ${deck.length}` : '0 cards'

  return (
    <div className="board">
      <header className="board-header">
        <p className="board-kicker">Soccer flashcards</p>
        <h1>{cardSet.title}</h1>
        <p className="board-intro">{cardSet.description}</p>
        <p className="board-count">{deck.length} cards left</p>
        <p className="streaks">
          Current streak: {currentStreak}
          <span>Longest streak: {longestStreak}</span>
        </p>
      </header>
      <main className="study">
        <article
          className={`card${card ? ` card-${card.category.toLowerCase()}` : ''}${feedbackClass ? ` ${feedbackClass}` : ''}`}
        >
          {card ? (
            <FlashCard
              key={card.id}
              question={card.question}
              answer={card.answer}
              category={card.category}
              image={card.image}
              isFlipped={isFlipped}
              onFlip={handleFlip}
            />
          ) : (
            <p className="empty-deck">You've mastered every card.</p>
          )}
          {card && !isFlipped && (
            <GuessForm
              guess={guess}
              onGuessChange={handleGuessChange}
              onSubmit={handleSubmit}
              feedback={feedback}
            />
          )}
          {card && (
            <button type="button" className="master-button" onClick={handleMastered}>
              Mark as mastered
            </button>
          )}
          <CardNav
            onBack={handleBack}
            onNext={handleNext}
            isFirst={isFirst}
            isLast={isLast}
            positionLabel={positionLabel}
          />
        </article>
        <button
          type="button"
          className="shuffle-button"
          onClick={handleShuffle}
          disabled={deck.length < 2}
        >
          Shuffle
        </button>
        <MasteredList cards={mastered} />
      </main>
    </div>
  )
}

export default App
