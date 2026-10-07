function MasteredList({ cards }) {
  return (
    <section className="mastered">
      <h2>Mastered</h2>
      {cards.length === 0 ? (
        <p>No cards mastered yet.</p>
      ) : (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>{card.answer}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default MasteredList
