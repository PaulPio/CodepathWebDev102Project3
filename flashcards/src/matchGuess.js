function normalize(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
}

export function isCorrectGuess(guess, card) {
  const normalizedGuess = normalize(guess)
  if (!normalizedGuess) {
    return false
  }

  const targets = [card.answer, ...card.aliases].map(normalize)
  if (targets.includes(normalizedGuess)) {
    return true
  }

  return (
    normalizedGuess.length >= 3 &&
    targets.some((target) => target.includes(normalizedGuess))
  )
}
