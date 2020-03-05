exports.createUser = async (user, mailer) => {
  // do create user
  // ...
  await mailer.send(user.email);
};
