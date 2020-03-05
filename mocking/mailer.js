module.exports = {
  send: mail => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`...send email to ${mail}`);
        resolve();
      }, 5000);
    });
  }
};
