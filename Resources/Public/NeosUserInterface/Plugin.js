(() => {
  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default = readFromConsumerApi("manifest");

  // src/manifest.js
  dist_default("Networkteam.Neos.Next", {}, (globalRegistry) => {
    const saveHooksRegistry = globalRegistry.get("inspector").get("saveHooks");
    console.log("Trying to register custom Registry Hook");
    saveHooksRegistry.set("Networkteam.Neos.Next:Hook.BeforeSave", (oldValue, options) => {
      console.log(`value:`, value);
      console.log("options:", options);
      return oldValue;
    });
  });
})();
