#!/usr/bin/env node

const { execSync } = require("child_process");

if (process.argv.length < 3) {
  console.log("You have to provide a name to your app.");
  console.log("For example :");
  console.log("    npx create-my-boilerplate my-app");
  process.exit(1);
}

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const projectName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/pritampodder12/react-webpack-boilerplate.git ${projectName}`;

const installDepCommand = `cd ${projectName} && npm install`;

console.log(`Cloning the repository with name ${projectName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${projectName}`);

const installedDeps = runCommand(installDepCommand);

if (!installedDeps) return process.exit(-1);

console.log(
  "Congratulations! You are ready. Follow the following commands to start."
);
console.log(`cd ${projectName} && npm run dev`);
