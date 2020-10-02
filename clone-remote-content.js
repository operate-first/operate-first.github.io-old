// Clones remote content if there's a gitSrc field.

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const nodegit = require("nodegit");

const cloneOptions = {
  fetchOpts: {
    callbacks: {
      certificateCheck: function () {
        return 0;
      },
    },
  },
};

const contentSources = yaml.safeLoad(fs.readFileSync("./content-sources.yaml", "utf-8"));

async function cloneRemoteContent() {
  for (let i = 0; i < contentSources.length; i++) {
    const { gitSrc, gitDest } = contentSources[i];
    if (gitSrc) {
      try {
        await cloneGitRepo(gitSrc, gitDest);
      } catch (e) {
        console.error(`Failed to clone ${gitSrc} to ${gitDest}`);
      }
    }
  }
}

function cloneGitRepo(gitSrc, gitDest) {
  const destination = getGitDest(gitSrc, gitDest);

  return new Promise((resolve, reject) => {
    fs.access(destination, fs.constants.F_OK, async function (err) {
      if (err) {
        if (err.code === "ENOENT") {
          try {
            let cloneResult = await nodegit.Clone(gitSrc, destination, cloneOptions);
            resolve(cloneResult);
          } catch (e) {
            reject(e);
          }
        } else {
          console.error(err);
          reject(err);
        }
      } else {
        console.info(`Git clone destination ${destination} already exists.  Skipping clone `);
        resolve(null);
      }
    });
  });
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

(async function main() {
  try {
    await cloneRemoteContent();
    console.log("Finished cloning remote content");
  } catch (e) {
    console.error("Failed to clone remote content");
    console.error(e);
  }
})();
