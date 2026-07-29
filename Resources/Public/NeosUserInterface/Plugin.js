(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();
  var dist_default = readFromConsumerApi("manifest");

  // Resources/Private/NeosUserInterface/manifest.js
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
  dist_default("Networkteam.Neos.Next", {}, (globalRegistry) => {
    const serverFeedbackHandlers = globalRegistry.get("serverFeedbackHandlers");
    serverFeedbackHandlers.set("Neos.Neos.Ui:ReloadContentOutOfBand/Main", (feedback, { store, globalRegistry: globalRegistry2 }) => {
      const guestFrame = document.getElementsByName("neos-content-main")[0];
      const reloadOutOfBandEvent = new Event("Networkteam.Neos.Next:ReloadOutOfBand");
      guestFrame.contentWindow.dispatchEvent(reloadOutOfBandEvent);
    });
    serverFeedbackHandlers.set("Neos.Neos.Ui:RenderContentOutOfBand/Main", (feedback, { store, globalRegistry: globalRegistry2 }) => {
      const guestFrame = document.getElementsByName("neos-content-main")[0];
      const renderOutOfBandEvent = new Event("Networkteam.Neos.Next:RenderContentOutOfBand");
      guestFrame.contentWindow.dispatchEvent(renderOutOfBandEvent);
    });
    serverFeedbackHandlers.set("Neos.Neos.Ui:UpdateNodeInfo/Main", (feedbackPayload, { store }) => {
      const state = store.getState();
      console.log("UpdateNodeInfo received:", {
        isSaving: state.ui.remote.isSaving,
        payload: feedbackPayload.byContextPath
      });
      store.dispatch(import_neos_ui_redux_store.actions.CR.Nodes.merge(feedbackPayload.byContextPath));
    });
  });
})();
