const RandomSixDigits = () => {
  return Math.floor(100000 + Math.random() * 999999);
};

module.exports = RandomSixDigits;
