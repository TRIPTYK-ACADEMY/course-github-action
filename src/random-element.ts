export function randomElement<T> (array: T[]) : T {
  return array[array.length * Math.random() | 0]
}
