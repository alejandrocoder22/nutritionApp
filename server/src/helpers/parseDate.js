const parseDate = (dateToParse) => {
  const getMonthNumber = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  const dateSplited = dateToParse.split(' ')

  const month = getMonthNumber[dateSplited[1]]
  const year = dateSplited[3]
  const day = dateSplited[2]
  return `${year}-${month}-${day}`
}

module.exports = { parseDate }
