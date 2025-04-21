const fs = require('fs');

const pluginRegistry = JSON.parse(fs.readFileSync('plugins.json'));

pluginRegistry.forEach(plugin => {
  try {
    const pluginModule = require(plugin.path);
    console.log(`${plugin.name}: ${pluginModule.run()}`);
  } catch (err) {
    console.error(`Failed to load ${plugin.name}:`, err.message);
  }
});
