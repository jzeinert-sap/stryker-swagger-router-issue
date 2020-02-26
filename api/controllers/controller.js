'use strict'

function controllerOperation(req, res) {
    return res.status(200).json({
        key: 'value'
    });
}

module.exports = {
    controllerOperation: controllerOperation
}
