export function FETCH_CREATED_GAME() {
  return `query {
        game(orderBy:id, orderBirection:desc, first:1 ){
            id
            maxPlayers
            entryFee
            winner
            players
        }
    }`;
}
