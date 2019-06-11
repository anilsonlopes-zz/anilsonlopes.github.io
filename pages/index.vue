<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1
        class="domain highlight text-center"
        :style="{ 'background-image': `url(img/${randomImage}.jpg)` }"
      >
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
    #535353,
    #979797,
    #555353,
    #474747,
    #000000
  );
}

.highlight {
  font-family: 'Fredoka One', cursive;
  background-clip: text;
  background-attachment: local;
  background-size: 100% auto;
  -webkit-text-fill-color: transparent;
}

.domain {
  font-size: 30vw;
}
</style>

<script>
export default {
  data: () => ({
    nameBase: 'quila',
    name: [],
    currentLetter: 0,
    location: 'web developer'
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
      this.name.push(this.nameBase.split('')[this.currentLetter++])
      if (this.currentLetter < this.nameBase.length) {
        window.setTimeout(() => {
          this.writeName()
        }, 500)
      }
    }
  }
}
</script>
