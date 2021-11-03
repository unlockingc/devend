#!/usr/bin/env node

console.log("Hello World!!!");

import { Command } from "commander";

const program = new Command();

program
    .option("-d, --debug", "output extra debugging info")
    .option("-s, --small", "small pizza size")
    .option("-p, --pizza-type <type>", "flavour of pizza");

program.parse(process.argv);

const options = program.opts();

if (options.debug) console.log(options);
console.log("pizza details:");
if (options.small) console.log("- small pizza size");
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

import "zx/globals";

void (async function () {
    await $`ls -la`;
})();
