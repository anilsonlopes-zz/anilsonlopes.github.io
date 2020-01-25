<template>
  <div class="h-screen bg-black text-white flex items-center justify-center">
    <h2>desenvolvimento</h2>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Desenvolvimento',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'desenvolvimento'
        },
        {
        hid: 'description',
          name: 'description',
          content:
            'Anilson Lopes, desenvolvimento, JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Anilson Lopes, desenvolvimento, JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://quila.dev/desenvolvimento'
        }
      ]
    }
  },
  mounted() {
    // const { top } = this.$el.getBoundingClientRect()
    // window.scrollTo(0, top)
  }
}
</script>
