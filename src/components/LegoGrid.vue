<template>
  <!-- MIKE: there is a small bug where if you go from sm to lg or xl too fast,
  the initial call to anime.set won't target the new elements -->

  <!-- NOTE: for some reason "relative" doesn't seem to be doing anything but im
  keeping it here anyway just cuz -->
  <div
    class="relative"
    :style="gridStyle"
  >
    <div
      v-for="(column, columnIndex) in legoBricks"
      :key="columnIndex"
      class="absolute"
      :style="columnStyle"
    >
      <lego-brick
        v-for="(legoBrick, rowIndex) in column"
        :key="rowIndex"
        :color="legoBrick.color"
        :column="columnIndex"
        :row="rowIndex"
        :scalingFactor="scalingFactor"
      >
      </lego-brick>
    </div>
  </div>
</template>

<script>
import LegoBrick from './LegoBrick';

export default {
  props: ['legoBricks', 'scalingFactor'],

  components: {
    LegoBrick,
  },

  computed: {
    width() {
      return (
        this.legoBricks.length * this.originalBrickWidth * this.scalingFactor
      );
    },

    height() {
      const maxRows = Math.max(...this.legoBricks.map(x => x.length));
      return ((maxRows - 1) * this.originalBrickSideHeight * this.scalingFactor)
      + (this.originalBrickHeight * this.scalingFactor);
    },

    gridStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
    },

    columnStyle() {
      return {
        height: `${this.height}px`,
      };
    },

    originalBrickWidth: () => 60.203,

    originalBrickHeight: () => 50.64,

    originalBrickSideHeight: () => 25.2,
  },

  methods: {
    animate() {
      let resetZIndex = () => this.$anime.set('.legoBrick', {
        zIndex: '-=51',
      });

      resetZIndex = resetZIndex.bind(this);

      this.$anime.set('.legoBrick', {
        translateY: -350,
        zIndex: '+=51',
      });

      this.$anime({
        targets: '.legoBrick',
        translateY: 0,
        delay: this.$anime.stagger(100, { start: 500 }),
        easing: 'easeOutQuart',
        complete() {
          resetZIndex();
        },
      });
    },

    resetAnimation() {
      this.$anime.set('.legoBrick', {
        translateY: -350,
        zIndex: '+=51',
      });
    },
  },

  updated() {
    this.animate();
  },
};
</script>
