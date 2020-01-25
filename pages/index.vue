<template>
  <div>
    <div class="wrapper">
      <div class="max-w-4xl flex flex-col md:flex-row items-center justify-between mt-10">
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
          <nav class="flex justify-center mt-5">
            <a
              class="social__link"
              href="https://www.linkedin.com/in/anilson-lopes-07a36612a"
              target="_blank"
            >
              <img src="~/assets/img/social/linkedin.png" alt="Linkedin" />
            </a>
            <a
              class="social__link"
              href="https://www.instagram.com/quilamcz"
              target="_blank"
            >
              <img src="~/assets/img/social/instagram.png" alt="Instagram" />
            </a>
            <a
              class="social__link"
              href="https://github.com/anilsonlopes"
              target="_blank"
            >
              <img src="~/assets/img/social/github.png" alt="Github" />
            </a>
            <a
              class="social__link"
              href="https://soundcloud.com/quilamcz"
              target="_blank"
            >
              <img src="~/assets/img/social/soundcloud.png" alt="SoundCloud" />
            </a>
          </nav>
        </div>
        <div class="md:ml-10 mt-10 md:mt-0">
          <p class="text-2xl">
            Eu sou Anilson Lopes, desenvolvedor front-end que atualmente está criando interfaces 
            digitais na <a href="https://doity.com.br/?utm_source=quila.dev" target="_blank">Doity</a>. 
            Vivo na sombra do desenvolvimento performático e gosto de colaborar com 
            equipes que eliminam as fronteiras entre eles. Eu acredito na construção de 
            produtos auto-sustentáveis, escaláveis e acessíveis.
          </p>
          <p class="text-xl mt-5 mb-4">
            Na eminência de tempo livre me envolvo com produção musical, tento reinventar coisas e pratico bmx street-park.
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
  @apply h-screen w-full flex flex-col justify-center items-center p-4;
  background-image: linear-gradient(
    to left bottom,
    #cccccc,
    #fbfbfb,
    #f6f6f6,
    #f2f2f2,
    #eeeeee
  );
}

.highlight-text {
  font-family: 'Palanquin Dark', cursive;
  background-clip: text;
  background-attachment: local;
  background-size: 100% auto;
  -webkit-text-fill-color: transparent;
  background-image: url(~assets/img/02.jpg);
}

.social__link {
  @apply mx-2 opacity-50;
  transition: 100ms all;
}

.social__link:hover {
  @apply opacity-100;
}
</style>
