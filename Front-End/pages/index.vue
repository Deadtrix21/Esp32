<template>
<v-main>
  <v-card class="logo py-4 d-flex justify-center">
      <NuxtLogo />
      <VuetifyLogo />
    </v-card>
    <p>hello world</p>
</v-main>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
export default {
  components: { NuxtLogo, VuetifyLogo },
  name: 'IndexPage',
}
</script>
