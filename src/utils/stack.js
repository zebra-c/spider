export default function stack(stack) {
  if (!stack) return "";
  return stack
    .split("\n")
    .slice(1)
    .map((item) => item.replace(/^\s+at\s+/g, ""))
    .join("^");
}

export function getStackInfo(data) {
  let filename;
  let lineno = 0;
  let colno = 0;
  if (!data) {
    return {
      filename,
      position: `${lineno}:${colno}`,
    };
  }
  let matchResult = data.match(/at\s+(.+):(\d+):(\d+)/);
  const [, b, c, d] = matchResult;
  filename = b;
  lineno = c;
  colno = d;
  return {
    filename,
    position: `${lineno}:${colno}`,
  };
}
