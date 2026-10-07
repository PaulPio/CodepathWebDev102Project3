function GuessForm({ guess, onGuessChange, onSubmit, feedback }) {
  return (
    <form className="guess-form" onSubmit={onSubmit}>
      <label htmlFor="guess">Your guess</label>
      <div className="guess-row">
        <input
          id="guess"
          name="guess"
          type="text"
          value={guess}
          onChange={(event) => onGuessChange(event.target.value)}
          autoComplete="off"
        />
        <button type="submit">Submit</button>
      </div>
      {feedback === "correct" && <p className="feedback feedback-correct">Correct</p>}
      {feedback === "incorrect" && (
        <p className="feedback feedback-incorrect">Not quite</p>
      )}
    </form>
  )
}

export default GuessForm
