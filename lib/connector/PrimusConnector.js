define(["lodash", "./BaseConnector", 'primus'], function(_, BaseConnector, Primus) {


    var PrimusConnector = function(url, options) {

        BaseConnector.call(this);

        this.url = url;
        this.options = options;

    };

    PrimusConnector.prototype = new BaseConnector;

    PrimusConnector.prototype.connect = function(type, token) {

        var url = this.url + '?type='+type+'&token='+token;
        this.primus = new Primus(url, this.options);

        var self = this;
        this.primus.on('data', function(message) {
            if (self.callback) {
                self.callback.call(this, message[0], message[1] || {});
            }
        })

    }

    PrimusConnector.prototype.send = function(action, params) {

        var data = _.assign({ 'action': action}, params);
        this.primus.write(data);

    }

    PrimusConnector.prototype.join = function(channel) {
        this.primus.write({ action: 'join', channel: channel });
    }

    PrimusConnector.prototype.leave = function(channel) {
        this.primus.write({ action: 'leave', channel: channel });
    }


    return PrimusConnector;

});