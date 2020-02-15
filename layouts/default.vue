<template>
  <div>
    <a class="skip-link" href="#main">Skip to main</a>
    <main id="main">
      <nuxt />
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.skip-link {
  @apply absolute left-0 bg-black text-white z-50;
  padding: 8px;
  top: -40px;
}
.skip-link:focus {
  @apply top-0;
}
</style>
