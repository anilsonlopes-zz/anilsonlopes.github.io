<template>
  <div>
    <div class="wrapper">
      <div class="max-w-xl lg:max-w-4xl mx-auto">
        <button class="toggle-dark-mode" :title="darkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'" @click="darkMode = !darkMode">
          <i v-if="darkMode" class="sun inline-block"></i>
          <i v-else class="moon inline-block"></i>
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
              digitais na <a :href="network.doity" rel="noreferrer" class="network__link" target="_blank" title="Site da Doity, plataforma de eventos">Doity</a>. 
              <a :href="network.instagram" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Instagram">Vivo na sombra</a> do desenvolvimento performático e gosto de colaborar com 
              equipes que eliminam as fronteiras entre eles. Eu acredito na <a :href="network.github" rel="noreferrer" class="network__link" target="_blank" title="Perfil no Github">construção</a> de 
              produtos auto-sustentáveis, escaláveis e acessíveis.
            </p>
            <p class="text-xl pb-5 pb-4">
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
  @apply bg-cover rounded shadow-lg w-64 h-64 bg-cover;
}

body:not(.dark-mode) .avatar {
  background-image: url(~assets/img/mr-robot.jpg);
}

body.dark-mode .avatar {
  background-image: url(~assets/img/mr-robot.gif);
}

.toggle-dark-mode:focus {
  @apply outline-none ;
}

body:not(.dark-mode) .toggle-dark-mode:hover {
  background-color: var(--theme-link-hover, #00354e);
}

.toggle-dark-mode {
  @apply p-2 text-left;
  transition: 200ms all;
}

.moon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 15px 15px 0 0 var(--theme-text, red);
  transform: translate3d(-25%, -25%, 0);
}

.sun {
  background-color: yellow;
  opacity: 0.7;
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
      doity: 'https://doity.com.br/eventos'
    }
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