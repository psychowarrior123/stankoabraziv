export const pathToCurrent = (arr: string[], value: string) => {
  const valueIndex = arr.indexOf(value)
  const pathArr = arr.slice(0, valueIndex + 1)
  const path = pathArr.reduce((acc, curr) => {
    acc = acc + curr
    if (curr !== value) {
      acc = acc + '/'
    }
    return acc
  }, '/')

  return path
}
