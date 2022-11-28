const errorMessage = (code) => {
  const codes = {
    23505: 'Food already exist',
    22003: 'Number must have maximum 4 digits'
  }

  return codes[code]
}

module.exports = { errorMessage }
