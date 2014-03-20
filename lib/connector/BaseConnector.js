define(["lodash"], function() {

    function BaseConnector() {
        this.callback = undefined;
    }

    BaseConnector.prototype.connect = function(type, token) {
        console.error('connector.connect() not implemented');
    }

    BaseConnector.prototype.disconnect = function() {
        console.error('connector.disconnect() not implemented');
    }

    BaseConnector.prototype.send = function(action, params) {
        console.error('connector.send() not implemented');
    }

    BaseConnector.prototype.setCallback = function(callback) {
        this.callback = callback;
    }

    BaseConnector.prototype.join = function(channel) {
        console.error('connector.join() not implemented');
    }

    BaseConnector.prototype.leave = function(channel) {
        console.error('connector.leave() not implemented');
    }

    return BaseConnector;

})