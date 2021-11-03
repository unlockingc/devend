#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!!!");
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .option("-d, --debug", "output extra debugging info")
    .option("-s, --small", "small pizza size")
    .option("-p, --pizza-type <type>", "flavour of pizza");
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
console.log("pizza details:");
if (options.small)
    console.log("- small pizza size");
if (options.pizzaType)
    console.log("- " + options.pizzaType);
