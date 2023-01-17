export const sumAllMacroData = (data, macro) => {
  const arrayOfMacroData = []
  data.map(singleFood => arrayOfMacroData.push(Number(singleFood[macro])))

  let currentValue = 0

  for (let i = 0; i - arrayOfMacroData.length; i++) {
    currentValue += arrayOfMacroData[i]
  }

  return currentValue
}
