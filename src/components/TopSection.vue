<template>
  <div class="container mx-auto pt-10 flex bg-grey-lightest">
    <div class="flex-1">
      <div class="flex flex-col justify-center h-full">

        <!-- new 2: -->
        <p class="text-grey-darkest h3 tracking-wide">
          hi, i'm mike
        </p>
        <p class="text-grey-darkest body">
          and i like to make things
        </p>

        <!-- new: -->
        <!-- <p class="leading-normal">
          <span class="h4">i'm mike,</span><br><span class="body">and i like to build things.</span>
        </p> -->

        <!-- old: -->
        <!-- <p class="padded-multiline leading-normal">
          <span class="bg-black text-white p-2">hi, i'm mike,<br>and i like to build things.</span>
        </p> -->

      </div>
    </div>
    <div class="flex-1">
      <img
        class="object-contain"
        :src="require('../assets/legos-001.png')"
      >
    </div>
  </div>
</template>

<style scoped>
.padded-multiline span {
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
</style>
