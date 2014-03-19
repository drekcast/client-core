'use strict';

define(['./util/Events'], function(Events) {

    function BaseClient(config) {

        if (config) {
            this._loadConfig(config);
        }

    };

    _.mixin(Events);

    BaseClient.prototype._loadConfig = function(config) {

        this._checkConfig(config);

        this._connector = config.connector;

    }

    BaseClient.prototype._checkConfig = function(config) {

        if (!config.connector) {
            throw Exception('No connector defined');
        }
        return true;

    }

    BaseClient.prototype.connect = function() {

        this._initConnector();
        this._startConnector();

    }

    BaseClient.prototype.disconnect = function() {

    }

    BaseClient.prototype._initConnector = function() {

        // Bind this.connector.onMessage;

    }

    BaseClient.prototype._startConnector = function() {

        this._connector.connect();

    }

    BaseClient.prototype.send = function(action, params) {

        return this._connector.send(action, params);

    }

    BaseClient.prototype.on = function(action, callback, scope) {



    }

    BaseClient.log = function() {
        console.log(arguments);
    }

    return BaseClient;

});