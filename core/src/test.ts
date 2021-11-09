#!/usr/bin/env node
import {$} from "zx"
import * as Opt from "fp-ts/lib/Option"
import * as fpE from "fp-ts/lib/Either"
import * as fpFunc from "fp-ts/function"
import * as fpConsole from "fp-ts/Console"
import * as fpIO from "fp-ts/IO"
import path from "node:path"
// import {findUp} from 'find-up';

import * as lod from "lodash/fp"
import * as r from "ramda"
import { Apply } from "fp-ts/lib/ReadonlyNonEmptyArray"
import { inspect } from "util"
import { resolve } from "path/posix"

func : (a : string) => {return a + " lalala"}

function test(a1:string) : string {
	return a1 + " " + "world"
}


var a = "Hello";
var b = "world"

function producer(a:string) {
	return fpE.of(a)
}

function connect(a, b) {
	return a + " " + b;
}


//curry and compose
var connectCu = r.curry(connect);

//fpConsole
var f0 = r.compose(fpConsole.log, connectCu(a))

f0(b).apply()

//compose with Functor
var z = r.compose(fpE.map(console.log), fpE.map(test), fpE.of)
var f1 = fpFunc.flow(fpE.of, fpE.map(connectCu("Hello")), fpE.map(console.log))


//lift
function liftA2(func: (a:string) => (b:string) => string, a:fpE.Either<string,string>, b:fpE.Either<string,string>) {
	return fpE.ap(b)(fpE.map(func)(a))
}

function liftA4(func:(a1:string)=>(a2:string)=>(a3:string)=>(a4:string)=>string,a1,a2,a3,a4) {
	return fpFunc.pipe(a1, fpE.map(func), fpE.ap(a2), fpE.ap(a3), fpE.ap(a4))
	// fpE.ap(a4)(fpE.ap(a3)(fpE.ap(a2)(fpE.map(func)(a1))))
}

console.log(inspect(fpE.getOrElse(() => "asd")(liftA4(a=>b=>c=>d=>a +" "+ b + " " + c + " " + d, fpE.of("Hello"), fpE.of("world"), fpE.of("I'm"), fpE.of("unlocking.")))))

//IO
void async function () {
	await $`pwd`
}()

// async function findUpWrapper(path:string) : Promise<string> {
// 	var a = await findUp("package.json")
// 	fpConsole.log(a)()
// 	return new Promise(resolve => {
// 		setTimeout(()=>resolve(a), 4000)
// 	})
// } 


// fpConsole.log(findUp("asd"))()

//global