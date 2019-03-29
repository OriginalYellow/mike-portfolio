<template>
  <div class="mx-auto py-32 flex justify-around">
    <div class="">
      <div class="flex flex-col justify-center h-full mr-20">

        <p class="text-grey-darkest h3 tracking-wide">
          hi, i'm mike
        </p>
        <p class="text-grey-darkest body">
          and i like to build things
        </p>

      </div>
    </div>
    <div>
      <lego-grid/>
    </div>
  </div>
</template>

<script>
import LegoGrid from './LegoGrid';

export default {
  components: {
    LegoGrid,
  },
};
</script>
