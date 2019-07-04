<template>
  <div>
    <div class="max-w-4xl mx-auto p-4 md:p-10 flex justify-between">
      <span class="highlight">
        [quila_brand]
      </span>
      <nav class="flex items-center uppercase">
        <nuxt-link to="/" class="nav__link">
          Trabalho
        </nuxt-link>
        <nuxt-link to="/" class="nav__link ml-5">
          Sobre
        </nuxt-link>
      </nav>
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.nav__link {
  @apply text-xl;
  font-family: 'Palanquin Dark', sans-serif;
}

.nav__link:hover {
  @apply text-blue-700;
}
</style>
