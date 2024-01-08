function logData(request, response, next) {
    console.log('Log mijn data!', request.query);
    next();
};

module.exports = {
    logData
};