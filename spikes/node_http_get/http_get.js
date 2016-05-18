/**
 * Created by Shadow on 18.05.2016.
 */
"use strict";

var http = require("http");

http.get("http://www.google.com.ua/index.html", function(res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});