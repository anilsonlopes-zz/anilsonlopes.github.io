<template>
  <div class="w-full flex justify-center p-4">
    <div class="max-w-4xl flex justify-between">
      <div class="flex flex-col justify-center">
        <div
          class="bg-cover rounded-full"
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
          >
            <img src="./social/linkedin.svg" alt="Linkedin">
          </a>
          <a class="social__link" href="https://www.instagram.com/quilamcz">
            [instagram]
          </a>
          <a class="social__link" href="https://github.com/anilsonlopes">
            [github]
          </a>
        </nav>
      </div>
      <div class="md:ml-10 text">
        <p class="text-2xl">
          Eu sou um desenvolvedor front-end que atualmente está criando
          interfaces digitais na
          <a href="https://doity.com.br" target="_blank">Doity</a>. Sou
          apaixonado por desenvolvimento com acesso performático e gosto de
          trabalhar em equipes que obscurecem as linhas entre eles. Eu acredito
          na construção de produtos auto-sustentáveis, escaláveis e acessíveis.
        </p>
        <p>
          In my free time, I’m into virtual reality, archery, and baking.
        </p>
        <a href="mailto:nissobmx@gmail.com">
          EMAIL ME
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.social__link {
  @apply mx-2;
}

.text {
  font-family: 'Crimson Text', serif;
}
</style>
