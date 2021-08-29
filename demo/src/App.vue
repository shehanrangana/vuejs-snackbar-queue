<template>
  <div id="app">
    <img alt="Vue logo" height="80" src="./assets/logo.png" />
    <h1>Vuejs Snackbar Queue</h1>

    <div>
      <!-- Color -->
      <div style="margin: 40px auto 60px">
        <p>Color - {{ color }}</p>
        <div class="radio-wrapper">
          <label class="radio-container">
            <input
              type="radio"
              id="color1"
              name="radio"
              value="#1976D2"
              v-model="color"
            />
            <span class="checkmark" style="background-color: #1976d2"></span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              id="color2"
              name="radio"
              value="#FF5252"
              v-model="color"
            />
            <span class="checkmark" style="background-color: #ff5252"></span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              id="color3"
              name="radio"
              value="#2196F3"
              v-model="color"
            />
            <span class="checkmark" style="background-color: #2196f3"></span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              id="color4"
              name="radio"
              value="#4CAF50"
              v-model="color"
            />
            <span class="checkmark" style="background-color: #4caf50"></span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              id="color5"
              name="radio"
              value="#FFC107"
              v-model="color"
            />
            <span class="checkmark" style="background-color: #ffc107"></span>
          </label>
        </div>
      </div>

      <!-- Timeout -->
      <div style="margin: 40px auto 60px">
        <label for="timeout" style="display: block; padding-bottom: 12px"
          >Timeout - {{ timeout }} seconds</label
        >
        <input
          type="range"
          id="timeout"
          name="timeout"
          min="0"
          max="30"
          style="width: 200px"
          v-model="timeout"
        />
      </div>

      <!-- Position -->
      <div style="display: flex; justify-content: center">
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'left', vertical: 'top' }, 11)"
        >
          Top Left
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'center', vertical: 'top' }, 12)"
        >
          Top Center
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'right', vertical: 'top' }, 13)"
        >
          Top Right
        </button>
      </div>
      <div style="display: flex; justify-content: center">
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'left', vertical: 'bottom' }, 21)"
        >
          Bottom Left
        </button>
        <button
          class="btn-position"
          @click="
            openSnackbar({ horizontal: 'center', vertical: 'bottom' }, 22)
          "
        >
          Bottom Center
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'right', vertical: 'bottom' }, 23)"
        >
          Bottom Right
        </button>
      </div>
    </div>

    <!-- Github star -->
    <div style="position: absolute; top: 20px; left: 20px;">
      <iframe
        src="https://ghbtns.com/github-btn.html?user=shehanrangana&repo=vuejs-snackbar-queue&type=star&count=true"
        frameborder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
    </div>

    <snackbar-queue />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      color: "#1976D2",
      timeout: 3,
      lastPosition: 0,
    };
  },

  methods: {
    openSnackbar({ horizontal, vertical }, position) {
      if (position !== this.lastPosition) {
        if (window.innerWidth >= 600) {
          this.$snackbar.hideAll();
        } else {
          const positionFirstChar = position.toString().charAt(0);
          const lastPositionFirstChar = this.lastPosition.toString().charAt(0);

          if (positionFirstChar !== lastPositionFirstChar) {
            this.$snackbar.hideAll();
          }
        }
      }

      setTimeout(() => {
        this.$snackbar.show({
          message: "Your message here",
          color: this.color,
          timeout: this.timeout * 1000,
          horizontal,
          vertical,
        });
      }, 50);

      this.lastPosition = position;
    },
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  text-align: center;
  max-width: 900px;
}
.btn-position {
  width: 120px;
  margin: 0px 16px 16px 16px;
  color: white;
  background-color: #41b883;
  border: none;
  border-radius: 4px;
  min-height: 32px;
  cursor: pointer;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.radio-wrapper {
  display: flex;
  justify-content: center;
}
.radio-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin: 0px 12px 12px 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.radio-container:hover input ~ .checkmark {
  background-color: #ccc;
}
.radio-container input:checked ~ .checkmark {
  border: 2px solid #35495e;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.radio-container input:checked ~ .checkmark:after {
  display: block;
}
</style>
