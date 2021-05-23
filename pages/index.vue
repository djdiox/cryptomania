<template>
  <v-container>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Dashboard of Crypto Currencies / Courses
        </v-card-title>
        <v-card-text>
          <p>Register or <a href="#" @click="$auth.loginWith('auth0')">Login</a> to continue</p>
          <span v-if="$nuxt.isOffline">we are offline &#128556;</span>
          <span v-if="$nuxt.isOnline">we are online &#128512;</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/coins"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>    
  <!-- <app-chart :points="points"></app-chart> -->
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Chart from '~/components/Chart.vue'
export default {
  components: {
    Logo,
    VuetifyLogo,
    // appChart: Chart
  },
  data: () => {
    return {
      // Data points for the chart
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 7 },
        { x: 2, y: 3 },
        { x: 3, y: 10 }
      ]
    }
  },
  created(){
  }
}
</script>
