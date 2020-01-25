<template>
  <div class="h-screen bg-black text-white flex items-center justify-center">
    <h2>front-end</h2>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Front-end',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Front-end'
        },
        {
        hid: 'description',
          name: 'description',
          content:
            'Anilson Lopes, front-end, JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Anilson Lopes, front-end, JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://quila.dev/front-end'
        }
      ]
    }
  }
}
</script>
