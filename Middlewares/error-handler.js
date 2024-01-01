export function notFoundError(req, res, next) {
    const err = new Error("Page not found !")
    err.status = 404
    next(err)
}

export function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send(err.message)
}