<template>
  <div>
    <div class="wrapper">
      <div class="max-w-xl lg:max-w-4xl mx-auto">
        <button class="toggle-dark-mode" :title="darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'" @click="darkMode = !darkMode">
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
                :href="network.github"
                target="_blank"
                rel="noreferrer"
                title="anilsonlopes (Anilson Lopes)"
                @mouseenter="onmouseenter('github')"
                @mouseout="onmouseout('github')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387c.602.11.82-.258.82-.578c0-.286-.011-1.04-.015-2.04c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.726.082-.726c1.203.086 1.836 1.234 1.836 1.234c1.07 1.836 2.808 1.305 3.492 1c.11-.777.422-1.305.762-1.605c-2.664-.301-5.465-1.332-5.465-5.93c0-1.313.469-2.383 1.234-3.223c-.121-.3-.535-1.523.117-3.175c0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402c2.293-1.55 3.297-1.23 3.297-1.23c.656 1.652.246 2.875.12 3.175c.77.84 1.231 1.91 1.231 3.223c0 4.61-2.804 5.621-5.476 5.922c.43.367.812 1.101.812 2.219c0 1.605-.011 2.898-.011 3.293c0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" fill="currentColor"></path></svg>
              </a>
              <a
                class="social__link"
                :href="network.instagram"
                target="_blank"
                rel="noreferrer"
                title="Anilson Lopes (@quilamcz) • Fotos e vídeos do Instagram"
                @mouseenter="onmouseenter('instagram')"
                @mouseout="onmouseout('instagram')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M11.469 5C7.918 5 5 7.914 5 11.469v9.062C5 24.082 7.914 27 11.469 27h9.062C24.082 27 27 24.086 27 20.531V11.47C27 7.918 24.086 5 20.531 5zm0 2h9.062A4.463 4.463 0 0 1 25 11.469v9.062A4.463 4.463 0 0 1 20.531 25H11.47A4.463 4.463 0 0 1 7 20.531V11.47A4.463 4.463 0 0 1 11.469 7zm10.437 2.188a.902.902 0 0 0-.906.906c0 .504.402.906.906.906a.902.902 0 0 0 .907-.906a.902.902 0 0 0-.907-.906zM16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4s-4-1.777-4-4s1.777-4 4-4z" fill="currentColor"></path></svg>
              </a>
              <a
                class="social__link"
                :href="network.soundcloud"
                target="_blank"
                rel="noreferrer"
                title="Quila Beats | Ouça grátis na SoundCloud"
                @mouseenter="onmouseenter('soundcloud')"
                @mouseout="onmouseout('soundcloud')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la px-1" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M19.625 9.05c-.887 0-1.754.177-2.516.473c-.297.114-.379.23-.379.461v12.493c0 .242.188.43.422.453h10.91A3.92 3.92 0 0 0 32 19.012a3.939 3.939 0 0 0-3.938-3.938c-.539 0-1.05.11-1.519.309a6.948 6.948 0 0 0-6.918-6.332zm-3.7.923c-.105 0-.198.039-.273.101a.426.426 0 0 0-.16.332v.043l-.18 8.824l.09 1.63l.09 1.59c.004.234.195.429.434.429a.44.44 0 0 0 .433-.434l.192-3.215l-.192-8.867a.453.453 0 0 0-.214-.37a.43.43 0 0 0-.22-.063zm-1.343.765a.38.38 0 0 0-.219.067a.397.397 0 0 0-.187.34v.074l-.153 8.05l.153 3.27v.012a.413.413 0 0 0 .406.39c.11 0 .211-.046.285-.12a.433.433 0 0 0 .121-.286l.016-.324l.156-2.941l-.172-8.13a.42.42 0 0 0-.406-.402zm-4.02.934c-.175 0-.32.14-.324.32l-.203 7.278l.203 3.34c.004.18.149.32.325.32c.175 0 .316-.14.324-.32l.226-3.34l-.226-7.278a.328.328 0 0 0-.325-.32zm1.329.16a.352.352 0 0 0-.352.348l-.187 7.09l.187 3.308c.004.195.16.348.352.348a.354.354 0 0 0 .351-.348l.207-3.308l-.207-7.09a.352.352 0 0 0-.351-.348zm-2.649.105c-.16 0-.289.13-.297.293l-.218 7.04l.218 3.363a.301.301 0 0 0 .297.293c.16 0 .29-.13.297-.297l.246-3.36l-.246-7.039a.301.301 0 0 0-.297-.293zm3.988.126a.378.378 0 0 0-.378.374l-.168 6.833l.168 3.289a.378.378 0 0 0 .757-.004l.192-3.285l-.192-6.832a.378.378 0 0 0-.379-.376zm-5.316.46a.272.272 0 0 0-.27.266l-.234 6.496l.235 3.399a.272.272 0 0 0 .27.265a.274.274 0 0 0 .269-.265l.265-3.395l-.265-6.5a.274.274 0 0 0-.27-.266zm-1.277 1.22a.245.245 0 0 0-.242.237l-.25 5.29l.25 3.414c.007.132.113.242.242.242s.234-.11.242-.242l.281-3.414l-.281-5.29a.248.248 0 0 0-.242-.238zM4.07 15.577c-.097 0-.18.078-.187.188l-.281 3.5l.28 3.39c.009.106.09.184.188.184s.18-.078.188-.184l.32-3.39l-.32-3.504a.192.192 0 0 0-.188-.184zm-1.265.121c-.086 0-.153.067-.16.156l-.301 3.41l.3 3.286c.008.09.075.156.16.156c.083 0 .15-.066.16-.156l.337-3.285l-.336-3.41c-.012-.09-.078-.157-.16-.157zm2.543.106a.218.218 0 0 0-.215.21l-.266 3.25l.266 3.419c.008.12.101.21.215.21c.113 0 .207-.09.215-.21l.3-3.418l-.3-3.25a.218.218 0 0 0-.215-.211zm-3.801.457c-.07 0-.125.054-.137.129l-.312 2.875l.312 2.808c.012.078.067.133.137.133c.066 0 .121-.055.133-.129l.355-2.812l-.355-2.875c-.012-.075-.067-.13-.133-.13zM.363 17.363c-.066 0-.12.051-.129.125L0 19.266l.234 1.746c.008.074.063.125.13.125c.062 0 .116-.051.124-.121l.278-1.75l-.278-1.778c-.008-.074-.062-.125-.125-.125z" fill="currentColor"></path></svg>
              </a>
              <a
                class="social__link"
                :href="network.linkedin"
                target="_blank"
                rel="noreferrer"
                title="Anilson Lopes | Linkedin"
                @mouseenter="onmouseenter('linkedin')"
                @mouseout="onmouseout('linkedin')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z" fill="currentColor"></path></svg>
              </a>
              <a
                class="social__link"
                :href="network.twitch"
                target="_blank"
                rel="noreferrer"
                title="quila666 - Twitch"
                @mouseenter="onmouseenter('twitch')"
                @mouseout="onmouseout('twitch')"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--la" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M6.5 5L5 9v16h5.5v3h3l3-3H21l6-6V5zM9 7h16v11l-3 3h-6l-3 3v-3H9zm5 4v6h2v-6zm5 0v6h2v-6z" fill="currentColor"></path></svg>
              </a>
            </nav>
          </div>
          <div class="lg:pl-10 pt-5 lg:pt-0">
            <p class="text-xl">
              Eu sou Anilson Lopes, <a :href="network.linkedin" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Linkedin">desenvolvedor web</a> que atualmente está criando interfaces 
              digitais no <a :href="network.asc" rel="noreferrer" class="network__link" target="_blank" title="Site do Acesse seu condomínio">Acesse seu condomínio</a>. 
              <a :href="network.instagram" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Instagram">Vivo na sombra</a> do desenvolvimento performático e gosto de colaborar com 
              equipes que eliminam as fronteiras entre eles. Eu acredito na <a :href="network.github" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Github">construção</a> de 
              produtos auto-sustentáveis, escaláveis e acessíveis.
            </p>
            <p class="font-medium mt-4">
              Na eminência de tempo livre me envolvo com <a :href="network.soundcloud" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Soundcloud">produção musical</a>, <a :href="network.twitch" rel="noreferrer" class="network__link" target="_blank" title="Canal na Twitch">tento reinventar coisas</a> e pratico bmx street-park.
            </p>
            <a
              class="network__link mt-8 inline-block text-xs font-bold"
              href="mailto:nissobmx@gmail.com"
              target="_blank"
            >
              MANDE-ME UM <i class="line-through">SPAM</i> EMAIL
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

.toggle-dark-mode {
  @apply bg-transparent border-none;
  transition: 200ms all;
}

.toggle-dark-mode:hover,
.toggle-dark-mode:focus {
  @apply outline-none shadow-outline rounded;
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

.social {
  @apply flex justify-center mt-5;
}

.social__link {
  @apply mx-2 text-gray-500 rounded;
  transition: 200ms all;
}

.social__link:hover,
.social__link:focus {
  @apply outline-none shadow-outline text-gray-800;
}

body.dark-mode .social__link {
  @apply text-gray-200;
}

.network__link {
  @apply border-b;
  color: var(--theme-text, black);
  border-color: var(--theme-link-hover, #81cbee);
}

.network__link:hover,
.network__link:focus {
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
      twitch: 'https://twitch.tv/quila666',
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
  methods: {
    onmouseenter(target) {
      this.onmouse[target] = true
    },
    onmouseout(target) {
      this.onmouse[target] = false
    },
  }
}
</script>