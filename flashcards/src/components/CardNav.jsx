function CardNav({ onBack, onNext, isFirst, isLast, positionLabel }) {
  return (
    <div className="card-nav">
      <button type="button" className="nav-button" onClick={onBack} disabled={isFirst}>
        Back
      </button>
      <p className="card-position">{positionLabel}</p>
      <button type="button" className="nav-button" onClick={onNext} disabled={isLast}>
        Next
      </button>
    </div>
  )
}

export default CardNav
