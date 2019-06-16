<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="domain highlight text-center">
        {{ name.join('') }}
      </h1>
      <p class="highlight uppercase">
        {{ location }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

.flex {
  background-image: linear-gradient(
    to left bottom,
    #cccccc,
    #fbfbfb,
    #f6f6f6,
    #f2f2f2,
    #eeeeee
  );
}

.highlight {
  font-family: 'Fredoka One', cursive;
  background-clip: text;
  background-attachment: local;
  background-size: 100% auto;
  -webkit-text-fill-color: transparent;
  background-image: url(~static/img/02.jpg);
}

.domain {
  font-size: 13vw;
}
</style>

<script>
export default {
  data: () => ({
    nameBase: 'mad bmx',
    name: [],
    currentLetter: 0,
    location: 'Maceió - AL - Brasil'
  }),
  computed: {
    randomImage() {
      return '0' + parseInt(Math.random() * 4)
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.$nextTick(() => {
        this.writeName()
      })
    }, 1000)
  },
  methods: {
    writeName() {
      if (window.document.hidden) {
        return window.setTimeout(() => {
          this.writeName()
        }, 500)
      }
      this.name.push(this.nameBase.split('')[this.currentLetter++])
      if (this.currentLetter < this.nameBase.length) {
        window.setTimeout(() => {
          this.writeName()
        }, 100)
      }
    }
  }
}
</script>
