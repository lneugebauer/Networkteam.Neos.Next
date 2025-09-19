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

  // Resources/Private/NeosUserInterface/manifest.js
  dist_default("Networkteam.Neos.Next", {}, (globalRegistry) => {
    const serverFeedbackHandlers = globalRegistry.get("serverFeedbackHandlers");
    serverFeedbackHandlers.set("Neos.Neos.Ui:ReloadContentOutOfBand/Main", (feedback, store) => {
      const guestFrame = document.getElementsByName("neos-content-main")[0];
      const reloadOutOfBandEvent = new Event("Networkteam.Neos.Next:ReloadOutOfBand");
      guestFrame.contentWindow.dispatchEvent(reloadOutOfBandEvent);
    });
  });
})();
