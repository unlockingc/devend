#!/usr/bin/env node
/**
 * 1. load configs
 * 	a. load config
 * 	b. load info
 * 2. generate command
 * 	a. eg: default env-path
 * 3. warp action into FP
 *
 */

console.log("Hello World!!!");

import { Command } from "commander";
import "zx/globals";
import YAML from "yaml";
import { inspect } from "util";
import R from "ramda";
import {Alt} from "fp-ts/Alt";

const program = new Command();


program.version("0.0.1");

program
    .option("-mep, --myEnvPath <myEnvPath>", "the env path, default ./my_env/", "./my_env/")
    .option("-d --debug", "if verbose", false);

import { Deploy } from "./main/deploy";

program.command("deploy").action((options, command) => {
    Deploy({ ...options, ...program.opts()});
});

program.command("undeploy");

program
    .command("view")
    .option(
        "-p --package <packages...>",
        "specify the root package of the dependency graph you want to view"
    )
    .action((options, command) => {
        console.log("options: " + inspect({...program.opts(), ...options}));
        console.log("command: " + inspect(command.name()));
    });

program.command("check");

program.parse(process.argv);

// void (async function () {
//     await $`ls -la`;
// })();
