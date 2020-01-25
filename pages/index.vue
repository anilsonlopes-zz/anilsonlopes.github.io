<template>
  <div>
    <div class="wrapper">
      <button class="toggle-dark-mode" @click="darkMode = !darkMode">
        <i v-if="darkMode" class="sun inline-block"></i>
        <i v-else class="moon inline-block"></i>
      </button>
      <div class="max-w-4xl flex flex-col lg:flex-row lg:justify-between">
        <div class="flex flex-col justify-center">
          <div
            class="bg-cover rounded shadow-lg"
            :style="{
              backgroundImage:
                'url(https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imgmr_robot.gif)',
              width: '220px',
              height: '220px'
            }"
          />
          <nav class="social">
            <a
              class="social__link"
              :href="network.linkedin"
              target="_blank"
            >
              <img src="~/assets/img/social/linkedin.png" alt="Linkedin" />
            </a>
            <a
              class="social__link"
              :href="network.instagram"
              target="_blank"
            >
              <img src="~/assets/img/social/instagram.png" alt="Instagram" />
            </a>
            <a
              class="social__link"
              :href="network.github"
              target="_blank"
            >
              <img src="~/assets/img/social/github.png" alt="Github" />
            </a>
            <a
              class="social__link"
              :href="network.soundcloud"
              target="_blank"
            >
              <img src="~/assets/img/social/soundcloud.png" alt="SoundCloud" />
            </a>
          </nav>
        </div>
        <div class="lg:ml-10 mt-5 lg:mt-0">
          <p class="text-2xl max-w-xl mx-auto">
            Eu sou Anilson Lopes, <a :href="network.linkedin" class="network__link" target="_blank" title="Perfil no Linkedin">desenvolvedor web</a> que atualmente está criando interfaces 
            digitais na <a :href="network.doity" class="network__link" target="_blank" title="Site da Doity, plataforma de eventos">Doity</a>. 
            <a :href="network.instagram" class="network__link" target="_blank" title="Perfil no Instagram">Vivo na sombra</a> do desenvolvimento performático e gosto de colaborar com 
            equipes que eliminam as fronteiras entre eles. Eu acredito na <a :href="network.github" class="network__link" target="_blank" title="Perfil no Github">construção</a> de 
            produtos auto-sustentáveis, escaláveis e acessíveis.
          </p>
          <p class="text-xl mt-5 mb-4 max-w-xl mx-auto">
            Na eminência de tempo livre me envolvo com <a :href="network.soundcloud" class="network__link" target="_blank" title="Perfil no Soundcloud">produção musical</a>, tento reinventar coisas e pratico bmx street-park.
          </p>
          <a
            class="text-sm font-bold hover:text-blue-600"
            href="mailto:nissobmx@gmail.com"
            target="_blank"
          >
            MANDE-ME UM EMAIL
          </a>
        </div>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply min-h-screen w-full flex flex-col justify-center items-center p-4;
  background-color: var(--theme-bg, #f1f3f2);
  color: var(--theme-text, #f1f3f2);
}

.toggle-dark-mode:focus {
  @apply outline-none;
}

.toggle-dark-mode {
  @apply p-2;
}

.moon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 15px 15px 0 0 var(--theme-text, red);
  transform: translate3d(-25%, -25%, 0);
}

.sun {
  background-color: var(--theme-text, red);
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;
}

.sun:before,
.sun:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  background-color: inherit;
}

.sun:before {
  transform: rotate(30deg);
}

.sun:after {
  transform: rotate(60deg);
}

.social {
  @apply flex mt-5;
}

.social__link {
  @apply mx-2 opacity-25;
  transition: 600ms all;
}

.social__link:hover {
  @apply opacity-100;
}

.network__link {
  @apply border-b;
  color: var(--theme-text, black);
  border-color: var(--theme-link-hover, #81cbee);
}

.network__link:hover {
  background-color: var(--theme-link-hover, #00354e);
}
</style>

<script>
export default {
  head() {
    return {
      title: 'Anilson Lopes',
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Anilson Lopes, desenvolvedor web'
        },
        {
        hid: 'description',
          name: 'description',
          content:
            'Anilson Lopes, desenvolvedor web. JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Anilson Lopes, desenvolvedor web. JavaScript, CSS, HTML, VueJS, NuxtJS'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.quila.dev'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://quila.dev/images/skull_0.png'
        }
      ]
    }
  },
  data: () => ({
    darkMode: false,
    network: {
      instagram: 'https://www.instagram.com/quilamcz',
      linkedin: 'https://www.linkedin.com/in/anilson-lopes-07a36612a',
      github: 'https://github.com/anilsonlopes',
      soundcloud: 'https://soundcloud.com/quilamcz',
      doity: 'https://doity.com.br/eventos'
    }
  }),
  watch: {
    darkMode(dark) {
      document.body.classList[dark ? 'add' : 'remove']('dark-mode')
    }
  }
}
</script>