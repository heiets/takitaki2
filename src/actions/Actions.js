export function nextCard(number, progressNumber) {
  return {
    type: 'NEXT_CARD',
    number: number,
    progressNumber: progressNumber
  }
}
export function prevCard(number) {
  return {
    type: 'PREV_CARD',
    number: number
  }
}
export function shuffle(arr) {
  return {
    type: 'SHUFFLE',
    cards: arr
  }
}
export function addToHistory(arr) {
  return {
    type: 'ADD_TO_HISTORY',
    cards: arr
  }
}