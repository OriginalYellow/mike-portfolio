<template>

  <nav class="font-mono body flex flex-row text-right z-10 sticky pin-t">
    <div class="my-10 sm:mb-0 flex-1 z-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-grey-darkest w-24 h-24 mr-2"
        viewBox="0 0 24 24"
        @click.prevent.stop="$emit('openNav')"
      >
        <path
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
    </div>
  </nav>
</template>

  <!-- old: -->
  <!-- <nav class="font-mono flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline z-10 sticky pin-t"> -->

      <!-- <Slide>
        <a
          id="home"
          href="#"
        >
          <span>Home</span>
        </a>
      </Slide>

      <a
        href="/home"
        class="text-grey-darker no-underline hover:text-grey-darkest"
      >Home</a>

    </div>
    <div>
      <a
        href="/"
        class="no-underline text-grey-darker hover:text-grey-darkest ml-4"
      >About</a>
      <a
        href="/"
        class="no-underline text-grey-darker hover:text-grey-darkest ml-4"
      >Resume</a>
      <a
        href="/"
        class="no-underline text-grey-darker hover:text-grey-darkest ml-4"
      >Portfolio</a> -->
