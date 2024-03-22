
const routeNotFound = (req, res, next) => {
    res.status(404).send({
        message: `Requested Route Not Found - ${req.originalUrl}`
    })
    next();
}


export default routeNotFound;