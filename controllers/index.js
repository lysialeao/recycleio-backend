const companiesController = require('./companiesController')
const peopleController = require('./peopleController')
const gatherController = require('./gatherController')
const sedimentController = require('./sedimentController')

controllers = {
    companies: companiesController,
    people: peopleController,
    gather: gatherController,
    sediment: sedimentController
}

module.exports = controllers