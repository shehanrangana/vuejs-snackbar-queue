<template>
  <div class="vsq-snackbar-wrapper" :style="snackbarWrapperStyles">
    <transition-group :name="transition" @before-leave="beforeLeave">
      <div
        :key="item.id"
        v-for="item in snackbars"
        class="vsq-snackbar"
        :style="[
          { backgroundColor: item.color, borderColor: item.color },
          snackbarMinWidth,
          snackbarSpacing,
        ]"
      >
        <div class="vsq-message">{{ item.message }}</div>
        <button class="vsq-btn-close" @click="hide(item)">close</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import SnackbarPlugin from "./index.js";

export default {
  name: "SnackbarQueue",

  data() {
    return {
      snackbars: [],
      horizontal: "center",
      vertical: "top",
      transition: "vsq-list",
      windowWidth: window.innerWidth,
    };
  },

  computed: {
    snackbarWrapperStyles() {
      let alignItems = "center";
      let justifyContent = "flex-start";

      if (this.vertical === "bottom") justifyContent = "flex-end";
      if (this.horizontal === "left") alignItems = "flex-start";
      if (this.horizontal === "right") alignItems = "flex-end";

      if (this.windowWidth < SnackbarPlugin.default.mobileBreakpoint) {
        return { alignItems: "center", justifyContent };
      } else {
        return { alignItems, justifyContent };
      }
    },

    snackbarSpacing() {
      if (this.vertical === "top") {
        return { marginBottom: "12px" };
      } else {
        return { marginTop: "12px" };
      }
    },

    snackbarMinWidth() {
      if (this.windowWidth < SnackbarPlugin.default.mobileBreakpoint) {
        return { minWidth: "auto" };
      } else {
        return { minWidth: "344px" };
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },

    beforeLeave(el) {
      const { marginLeft, marginTop, width, height } =
        window.getComputedStyle(el);
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`;
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`;
      el.style.width = width;
      el.style.height = height;
    },

    hide(snackbar) {
      const index = this.snackbars.indexOf(snackbar);

      if (index >= 0) {
        this.snackbars.splice(index, 1);
      }
    },

    show(params) {
      const {
        message,
        color,
        timeout = 4000,
        horizontal,
        vertical,
        transition,
      } = params;

      if (horizontal) this.horizontal = horizontal;
      if (vertical) this.vertical = vertical;
      if (transition) this.transition = transition;

      // Set snackbar properties
      let newSnackbar = {
        id: Date.now(),
        message: "",
        color: "#333333",
      };

      if (message) newSnackbar.message = message;
      if (color) newSnackbar.color = color;

      // push/unshift new snackbar to snackbars array
      if (this.snackbars.length === SnackbarPlugin.default.maxSnacks) {
        if (this.vertical === "top") {
          this.snackbars.shift();
        } else {
          this.snackbars.pop();
        }
      }

      if (this.vertical === "top") {
        this.snackbars.push(newSnackbar);
      } else {
        this.snackbars.unshift(newSnackbar);
      }

      // control timeout
      if (timeout > 0) {
        setTimeout(() => {
          this.hide(newSnackbar);
        }, timeout);
      }
    },
  },

  beforeMount() {
    // here we need to listen for emited events
    // we declared those events inside our plugin
    SnackbarPlugin.EventBus.$on("show", (params) => {
      this.show(params);
    });
  },
};
</script>

<style scoped>
.vsq-snackbar-wrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  overflow: hidden;
  z-index: 1400;
  pointer-events: none;
  color: hsla(0, 0%, 100%, 0.9);
}
.vsq-snackbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  padding: 14px 16px;
  max-width: 672px;
  border-radius: 4px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%),
    0 1px 18px 0 rgb(0 0 0 / 12%);
  pointer-events: initial;
}
.vsq-message {
  flex-grow: 1;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
  line-height: 1.25rem;
  margin-right: auto;
  text-align: initial;
}
.vsq-btn-close {
  font-family: inherit;
  text-transform: uppercase;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  height: fit-content;
  margin: auto auto auto 20px;
  padding: 4px;
}
/* transitions */
.vsq-list-enter-active,
.vsq-list-move {
  transition: 250ms ease-out;
  transition-property: opacity, transform;
}
.vsq-list-enter {
  opacity: 0;
  transform: scale(0.8);
}
.vsq-list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.vsq-list-leave-active {
  position: absolute;
  transition: 200ms ease-in;
}
.vsq-list-leave-to {
  opacity: 0;
}
</style>