<template>
  <div>
    <div class="wrapper">
      <div class="max-w-xl lg:max-w-4xl mx-auto">
        <button class="bg-transparent border-none focus:outline-none focus:shadow-outline hover:shadow-outline" :title="darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'" @click="darkMode = !darkMode">
          <svg
            v-if="darkMode"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="w-10 h-10 text-white"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07L19.07 3.5m-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13l.51 1.67m-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87l.4 1.31M19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35l-2.53-2.2m4.33-2.7l1.15-2.77l2.2 2.54l-3.35.23m1.15-4.96l-1.14-2.78l3.34.24l-2.2 2.54M9.63 18.93l2.77 1.15l-2.53 2.19l-.24-3.34z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="w-10 h-10 text-black"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.5 2c-1.79 1.15-3 3.18-3 5.5s1.21 4.35 3.03 5.5C4.46 13 2 10.54 2 7.5A5.5 5.5 0 0 1 7.5 2m11.57 1.5l1.43 1.43L4.93 20.5L3.5 19.07L19.07 3.5m-6.18 2.43L11.41 5L9.97 6l.42-1.7L9 3.24l1.75-.12l.58-1.65L12 3.1l1.73.03l-1.35 1.13l.51 1.67m-3.3 3.61l-1.16-.73l-1.12.78l.34-1.32l-1.09-.83l1.36-.09l.45-1.29l.51 1.27l1.36.03l-1.05.87l.4 1.31M19 13.5a5.5 5.5 0 0 1-5.5 5.5c-1.22 0-2.35-.4-3.26-1.07l7.69-7.69c.67.91 1.07 2.04 1.07 3.26m-4.4 6.58l2.77-1.15l-.24 3.35l-2.53-2.2m4.33-2.7l1.15-2.77l2.2 2.54l-3.35.23m1.15-4.96l-1.14-2.78l3.34.24l-2.2 2.54M9.63 18.93l2.77 1.15l-2.53 2.19l-.24-3.34z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div class="pt-10 lg:pt-20 flex flex-col lg:flex-row lg:justify-between">
          <div class="flex flex-col justify-center">
            <div class="avatar" />
            <nav class="social">
              <a
                class="social__link"
                :href="network.linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~/assets/img/social/linkedin.png" alt="Linkedin" />
              </a>
              <a
                class="social__link"
                :href="network.instagram"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~/assets/img/social/instagram.png" alt="Instagram" />
              </a>
              <a
                class="social__link"
                :href="network.github"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~/assets/img/social/github.png" alt="Github" />
              </a>
              <a
                class="social__link"
                :href="network.soundcloud"
                target="_blank"
                rel="noreferrer"
              >
                <img src="~/assets/img/social/soundcloud.png" alt="SoundCloud" />
              </a>
            </nav>
          </div>
          <div class="lg:pl-10 pt-5 lg:pt-0">
            <p class="text-2xl">
              Eu sou Anilson Lopes, <a :href="network.linkedin" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Linkedin">desenvolvedor web</a> que atualmente está criando interfaces 
              digitais no <a :href="network.asc" rel="noreferrer" class="network__link" target="_blank" title="Site do Acesse seu condomínio">Acesse seu condomínio</a>. 
              <a :href="network.instagram" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Instagram">Vivo na sombra</a> do desenvolvimento performático e gosto de colaborar com 
              equipes que eliminam as fronteiras entre eles. Eu acredito na <a :href="network.github" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Github">construção</a> de 
              produtos auto-sustentáveis, escaláveis e acessíveis.
            </p>
            <p class="text-xl pb-4">
              Na eminência de tempo livre me envolvo com <a :href="network.soundcloud" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Soundcloud">produção musical</a>, tento reinventar coisas e pratico bmx street-park.
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
    </div>
    <nuxt-child />
  </div>
</template>

<style lang="postcss" scoped>
@screen lg {
  .wrapper {
    @apply items-center;
  }
}

.wrapper {
  @apply min-h-screen w-full justify-center flex flex-col p-4;
  background-color: var(--theme-bg, #f1f3f2);
  color: var(--theme-text, #f1f3f2);
}

.avatar {
  @apply bg-cover rounded shadow-lg w-64 h-64;
}

body:not(.dark-mode) .avatar {
  background-image: url(~assets/img/mr-robot.jpg);
}

body.dark-mode .avatar {
  background-image: url(~assets/img/mr-robot.gif);
}

.moon {
  transform: rotateZ(90deg);
}

.social {
  @apply flex justify-center mt-5;
}

.social__link {
  @apply mx-2 opacity-25;
  transition: 200ms all;
}

.social__link:hover,
.social__link:focus {
  @apply opacity-100;
}

body.dark-mode .social__link {
  filter: invert(100%);
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
  data: () => ({
    darkMode: ['true', null].includes(window.localStorage.getItem('dark-mode')),
    network: {
      instagram: 'https://www.instagram.com/quilamcz',
      linkedin: 'https://www.linkedin.com/in/anilson-lopes-07a36612a',
      github: 'https://github.com/anilsonlopes',
      soundcloud: 'https://soundcloud.com/quilamcz',
      asc: 'https://acesseseucondominio.com.br'
    },
    onmouse: {
      instagram: false,
      linkedin: false,
      github: false,
      soundcloud: false,
      asc: false,
    },
  }),
  watch: {
    darkMode: {
      immediate: true,
      handler(dark) {
        document.body.classList[dark ? 'add' : 'remove']('dark-mode')
        window.localStorage.setItem('dark-mode', dark)
      }
    }
  },
}
</script>