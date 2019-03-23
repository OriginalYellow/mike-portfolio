<template>
  <div class="bg-grey-lightest">
    <AppBar />
    <TopSection />
  </div>
</template>

<script>
import AppBar from './components/AppBar';
import TopSection from './components/TopSection';

export default {
  components: { AppBar, TopSection },
};
</script>

<style>
html {
  /* this only works when jumping from point to point on a page (not when
  normally scrolling) */
  scroll-behavior: smooth;
}
</style>
