define(["lodash"], function() {

    function BaseConnector() {

    }

    BaseConnector.prototype.connect = function() {
        console.error('connector.connect() not implemented');
    }

    BaseConnector.prototype.disconnect = function() {
        console.error('connector.disconnect() not implemented');
    }

    BaseConnector.prototype.send = function(action, params) {
        console.error('connector.send() not implemented');
    }

    BaseConnector.prototype.onMessage = function(callback) {
        console.error('connector.onMessage() not implemented');
    }

    return BaseConnector;

})