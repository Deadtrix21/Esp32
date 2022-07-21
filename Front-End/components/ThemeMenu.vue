<template>
  <!--      menu content start -->
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold">
        Dark Mode
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-switch v-model="$vuetify.theme.dark" />
    </v-list-item-action>
  </v-list-item>
  <!--      menu content end -->
</template>


<script>
export default {

}
</script>

<style></style>
