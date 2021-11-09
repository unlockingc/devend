#!/usr/bin/env node

import R, { compose, curry, liftN, zip } from "ramda"

import {findUp} from "find-up"

var a = "Hello";
var b = "world"

function concrat(a, b) {
	return a + " " + b;
}

var concratCu = R.curry(concrat);
var f0 = compose(console.log, concratCu(a))

f0(b)

console.log(await findUp("package.json"))