<template>
  <div class="bg-grey-light">
    <div class="container mx-auto md:px-32 px-8">
      <div class="flex justify-between py-24">
        <div :style="{width: '100%'}">
          <p class="h3 text-grey-darkest tracking-wide">
            hi, i'm mike
          </p>
          <p class="body text-grey-darkest">
            And I like to build things.
          </p>
        </div>
        <div
          :style="{width: '100%'}"
          class="flex flex-col justify-center"
        >
          <lego-grid
            class="mx-auto"
            :legoBricks="brickList"
            :scalingFactor="scalingFactor"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LegoGrid from './LegoGrid';

export default {
  components: {
    LegoGrid,
  },

  data() {
    return {
      scalingFactor: 0.8,
    };
  },

  computed: {
    fullBrickList: () => [
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

    mdBrickList() {
      return this.fullBrickList.slice(0, 4);
    },

    smBrickList() {
      return this.fullBrickList.slice(0, 3);
    },

    brickList() {
      console.log(`$mq is ${this.$mq}`);

      switch (this.$mq) {
        case 'xl':
        case 'lg':
          return this.fullBrickList;
        case 'md':
          return this.mdBrickList;
        case 'sm':
          return this.smBrickList;
        default:
          throw Error('something went wrong with the breakpoints...');
      }
    },
  },
};
</script>
