define(["lodash", "./BaseConnector", 'primus'], function(_, BaseConnector, Primus) {


    var PrimusConnector = function(url, options) {

        BaseConnector.call(this);

        this.url = url;
        this.options = options;

    };

    PrimusConnector.prototype = new BaseConnector;

    PrimusConnector.prototype.connect = function() {

        this.primus = new Primus(this.url, this.options);

    }

    return PrimusConnector;

});