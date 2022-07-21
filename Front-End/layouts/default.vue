<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
            
            <!--
                ? This is the Title and Close Button
                ! Start
            -->
            <v-list>
                <section class="d-flex flex-row-reverse">
                    <div class="mx-4">
                        <v-btn icon @click.stop="mini = !mini" v-show="!mini"><v-icon>mdi-chevron-left</v-icon></v-btn>
                    </div>
                    <v-list-item v-show="!mini">
                        <v-list-item-content>
                            <v-list-item-title class="text-h6">
                                Application
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                subtext
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </section>
                <v-divider v-show="!mini"></v-divider>
            </v-list>
            <!--
                ? This is the Title and Close Button
                ! End
            -->
               
    <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>
    </v-app>
</template>


<script>

export default {
    data () {
      return {
        img:null,
        mini: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
      }
    },
}
</script>



<style>
::-webkit-scrollbar {
    display: none;
}
      
</style>