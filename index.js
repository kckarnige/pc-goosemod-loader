const { Plugin } = require('powercord/entities');

module.exports = class Remount extends Plugin {
  async startPlugin() {
    console.log("Loaded!")
    const response = await fetch(
      "https://raw.githubusercontent.com/GooseMod/GooseMod/dist-prod/index.js"
    );
    const text = await response.text();
    eval(text);
  }

  pluginWillUnload() {
    console.log("Unloaded!");
    goosemod.uninject();
    location.reload();
  }
};
