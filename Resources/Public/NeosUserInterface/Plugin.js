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
    const serverFeedbackHandlers = globalRegistry.get("serverFeedbackHandlers");
    saveHooksRegistry.set("Networkteam.Neos.Next:Hook.BeforeSave", (oldValue, options) => {
      console.log(`value:`, oldValue);
      console.log("options:", options);
      return oldValue;
    });
    serverFeedbackHandlers.set("Neos.Neos.Ui:ReloadContentOutOfBand/Main", (feedback, store) => {
      console.log("reloadContentOufOfBand");
      const guestFrame = document.getElementsByName("neos-content-main")[0];
      console.log(guestFrame);
      const event = new Event("Networkteam.Neos.Next:ReloadOutOfBand");
      console.log(event);
      guestFrame.contentWindow.dispatchEvent(event);
    });
  });
})();
