export function randomMsgs(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export const Scroll = (container) => {
  const { offsetHeight, scrollHeight, scrollTop } = container.current;
  if (scrollHeight <= scrollTop + offsetHeight + 100) {
    container.current?.scrollTo(0, scrollHeight);
  }
};
