<template>
    <div>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'products' }">Products</router-link>

        <v-navigation-drawer
            id="app-drawer"

            app
            dark
            floating
            persistent
            mobile-break-point="991"
            width="260"
          >

              <v-layout
                class="fill-height"
                tag="v-list"
                column
              >
                <v-list-tile avatar>
                  <v-list-tile-avatar
                    color="white"
                  >
                  </v-list-tile-avatar>
                  <v-list-tile-title class="title">
                    Vuetify MD
                  </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile
                  v-if="responsive"
                >
                  <v-text-field
                    class="purple-input search-input"
                    label="Search..."
                    color="purple"
                  />
                </v-list-tile>
                <v-list-tile
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.to"
                  :active-class="color"
                  avatar
                  class="v-list-item"
                >
                  <v-list-tile-action>
                    <v-icon>{{ link.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title
                    v-text="link.text"
                  />
                </v-list-tile>
              </v-layout>

          </v-navigation-drawer>

        <v-content>
            <div id="core-view">
              <v-fade-transition mode="out-in">
                <router-view></router-view>
              </v-fade-transition>
            </div>
        </v-content>

    </div>

</template>

<script>

    import Counter from './Counter.vue'
    
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
          logo: './img/vuetifylogo.png',
              links: [
                {
                  to: '/',
                  icon: 'mdi-view-dashboard',
                  text: 'Home'
                },
                {
                  to: '/products',
                  icon: 'mdi-account',
                  text: 'Products'
                }
              ],
              responsive: false
        }),
        computed : {
            color () {
                return "success";
            }
        },
        components : {
            Counter
        }
    }
    
</script>

<style lang="scss">
  #app-drawer {
    .v-list__tile {
      border-radius: 4px;

      &--buy {
        margin-top: auto;
        margin-bottom: 17px;
      }
    }

    .v-image__image--contain {
      top: 9px;
      height: 60%;
    }

    .search-input {
      margin-bottom: 30px !important;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
</style>