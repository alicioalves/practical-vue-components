<template>
  <div class="dropdown relative">
    <div
      class="dropdown-trigger"
      @click.prevent="toggleMenu()"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </div>

    <transition name="pop-out-quick">
      <ul
        v-show="isOpen"
        class="dropdown-menu absolute bg-black mt-2 py-2 rounded shadow text-white z-10"
      >
        <li v-for="item in menuItems" :key="item.displayName">
          <a
            class="pl-2 pr-8 leading-loose text-xs block hover:bg-gray-900"
            :href="item.href"
          >
            {{ item.displayName }}
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  watch: {
    isOpen(isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.closeIfClickedOutside)
      }
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },

    closeIfClickedOutside() {
      if (!event.target.closest('.dropdown')) {
        this.isOpen = false

        document.removeEventListener('click', this.closeIfClickedOutside)
      }
    }
  }
}
</script>

<style>
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.4s;
}

.pop-out-quick-enter,
.pop-out-quick-leave-active {
  opacity: 0;
  transform: translateY(-7px);
}
</style>
