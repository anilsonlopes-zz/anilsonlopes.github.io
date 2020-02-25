<template>
  <div class="bg-black min-h-screen">

    <div class="p-5 text-white">
      <nuxt-link class="pb-2 mb-10 inline-block border-b border-gray-900" :to="{ name: 'kill-in-a-house' }">
        <span class="text-gray-900">quila.dev</span>
        <span class="text-red-400"><strong>/</strong></span>
        <strong>
          {{ $route.name }}
        </strong>
      </nuxt-link>

      <div>
        <p>Na linha do tempo original, Jason consegue sua máscara de hóquei ao matar o “brincalhão Shelly” – fora de cena – em Sexta-Feira 13 – Parte 3. Nos bastidores, a máscara foi criada pelo supervisor de efeitos especiais do filme, Martin Jay Sadoff, que era um grande fã de hóquei.</p>

        <p>No reboot de Sexta-Feira 13 (2009), a origem da máscara não é tão diferente assim. Ao invés de matar “brincalhão Shelly”, Jason na verdade mata um homem chamado Donnie, em um contexto bem parecido com a cena original. A diferença aqui é que o reboot mostra Jason pegando a máscara de fato, enquanto no original ele já aparece com a máscara depois de matar Shelly fora de cena.</p>

        <p>É curioso como algo tão casual, que foi inserido no filme por acaso, acabou se tornando o símbolo mais icônico da franquia Sexta-Feira 13. Hoje é quase impossível pensar em Jason sem sua icônica máscara de Hóquei.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Kill in a house'
    }
  }
}
</script>