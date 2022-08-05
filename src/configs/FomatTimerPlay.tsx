export const fomatTimer = (number: number) => {
  const minute = Math.floor(number / 60);
  const second = Math.floor(number - minute * 60);
  return `${minute < 10 ? `0${minute}` : minute}:${
    second < 10 ? `0${second}` : second
  }`;
};
