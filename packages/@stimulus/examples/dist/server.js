"use strict";
var fs = require("fs");
var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackMiddleware = require("webpack-dev-middleware");
var webpackConfig = require("./webpack.config");
var app = express();
var port = 9000;
var publicPath = path.join(__dirname, "public");
var viewPath = path.join(__dirname, "views");
var viewEngine = "ejs";
app.set("views", viewPath);
app.set("view engine", viewEngine);
app.use(express.static(publicPath));
app.use(webpackMiddleware(webpack(webpackConfig)));
var pages = [
    { path: "/hello", title: "Hello" },
    { path: "/clipboard", title: "Clipboard" },
    { path: "/slideshow", title: "Slideshow" },
    { path: "/content-loader", title: "Content Loader" },
];
app.get("/", function (req, res) {
    res.redirect(pages[0].path);
});
app.get("/uptime", function (req, res, next) {
    res.send(process.uptime().toString());
});
app.get("/:page", function (req, res, next) {
    var currentPage = pages.find(function (page) { return page.path == req.path; });
    res.render(req.params.page, { pages: pages, currentPage: currentPage });
});
app.listen(port, function () {
    console.log("Listening on http://localhost:" + port + "/");
});
