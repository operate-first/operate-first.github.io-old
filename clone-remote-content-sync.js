// Synchronous shell exec alternative to clone-remote-content.js

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const execSync = require("child_process").execSync;

const contentSources = yaml.safeLoad(fs.readFileSync("./content-sources.yaml", "utf-8"));

function cloneRemoteContent() {
  contentSources.forEach(({ gitSrc, gitDest }) => {
    if (gitSrc) {
      cloneGitRepo(gitSrc, gitDest);
    }
  });
}

function cloneGitRepo(gitSrc, gitDest) {
  const destination = getGitDest(gitSrc, gitDest);

  if (fs.existsSync(destination)) {
    console.warn(`Git clone destination ${destination} already exists.  Skipping clone `);
  } else {
    execSync(`git clone ${gitSrc} ${destination}`);
  }
}

function getGitDest(repo, destination) {
  if (destination && destination[0] === "/") {
    return destination;
  } else if (destination) {
    return path.join(__dirname, destination);
  }

  const regexp = /\/(?<repoName>[^\/]*)\.git/g;
  let match = regexp.exec(repo);
  return path.join(__dirname, match.groups.repoName);
}

cloneRemoteContent();
