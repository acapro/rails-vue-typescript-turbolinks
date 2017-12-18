import TurbolinksAdapter from 'vue-turbolinks';
import Vue from 'vue/dist/vue.esm'
import App from 'components/app.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', function() {
  var element = document.querySelector('#hello')
  if (element != undefined) {
    const app = new Vue({
      el: element,
      template: '<App/>',
      components: { App }
    })
  }
});
