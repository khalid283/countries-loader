import * as clear from "clear";
import * as figlet from "figlet";
import * as chalk from "chalk";
import { program } from "commander";
import { loader } from "./runner/loader";

const ascii = chalk.default.bold.blueBright;
const blue = chalk.default.bold.blue;
const red = chalk.default.bold.red;

clear.default();

console.log(ascii(figlet.textSync("Country Loader", { horizontalLayout: "full" })));
// eslint-disable-next-line no-console
console.log("-------------------------------------");
// eslint-disable-next-line no-console
console.log(blue("Developed by Khalid Ansari (@khalid283)"));
// eslint-disable-next-line no-console
console.log("-------------------------------------");

program
  .command("create:table")
  .version("0.0.1")
  .description("create table in mysql")
  .action(async () => {
    try {
      await loader();
    } catch (e) {
      console.log(red(`Failed to create table: ${e.message}`));
    }
  });

program.parse(process.argv);
