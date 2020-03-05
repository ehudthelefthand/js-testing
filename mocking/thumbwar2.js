exports.thumbwar = ({ player1, player2, randomizer }) => {
  const rand = randomizer.next();
  if (rand > 0.7) {
    return player1;
  }

  return player2;
};
