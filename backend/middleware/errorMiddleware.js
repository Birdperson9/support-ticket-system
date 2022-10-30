const errorHandler = (err, _, res, next) => {
  const statusCode = res.statusCode < 400 ? 500 : res.statusCode
  console.log('error middleware')

  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = { errorHandler }
