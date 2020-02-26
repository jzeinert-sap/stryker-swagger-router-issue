'use strict'

module.exports = {
    controllerOperation: function (req, res) {
        return res.status(200).json({
            key: 'value'
        });
    }
}
