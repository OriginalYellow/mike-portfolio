<template>
  <div id="app">
    <AppBar
      @openNav="toggleMenu"
      :buttonIsActive="menuIsOpen"
    />

    <!-- MIKE: put this into its own file -->
    <Push
      width="300"
      :crossIcon="false"
      :burgerIcon="false"
      :isOpen="menuIsOpen"
      @closeMenu="closeMenu"
      @openMenu="openMenu"
      noOverlay
      disableEsc
    >
      <router-link
        to="/"
      >
        <a :class="linkClass" :style="linkStyle">home</a>
      </router-link>
      <router-link
        to="/portfolio"
      >
        <a :class="linkClass" :style="linkStyle">portfolio</a>
      </router-link>
    </Push>

    <div id="page-wrap">
      <router-view />
    </div>

  </div>
</template>

<script>
import { Push } from 'vue-burger-menu';

import AppBar from './components/AppBar';

export default {
  components: {
    AppBar,
    Push,
  },

  data() {
    return {
      menuIsOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },

    closeMenu() {
      this.menuIsOpen = false;
    },

    openMenu() {
      this.menuIsOpen = true;
    },
  },

  computed: {
    linkClass: () => 'text-center font-mono h6 text-grey-lightest no-underline hover:text-orange-light',

    linkStyle: () => ({ 'font-weight': 'unset' }),
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
  background-color: #3d4852;
}

.bm-item-list > * {
  font-size: 10px;
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
</style>
