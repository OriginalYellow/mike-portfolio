<template>

  <nav class="font-mono flex flex-row text-right z-50 sticky pin-t bg-grey-light">
    <div class="sm:mb-0 flex-1 container mx-auto">

      <button
        :class="buttonClass"
        type="button"
        @click.prevent.stop="handleClick"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

    </div>
  </nav>
</template>

<script>
export default {
  props: ['buttonIsActive'],

  computed: {
    buttonClass() {
      return {
        'hamburger--spin': true,
        'focus:outline-none': true,
        'fill-current': false,
        'text-orange-light': true,
        'w-24': true,
        'h-24': true,
        'mr-2': true,
        'is-active': this.buttonIsActive,
      };
    },
  },

  methods: {
    handleClick() {
      this.$emit('openNav');
    },
  },
};
</script>

<style>
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  background-color: #FF9100
}
</style>
