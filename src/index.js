import SnackbarQueue from "./SnackbarQueue.vue";

const defaultOptions = { maxSnacks: 3, mobileBreakpoint: 600 };

const SnackbarPlugin = {
  // this method will run after Vue.use(<plugin-here>) is executed
  install(Vue, options = defaultOptions) {
    const formattedOptions = {
      maxSnacks: options.maxSnacks
        ? options.maxSnacks
        : defaultOptions.maxSnacks,
      mobileBreakpoint: options.mobileBreakpoint
        ? options.mobileBreakpoint
        : defaultOptions.mobileBreakpoint,
    };

    this.default = formattedOptions;

    // this is just another Vue instance that will be listening for and emiting events from our main instance
    this.EventBus = new Vue();

    // making our snackbar component global
    Vue.component("snackbar-queue", SnackbarQueue);

    // exposing global $snackbar object with method show()
    // method show() takes object params as argument
    Vue.prototype.$snackbar = {
      show(params) {
        SnackbarPlugin.EventBus.$emit("show", params);
      },
    };
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(SnackbarPlugin);
}

export default SnackbarPlugin;
