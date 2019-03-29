<template>
  <div>
    <div>
      <lego :class="legoClass" />
      <lego :class="legoClass" />
      <lego :class="legoClass" />
      <lego :class="legoClass" />
      <lego :class="legoClass" />
      <lego :class="legoClass" />
      <lego :class="legoClass" />
    </div>
  </div>
</template>

<script>
import Lego from '../assets/legos-003.svg';

export default {
  data() {
    return {
    };
  },

  components: {
    Lego,
  },

  computed: {
    legoClass() {
      return {
        lego: true,
        relative: 'true',
      };
    },
  },

  mounted() {
    this.$anime({
      targets: '.lego',
      translateY: 270,
      delay: this.$anime.stagger(100, { start: 500 }),
      easing: 'linear',
    });
  },
};
</script>
