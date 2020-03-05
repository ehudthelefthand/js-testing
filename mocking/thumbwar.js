exports.thumbwar = (player1, player2) => {
  const rand = Math.random();
  if (rand > 0.6) {
    return player1;
  }

  return player2;
};
