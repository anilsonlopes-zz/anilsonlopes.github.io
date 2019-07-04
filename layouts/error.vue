<template>
  <div class="error">
    <div class="error__inner">
      <h1 v-if="error.statusCode === 404" class="error__heading">
        Página não encontrada
      </h1>
      <h1 v-else class="error__heading">
        Oh não, temos algo errado aqui.
      </h1>
      <nuxt-link :to="{ name: 'index' }">
        Sair agora
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      required: false,
      default: -1,
      type: Number
    }
  }
}
</script>

<style lang="postcss" scoped>
.error {
  @apply w-full max-w-xl mx-auto;
}

.error__inner {
  @apply w-full h-full flex flex-col justify-center items-center;
}

.error__heading {
  @apply mb-4 text-sm font-medium uppercase;
}
</style>
