<template>
  <lego :class="legoClass" :style="legoStyle" :viewBox="viewBox" />
</template>

<script>
import Lego from '../assets/lego-blue.svg';

export default {
  data() {
    return {
    };
  },

  props: {
    color: {
      type: String,
      default: 'blue',
    },
    column: {
      type: Number,
    },
    row: {
      type: Number,
    },
    scalingFactor: {
      type: Number,
    },
  },

  components: {
    Lego,
  },

  computed: {
    legoClass() {
      return {
        legoBrick: true,
        absolute: true,
      };
    },

    legoStyle() {
      const zIndexOffset = 1;

      const width = this.originalWidth * this.scalingFactor;
      const height = this.originalHeight * this.scalingFactor;
      const sideHeight = this.originalSideHeight * this.scalingFactor;

      const colors = {
        'light-blue': 'hue-rotate(0deg) saturate(20%) brightness(140%)',
        blue: 'hue-rotate(0deg)',
        red: 'hue-rotate(165deg)',
        green: 'hue-rotate(300deg)',
        blue2: 'hue-rotate(20deg)',
        blue3: 'hue-rotate(40deg)',
      };

      return {
        height,
        width,
        bottom: this.row * sideHeight,
        left: this.column * width,
        'z-index': this.row * zIndexOffset,
        filter: colors[this.color],
      };
    },

    viewBox() {
      return `0 0 ${this.originalWidth} ${this.originalHeight}`;
    },

    originalWidth: () => 60.203,

    originalHeight: () => 50.64,

    // MIKE: you changed this - u gotta change it in parent too
    originalSideHeight: () => 25,
  },
};
</script>
