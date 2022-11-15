import Modal from './Modal'

const Plugin = {
  install: function (Vue, options = {}) {
    Vue.component('modal', Component)

    Vue.prototype.$modal = {
      show(name) {
        location.hash = name
      },

      hide() {
        location.hash = '#'
      }
    }
  }
}

export default Plugin
