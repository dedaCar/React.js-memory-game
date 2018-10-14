/*
  Action types
*/
export const actionTypes = {
  CREATE_GAME: 'CREATE_GAME',
  FLIP_CARD: 'FLIP_CARD'
}

/*
  Actions
*/
export function createGame() {
  return {
    type: actionTypes.CREATE_GAME
  }
}

export function flipCard(id) {
  return {
    type: actionTypes.FLIP_CARD,
    id: id
  }
}