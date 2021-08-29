<template>
  <div id="app">
    <img alt="Vue logo" height="80" src="./assets/logo.png" />
    <h1>Vue Snackbar Queue</h1>

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
          @click="openSnackbar({ horizontal: 'left', vertical: 'top' })"
        >
          Top Left
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'center', vertical: 'top' })"
        >
          Top Center
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'right', vertical: 'top' })"
        >
          Top Right
        </button>
      </div>
      <div style="display: flex; justify-content: center">
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'left', vertical: 'bottom' })"
        >
          Bottom Left
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'center', vertical: 'bottom' })"
        >
          Bottom Center
        </button>
        <button
          class="btn-position"
          @click="openSnackbar({ horizontal: 'right', vertical: 'bottom' })"
        >
          Bottom Right
        </button>
      </div>
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
    };
  },

  methods: {
    openSnackbar({ horizontal, vertical }) {
      this.$snackbar.show({
        message: "Put your message here",
        color: this.color,
        timeout: this.timeout * 1000,
        horizontal,
        vertical,
      });
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
