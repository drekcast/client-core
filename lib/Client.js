'use strict';

define(['./util/Events'], function(Events) {

    function Client(config) {

        this._currentChannel = undefined;
        this._connector = undefined;

        if (config) {
            this._loadConfig(config);
        }

    };

    _.extend(Client.prototype, Events);

    Client.prototype._loadConfig = function(config) {

        this._checkConfig(config);

        this._connector = config.connector;

        if (config.channel) {
            this._currentChannel = config.channel; // This triggers the reconnect
        }


    }

    Client.prototype._checkConfig = function(config) {

        if (!config.connector) {
            throw Exception('No connector defined');
        }
        return true;

    }

    Client.prototype.connect = function() {

        this._initConnector();
        this._startConnector();

    }

    Client.prototype.disconnect = function() {

    }

    Client.prototype._initConnector = function() {

        var self = this;
        this._connector.setCallback(function(message, data) {
            self.trigger(message, data);
        });

    }

    Client.prototype._startConnector = function() {

        this._connector.connect();

        if (this._currentChannel) {
            this._connector.join(this._currentChannel);
        }

    }

    Client.prototype.send = function(action, params) {

        return this._connector.send(action, params);

    }

    Client.prototype.setChannel = function(channelName) {

        if (this._currentChannel) {
            this._connector.leave(this._currentChannel);
        }

        this._connector.join(channelName);

        this._currentChannel = channelName;
    }

    Client.prototype.setScreen = function(screen, options) {

        this._ensureChannelJoined();

        options = options || {};

        this._connector.send('setScreen', { screen: screen, options: options});

    }

    Client.prototype.toggleOverlay = function(overlay, visible, options) {

        this._ensureChannelJoined();

        options = options || {};

        this._connector.send('toggleOverlay', { overlay: overlay, visible: visible, options: options });

    }

    Client.prototype._ensureConnected = function() {

    }

    Client.prototype._ensureChannelJoined = function() {

        this._ensureConnected();

    }

    Client.log = function() {
        console.log(arguments);
    }

    return Client;

});