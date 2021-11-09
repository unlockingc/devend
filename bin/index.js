#!/usr/bin/env node
"use strict";
/**
 * 1. load configs
 * 	a. load config
 * 	b. load info
 * 2. generate command
 * 	a. eg: default env-path
 * 3. warp action into FP
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World!!!");
const commander_1 = require("commander");
require("zx/globals");
const util_1 = require("util");
const program = new commander_1.Command();
program.version("0.0.1");
program
    .option("-mep, --myEnvPath <myEnvPath>", "the env path, default ./my_env/", "./my_env/")
    .option("-d --debug", "if verbose", false);
const deploy_1 = require("./main/deploy");
program.command("deploy").action((options, command) => {
    (0, deploy_1.Deploy)(Object.assign(Object.assign({}, options), program.opts()));
});
program.command("undeploy");
program
    .command("view")
    .option("-p --package <packages...>", "specify the root package of the dependency graph you want to view")
    .action((options, command) => {
    console.log("options: " + (0, util_1.inspect)(Object.assign(Object.assign({}, program.opts()), options)));
    console.log("command: " + (0, util_1.inspect)(command.name()));
});
program.command("check");
program.parse(process.argv);
// void (async function () {
//     await $`ls -la`;
// })();
