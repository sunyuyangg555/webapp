<template>
  <v-app
    class="app"
    style="
    background: rgba(0,0,0,0);"
  >
    <!--NAVIGATION DRAWER-->
    <v-navigation-drawer
      v-model="drawer"
      mini-variant.sync="mini"
      overlay-color="primary"
      app
      expand-on-hover
      width="220"
      height="100%"
    >
      <v-list nav dense subheader tile class="mt-0 pa-0 py-1">
        <v-list-item dense class="px-2" to="/me">
          <v-list-item-avatar>
            <v-img
              src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="tile ma-0 pa-0">
            <v-list-item-title
              class="font-weight-bold text-overline primary--text mt-1"
            >
              {{ username }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item class="list-item ma-0" dense to="/">
          <v-list-item-icon class="ml-1 mr-1">
            <v-icon color="primary" small>mdi-view-grid</v-icon>
          </v-list-item-icon>
          <v-list-item-title color="#8C93F5" class="font-weight-bold ">{{
            $t("label.menu.dashboard")
          }}</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-for="(setting, ind) in settings"
          :value="false"
          no-action
          ripple
          :key="ind"
        >
          <v-icon
            slot="prependIcon"
            v-html="setting.icon"
            small
            class="ml-1"
            color="primary"
          ></v-icon>
          <template v-slot:activator>
            <v-list-item-title
              color="#8C93F5"
              class="font-weight-bold pa-0 ma-0 "
            >
              {{ $t(setting.title) }}</v-list-item-title
            >
          </template>

          <template v-for="(menu, index) in setting.menus">
            <v-list-item :key="index" :to="menu.to">
              <v-list-item-title color="#8C93F5" class="font-weight-light ">
                <v-icon small color="primary" v-html="menu.icon"></v-icon>
                &nbsp;&nbsp;{{ $t(menu.title) }}</v-list-item-title
              >
            </v-list-item>
          </template>
        </v-list-group>

        <template v-for="(item, i) in items">
          <v-list-item
            class="list-item ma-0"
            dense
            :key="`${i}-${item.route}`"
            v-on:click="nativateToHere(item.route)"
          >
            <v-list-item-icon class="ml-1 mr-1">
              <v-icon color="primary" v-text="item.icon" small></v-icon>
            </v-list-item-icon>
            <v-list-item-title color="#8C93F5" class="font-weight-bold ">{{
              $t(item.text)
            }}</v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-select
          v-model="select"
          :items="locales"
          item-text="locale"
          item-value="lang"
          persistent-hint
          return-object
          single-line
          dense
          class="font-weight-light ma-2"
          @change="changeLanguage(select.lang)"
        ></v-select>
        <a
          target="_blank"
          class="ml-2"
          href="https://www.paypal.com/donate?business=HE3L345WEKRWJ&item_name=Support+Ospic+an+open+source++Hospital+Management+system+developers+team.&currency_code=USD"
        >
          <img
            src="https://img.shields.io/badge/Donate-PayPal-green.svg"
            alt="Donate button"
        /></a>
      </template>
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll dense fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="title font-weight-black primary--text">
        Hospital Management System
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip top color="primary" open-on-hover open-delay="500">
        <template v-slot:activator="{ on }">
          <v-btn
            fab
            v-if="$vuetify.breakpoint.mdAndUp"
            v-on="on"
            @click.stop="syncro()"
            elevation="1"
            x-small
            class="mr-2 primary"
          >
            <v-icon v-on="on" v-if="sync" medium>mdi-progress-clock</v-icon>
            <v-icon v-else medium>mdi-progress-check</v-icon>
          </v-btn>
        </template>

        <span v-if="sync" color="white">{{
          $t("label.tooltip.progresssynchronising")
        }}</span>
        <span v-else color="white">{{ $t("label.tooltip.synchronise") }}</span>
      </v-tooltip>
      <v-tooltip bottom color="primary" open-on-hover open-delay="500">
        <template v-slot:activator="{ on }">
          <v-btn fab v-on="on" x-small elevation="1" class="mr-2 primary">
            <v-icon medium @click="logoutsession">mdi-power</v-icon>
          </v-btn>
        </template>
        <span>{{ $t("label.tooltip.clicktologout") }}</span>
      </v-tooltip>
      <v-btn
        fab
        x-small
        color="primary"
        class="pa-1 "
        elevation="1"
        @click="(dark = !dark), toggle(dark)"
      >
        <v-icon
          medium
          :color="dark ? 'yellow' : 'white'"
          v-html="
            dark
              ? 'mdi-lightbulb-on mdi-rotate-180'
              : 'mdi-lightbulb-outline mdi-rotate-180'
          "
        ></v-icon>
      </v-btn>
    </v-app-bar>
    <a
      class="github-fork-ribbon right-bottom fixed "
      href="https://github.com/ospic/webapp"
      target="_blank"
      rel="noopener noreferrer"
      data-ribbon="Fork me on GitHub"
      title="Fork me on GitHub"
      >Fork me on GitHub</a
    >
    <v-main>
      <v-container
        style="background-color: transparent;"
        class="pa-0 px-3  ma-0 mt-5"
        fluid
      >
        <v-alert v-if="!domain" dense color="green lighten-1" type="info">
          This application is no longer supported in this domain. It has being
          moved to
          <a style="color: blue" href="http://app.ospicx.com/"
            >app.ospicx.com</a
          >
        </v-alert>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer color="transparent">
      <v-progress-linear
        v-if="sync"
        width="100"
        color="teal"
        buffer-value="0"
        value="20"
        stream
      ></v-progress-linear>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default {
  async fetch({ store, params }) {
    // await this.$store.dispatch("getProfile");
  },
  components: {},
  data() {
    return {
      clipped: false,
      mini: true,
      drawer: true,
      fixed: false,
      picture: true,
      dark: false,
      sync: false,
      interval: {},
      value: 0,

      titles: {
        title: "Ospic"
      },
      settings: [
        {
          title: "label.menu.patients",
          icon: "mdi-account-multiple",
          menus: [
            {
              title: "label.menu.appointmentandschedule",
              icon: "mdi-alarm-multiple",
              to: "/appointments",
              subtitle: "Lorem ipsum dolor sit de amet ..."
            },
            {
              title: "label.menu.patients",
              to: "/patients",
              icon: "mdi-account-multiple"
            },
            {
              title: "label.menu.opdcenter",
              icon: "mdi-alpha-o-circle",
              to: "/opd",
              subtitle: "Lorem ipsum dolor sit de amet.."
            },
            {
              title: "label.menu.ipdcenter",
              icon: "mdi-bed-queen",
              to: "/ipd",
              subtitle: "Lorem ipsum dolor sit de amet.."
            }
          ]
        },
        {
          title: "label.menu.inventoryandstock",
          icon: "mdi-store-24-hour",
          menus: [
            {
              title: "label.titles.pharmacy",
              to: "/inventory/",
              icon: "mdi-pharmacy"
            },
            {
              title: "label.titles.medicine",
              to: "/inventory/medicine",
              icon: "mdi-pill"
            },
            {
              title: "label.titles.bloodbank",
              to: "/inventory/bloods",
              icon: "mdi-blood-bag"
            },
            {
              title: "label.titles.wards",
              to: "/inventory/ward",
              icon: "mdi-home-floor-1"
            },
            {
              title: "label.titles.beds",
              to: "/inventory/bed",
              icon: "mdi-bunk-bed-outline"
            }
          ]
        },
        {
          title: "label.menu.laboratory",
          icon: "mdi-octagon",
          menus: [
            {
              title: "label.menu.laboratory",
              icon: "mdi-octagon",
              to: "/laboratory",
              subtitle: "Lorem ipsum dolor sit de amet.."
            },
            {
              title: "label.menu.radiology",
              icon: "mdi-radioactive",
              to: "/laboratory/radiology",
              subtitle: "Lorem ipsum dolor sit de amet.."
            }
          ]
        },
        {
          title: "label.menu.organization",
          icon: "mdi-store-24-hour",
          menus: [
            {
              title: "label.menu.staff",
              to: "/staffs",
              icon: "mdi-account-hard-hat"
            },
            {
              title: "label.titles.departments",
              to: "/departments",
              icon: "mdi-office-building"
            },
            {
              title: "label.titles.services",
              to: "/services",
              icon: "mdi-office-building"
            }
          ]
        },
        {
          title: "label.menu.finance",
          icon: "mdi-finance",
          menus: [
            {
              title: "label.menu.finance",
              icon: "mdi-finance",
              to: "/finance",
              subtitle: "Lorem ipsum dolor sit de amet.."
            }
          ]
        }
      ],

      items: [
        {
          text: "label.menu.stations",
          icon: "mdi-adjust",
          route: "stations",
          subtitle: "Lorem ipsum dolor sit de amet.."
        },
        {
          text: "label.menu.calendar",
          icon: "mdi-calendar-month",
          route: "calendar",
          subtitle: "Lorem ipsum dolor sit de amet.."
        },
        {
          text: "label.menu.reports",
          icon: "mdi-clipboard-file",
          route: "reports",
          subtitle: "Lorem ipsum dolor sit de amet.."
        },
        {
          text: "label.tooltip.settingsandconfigurations",
          icon: "mdi-cog-outline",
          route: "settings"
        }
      ],
      actions: [
        // { title: "View profile", icon: "mdi-account-circle" },
        { title: "Settings", icon: "mdi-cog" },
        { title: "Help", icon: "mdi-help" },
        { title: "Logout", icon: "mdi-logout-variant" }
      ],
      select: { locale: "English", lang: "en" },
      locales: [
        {
          locale: "English",
          lang: "en"
        },
        {
          locale: "Kiswahili",
          lang: "sw"
        },
        {
          locale: "French",
          lang: "fr"
        },
        {
          locale: "Arab",
          lang: "ar"
        }
      ],
      miniVariant: false,
      right: true,
      shaped: true,
      collapseOnScroll: true,
      rightDrawer: false,
      year: new Date().getFullYear(),
      userdata: {
        username: "Elirehema Paul"
      }
    };
  },

  methods: {
    selectedItemAction: function(item) {
      switch (item) {
        case 0:
          //this.$router.push("/profile");
          break;
        case 2:
          localStorage.removeItem("qAccessToken");
          localStorage.removeItem("uuId");
          sessionStorage.clear();
          this.$router.push("/");
          break;
      }
    },
    toggledrawer: function() {
      this.drawer = !this.drawer;
    },
    logoutsession: function() {
      this.$store.dispatch("_clear_local_storage_and_sign_out");
      this.drawer = !this.drawer;
    },
    changemode: function() {
      this.dark = !this.dark;
      this.$vuetify.theme.dark = this.dark;
    },
    nativateToHere(id) {
      this.$router.push("/" + id);
    },
    toggle(mode) {
      if (`${mode}` === "true") {
        this.$vuetify.theme.dark = true;
        this.$store.dispatch("change_to_dark");
        document.body.style.background = "#1d3333";
        this.dark = true;
      } else {
        this.$store.dispatch("change_to_light");
        this.$vuetify.theme.dark = false;
        this.dark = false;
        document.body.style.backgroundImage =
          "url(https://cdn.hipwallpaper.com/i/50/79/MSsZP2.jpg)";
      }
    },

    syncro: async function() {
      const vm = this;
      vm.sync = !vm.sync;
      await Promise.all([
        vm.$store.dispatch("retrievepatients"),
        vm.$store.dispatch("retrievephysicians")
      ]).then(function() {
        console.log("Loading complete...");
      });
      setTimeout(() => {
        vm.sync = !vm.sync;
      }, 2000);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    username() {
      return window.localStorage.getItem("ospic.username");
    },
    email() {
      return window.localStorage.getItem("ospic.email");
    },
    domain() {
      return window.location.hostname === "app.ospicx.com";
    }
  }
};
</script>
<style scoped>
.list-item .tile {
  color: #566573;
}
.list-item:hover .tile:hover {
  color: #4a56ff;
}
</style>
