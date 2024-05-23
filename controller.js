const { players, games } = require("./data");

const [Raji, Kamado, Sailor, Orca, Nishu, Lucifer, Manoj, SV] = players;

players.forEach((player) => {
  const playerGames = games.filter((game) => {
    return (
      player.name === game.blackSide.name || player.name === game.whiteSide.name
    );
  });
  player.gamesPlayed = playerGames.length;

  playerGames.forEach((playerGame) => {
    // adding 'won', 'draw', and 'losses' fields
    if (!playerGame.draw && playerGame.won.name === player.name) {
      player.wins = (player.wins || 0) + 1;
      player.points = (player.points || 0) + 1;
    } else if (playerGame.draw) {
      player.draws = (player.draws || 0) + 1;
      player.points = (player.points || 0) + 0.5;
    } else if (!playerGame.draw && playerGame.won.name !== player.name) {
      player.losses = (player.losses || 0) + 1;
    }
  });
});
