'use strict'

var mn = require('moment')

module.exports = function(app) {
    app.get('/:query', (request, response) => {
        var query = request.params.query
        var unix = null
        var natural = null
        var date = mn(query, "MMMM D, YYYY")
        
        if (+query >= 0) {
            unix = +query;
            natural = mn.unix(unix).format("MMMM D, YYYY")
        } else if(isNaN(+query) && date.isValid()) {
            unix = date.format("X");
            natural = mn.unix(unix).format("MMMM D, YYYY")
        }
        
        var obj = {"unix": unix, "natural": natural}
        response.send(JSON.stringify(obj))
    })
}