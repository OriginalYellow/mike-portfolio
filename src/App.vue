<template>
  <div class="bg-grey-lightest">
    <div
      id="app"
      class="flex flex-col mx-auto container"
    >

      <!-- MIKE: put a slot in this -->

      <AppBar @openNav="toggleMenu" />

      <Push
        width="300"
        :crossIcon="false"
        :burgerIcon="false"
        :isOpen="menuIsOpen"
        @closeMenu="closeMenu"
        @openMenu="openMenu"
        noOverlay
      >
        <a
          href="/home"
          class="font-mono body text-grey-darker no-underline hover:text-grey-darkest"
          :style="{'font-size': '1.5625em'}"
        >home</a>
        <a
          href="/about"
          class="font-mono body no-underline text-grey-darker hover:text-grey-darkest"
          :style="{'font-size': '1.5625em'}"
        >about</a>
        <a
          href="/resume"
          class="font-mono body no-underline text-grey-darker hover:text-grey-darkest"
          :style="{'font-size': '1.5625em'}"
        >resume</a>
        <a
          href="/portfolio"
          class="font-mono body no-underline text-grey-darker hover:text-grey-darkest"
          :style="{'font-size': '1.5625em'}"
        >portfolio</a>
      </Push>

      <div id="page-wrap">
        <TopSection />
      </div>

    </div>
  </div>
</template>

<script>
import { Push } from 'vue-burger-menu';

import AppBar from './components/AppBar';
import TopSection from './components/TopSection';

export default {
  components: { AppBar, TopSection, Push },

  data() {
    return {
      menuIsOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      console.log('fug');
      this.menuIsOpen = !this.menuIsOpen;
    },

    closeMenu() {
      this.menuIsOpen = false;
    },

    openMenu() {
      this.menuIsOpen = true;
    },
  },
};
</script>

<style>
html {
  /* this only works when jumping from point to point on a page (not when
  normally scrolling) */
  scroll-behavior: smooth;
}

.bm-menu {
  background-color: #dae1e7;
}
</style>
