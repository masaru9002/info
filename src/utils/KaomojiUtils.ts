export const catKaomojis = [
  "(=^･ω･^=)",
  "(=^･ｪ･^=)",
  "(=①ω①=)",
  "(=ﾟ･ﾟ=)",
  "(=｀ω´=)",
  "(=^･^=)",
  "ฅ^•ﻌ•^ฅ",
  "(ฅ´ω`ฅ)",
  '(^･o･^)ﾉ"',
  "(=^-ω-^=)",
];

export const getRandomCatKaomoji = (): string => {
  const randomIndex = Math.floor(Math.random() * catKaomojis.length);
  return catKaomojis[randomIndex];
};
