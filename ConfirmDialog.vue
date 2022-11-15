<template>
  <Modal name="dialog">
    {{ params.message }}

    <template v-slot:footer>
      <button
        class="bg-gray-500 hover:bg-gray-500 py-2 px-4 text-white rounded-lg mr-2"
        @click.prevent="handleClick(false)"
        v-if="params.cancelButton"
        v-text="params.cancelButton"
      ></button>

      <button
        class="bg-blue-500 hover:bg-gray-500 py-2 px-4 text-white rounded-lg mr-2"
        @click.prevent="handleClick(true)"
        v-if="params.confirmButton"
        v-text="params.confirmButton"
      ></button>
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal'
import ModalPlugin from './ModalPlugin'

export default {
  components: { Modal },

  data() {
    return {
      params: {
        message: 'Are you sure?',
        confirmButton: 'Continue',
        cancelButton: 'Cancel'
      }
    }
  },

  methods: {
    handleClick(confirmed) {
      ModalPlugin.events.$emit('clicked', confirmed)

      this.$modal.hide()
    }
  },

  beforeMount() {
    ModalPlugin.$events.$on('show', (params) => {
      Object.assign(this.params, params)
    })
  }
}
</script>

<style></style>
