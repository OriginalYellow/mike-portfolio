<template>
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
  data() {
    return {
      scalingFactor: 0.8,
      legoBricks: [
        [
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
        ],
        [
          {
            color: 'light-blue',
          },
        ],
        [
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
        ],
        [
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
        ],
        [
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
        ],
        [
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
          {
            color: 'light-blue',
          },
        ],
      ],
    };
  },

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

  mounted() {
    this.$anime.set('.legoBrick', {
      translateY: -350,
    });

    this.$anime({
      targets: '.legoBrick',
      translateY: 0,
      // delay: this.$anime.stagger(100, { start: 500, from: 'center' }),
      delay: this.$anime.stagger(100, { start: 500 }),
      easing: 'easeOutQuart',
    });
  },
};
</script>
