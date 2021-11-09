#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fpE = __importStar(require("fp-ts/lib/Either"));
const fpFunc = __importStar(require("fp-ts/function"));
const fpConsole = __importStar(require("fp-ts/Console"));
const r = __importStar(require("ramda"));
const util_1 = require("util");
func: (a) => { return a + " lalala"; };
function test(a1) {
    return a1 + " " + "world";
}
var a = "Hello";
var b = "world";
function producer(a) {
    return fpE.of(a);
}
function connect(a, b) {
    return a + " " + b;
}
var connectCu = r.curry(connect);
var f0 = r.compose(fpConsole.log, connectCu(a));
f0(b).apply();
var z = r.compose(fpE.map(console.log), fpE.map(test), fpE.of);
var f1 = fpFunc.flow(fpE.of, fpE.map(connectCu("Hello")), fpE.map(console.log));
const myAdd3 = r.lift((a, b, c) => a + b + c);
function liftA2(func, a, b) {
    return fpE.ap(b)(fpE.map(func)(a));
}
function liftA4(func, a1, a2, a3, a4) {
    return fpFunc.pipe(a1, fpE.map(func), fpE.ap(a2), fpE.ap(a3), fpE.ap(a4));
    // fpE.ap(a4)(fpE.ap(a3)(fpE.ap(a2)(fpE.map(func)(a1))))
}
console.log((0, util_1.inspect)(fpE.getOrElse(() => "asd")(liftA4(a => b => c => d => a + " " + b + " " + c + " " + d, fpE.of("Hello"), fpE.of("world"), fpE.of("I'm"), fpE.of("unlocking.")))));
