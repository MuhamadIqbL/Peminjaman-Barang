<template>
  <v-app>
    <v-layout>
      <!-- Header -->
      <v-app-bar flat style="background-color: #6246ea;">
        <v-app-bar-title style="color: #fffffe"
          >Peminjaman Barang</v-app-bar-title
        >
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text class="mr-5">
              Admin
              <v-icon v-bind="props" style="color: #2b2c34" right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list width="102" style="background-color: #ff3232">
            <v-btn style="background-color: #ff3232" @click="redirecLogout()" height="20" flat text>
              <v-icon style="background-color: #ff3232" color="#2b2c34" left> mdi-logout </v-icon>
              Logout
            </v-btn>
          </v-list>
        </v-menu>
      </v-app-bar>
      <!-- Menu -->
      <v-navigation-drawer
        style="background-color: #6250ea;"
      >
        <v-list v-for="item in items" :key="item.dashboard">
            <!-- Dashboard -->
            <v-list-item
              class="mb-2 mt-2"
              @click="$router.push({ path: item.dashboard })"
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
            ></v-list-item>
            <v-divider></v-divider>
            <!-- Barang -->
            <v-list-item
              class="mb-2 mt-2"
              @click="$router.push({ path: item.barang })"
              prepend-icon="mdi-archive"
              title="Barang"
            ></v-list-item>
            <v-divider></v-divider>
            <!-- Peminjaman -->
            <v-list-item
              class="mb-2 mt-2"
              @click="$router.push({ path: item.peminjaman })"
              prepend-icon="mdi-minus-box-multiple"
              title="Peminjaman"
            ></v-list-item>
            <v-divider></v-divider>
            <!-- Pengembalian -->
            <v-list-item
              class="mb-2 mt-2"
              @click="$router.push({ path: item.pengembalian })"
              prepend-icon="mdi-checkbox-multiple-marked"
              title="Pengembalian"
            ></v-list-item>
            <v-divider></v-divider>
            <!-- Operator -->
            <v-list-item
              class="mb-2 mt-2"
              @click="$router.push({ path: item.operator })"
              prepend-icon="mdi-account-box"
              title="Operator"
            ></v-list-item>
            <v-divider></v-divider>
            <!-- Close -->
        </v-list>
      </v-navigation-drawer>
      <!-- Views Router -->
      <v-main
        class="d-flex align-center justify-center"
        style="min-height: 300px"
        flat
      >
      <v-card
      class="d-flex justify-start"
      height="556"
      flat
      width="100%"
    >
      <router-view />
    </v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      items: [
        {
          // Dashboard
          dashboard: "/Dashboard",
          //Barang
          barang: "/Barang",
          //peminjaman
          peminjaman: "/Peminjaman",
          //pengembalian
          pengembalian: "/Pengembalian",
          //Operator
          operator: "/Operator",
          //close
        },
      ],
    };
  },
  methods: {
    redirecLogout() {
      this.$router.push("/");
    },
  },
};
</script>
