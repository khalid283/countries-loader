#! /usr/bin/env node
import * as clear from "clear";
import * as figlet from "figlet";
import * as chalk from "chalk";
import { program } from "commander";
import { loader } from "./runner/loader";

require("dotenv").config();
const ascii = chalk.bold.blueBright;
const blue = chalk.bold.blue;
const red = chalk.bold.red;

clear();

console.log(ascii(figlet.textSync("Country Loader", { horizontalLayout: "full" })));
// eslint-disable-next-line no-console
console.log("-------------------------------------");
// eslint-disable-next-line no-console
console.log(blue("Developed by Khalid Ansari (@khalid283)"));
// eslint-disable-next-line no-console
console.log("-------------------------------------");

program
  .command("load")
  .version("0.0.1")
  .description("create table in mysql")
  .action(async () => {
    try {
      await loader();
    } catch (e) {
      console.log(red(`Failed to create table: ${e.message}`));
    }
  });

program.option("-s, --states", "load states");
program.option("-ci, --cities", "load cities");

program.parse(process.argv);
