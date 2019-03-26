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
          class="text-center font-mono body text-grey-lightest no-underline hover:text-orange-light"
          :style="{'font-size': '1.5625em'}"
        >home</a>
        <a
          href="/about"
          class="text-center font-mono body no-underline text-grey-lightest hover:text-orange-light"
          :style="{'font-size': '1.5625em'}"
        >about</a>
        <a
          href="/resume"
          class="text-center font-mono body no-underline text-grey-lightest hover:text-orange-light"
          :style="{'font-size': '1.5625em'}"
        >resume</a>
        <a
          href="/portfolio"
          class="text-center font-mono body no-underline text-grey-lightest hover:text-orange-light"
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
  /* background-color: #f1f5f8; */
  background-color: #3D4852;
}

.bm-item-list>* {
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
