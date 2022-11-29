const errorMessage = (code) => {
  const codes = {
    23505: 'Food already exist',
    22003: 'Number must have maximum 4 digits',
    '42P01': 'No existe la relación'
  }

  return codes[code]
}

module.exports = { errorMessage }
