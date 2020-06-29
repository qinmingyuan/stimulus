import "@stimulus/polyfills";
import { Application } from "@stimulus/core";
import { definitionsFromContext } from "@stimulus/webpack-helpers";
import Turbolinks from "turbolinks";
Turbolinks.start();
var application = Application.start();
var context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
