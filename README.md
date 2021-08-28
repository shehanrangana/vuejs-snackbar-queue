# vuejs-snackbar-queue

A Vuejs snackbar plugin that support multiple snackbars at one time

### Installation
```
npm install vuejs-snackbar-queue
```

### Basic Usage
```
import Vue from 'vue'
import SnackbarQueue from 'vuejs-snackbar-queue' 

Vue.use(SnackbarQueue)
```

### Advanced Usage
Global options can be set when initialize the plugin
```
import Vue from 'vue'
import SnackbarQueue from 'vuejs-snackbar-queue' 

Vue.use(SnackbarQueue, { maxSnacks: 5, mobileBreakpoint: 600 })
```

### Apply
Add the global component to your root component (`App.vue`)
```
<snackbar-queue/>
```
Open snackbar from your `.vue` files:
```
this.$snackbar.show({
    message: "Message",
    color: "green",
    timeout: 5000
});
```

### Global Options
| Name      | Type        | Default | Description |
| ----------- | ----------- | ------- | ----------- |
| maxSnacks   | Number       | 3 | Maximum number of snackbars that can be added to the queue |
| mobileBreakpoint   | Number        | 600 | Snackbar is centered horizontally on screens those width below than mobileBreakpoint | 

### API
| Name      | Type        | Default | Description |
| ----------- | ----------- | ------- | ----------- |
| message   | String       | null | Snackbar message |
| color   | String        | #333333 | Color of the snackbar (optional) | 
| timeout   | Number        | 4000 | Duration of the snackbar in ms. Use `0` to keep open indefinitely | 
| horizontal   | String        | center | Horizontal position. Valid values : `center`, `left`, `right`| 
| vertical   | String        | top | Vertical position. Valid values : `top`, `bottom` | 
| transition   | String        |  | Transition name | 

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/shehanrangana/vuejs-snackbar-queue/blob/master/LICENSE) file for details