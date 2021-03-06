({
    "name": "drekcast-client-core",
    "out": "drekcast-client-built.js",

    /*baseUrl: "/drekcast/client-core",*/
    "paths": {
        //tries to load jQuery from Google's CDN first and falls back
        //to load locally
        "jquery": ["http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
            "bower_components/jquery/jquery"],
        "lodash": "../bower_components/lodash/dist/lodash",
        "primus": "http://localhost:3000/primus/primus"

    },
    "shim": {
        "lodash": {
            "exports": "_"
        },

        "BaseClient": {
            "deps": ["lodash"]
        }
    },
    //how long the it tries to load a script before giving up, the default is 7
    "waitSeconds": 10
})