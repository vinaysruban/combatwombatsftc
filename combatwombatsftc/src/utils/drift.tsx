export function normalise(
  n: number,
  max: number,
  direction: number,
  magnitude: number
): number {
  const result = (direction * (n - max / 2)) / (max / magnitude);
  const normalised = result / 10 + 1;
  return normalised;
}

export const checkWindow = (
  req: number,
  cursorPosition: number,
  windowWidth: number,
  direction: number,
  magnitude: number,
  unit: string = "%"
): string => {
  if (window.innerWidth >= 1024) {
    return `${
      req * normalise(cursorPosition, windowWidth, direction, magnitude)
    }${unit}`;
  }
  return "";
};
