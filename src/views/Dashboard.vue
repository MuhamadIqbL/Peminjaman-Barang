<template>
  <v-card
    class="d-flex justify-start ml-1"
    flat
    tile
    width="auto"
    height="auto"
    style="background-color: #fffffe"
  >
    <div>
      <h2 class="ml-5 mt-2">Dashboard</h2>
      <v-card class="mt-5 ml-5 d-flex" width="auto" height="auto" flat>
        <v-card width="335" height="140" style="background-color:rgb(196, 200, 253);">
          <v-card-title
            class="subtitle-1"
            flat
            style="background-color: #6250ea"
          >
            Data Barang
          </v-card-title>
          <v-divider></v-divider>
          <v-card flat style="background-color:rgb(196, 200, 253);" class="d-flex ml-5 mt-3" >
            <v-icon icon="mdi-archive" style="color: #2b2c34" size="50" left>
              
            </v-icon>
            <h2 class="ml-3 mt-2">{{ totalbarang }} Barang</h2>
          </v-card>
        </v-card>
        <v-card
          class="ml-8"
          width="335"
          height="140"
          style="background-color:rgb(196, 200, 253);"
        >
          <v-card-title
            class="subtitle-1"
            style="background-color: #6250ea"
          >
            Data Peminjaman
          </v-card-title>
          <v-divider></v-divider>
          <v-card style="background-color:rgb(196, 200, 253);" flat class="d-flex ml-5 mt-3">
            <v-icon style="color: #2b2c34" size="50" left>
              mdi-minus-box-multiple
            </v-icon>
            <h2 class="ml-3 mt-2">{{ totalpeminjaman }} Peminjaman</h2>
          </v-card>
        </v-card>
        <v-card
          class="ml-8"
          width="335"
          height="140"
          style="background-color:rgb(196, 200, 253);"
        >
          <v-card-title
            class="subtitle-1"
            style="background-color: #6250ea"
          >
            Data Pengembalian
          </v-card-title>
          <v-divider></v-divider>
          <v-card flat class="d-flex ml-5 mt-3" style="background-color:rgb(196, 200, 253);">
            <v-icon
              icon="mdi-checkbox-multiple-marked"
              style="color: #2b2c34"
              size="50"
              left
            >
            </v-icon>
            <h2 class="ml-3 mt-2">{{ totalpengembalian }} Pengembalian</h2>
          </v-card>
        </v-card>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      totalbarang: null,
      totalpeminjaman: null,
      totalpengembalian: null,
    };
  },
  mounted() {
    this.GetData();
  },
  methods: {
    // Method Get Data
    GetData() {
      //Barang
      fetch("http://localhost:3000/barang")
        .then((response) => response.json())
        .then((data) => {
          this.totalbarang = data.length;
        })
        .catch((err) => {
          console.error(err);
        });
      //Peminjaman
      fetch("http://localhost:3000/peminjaman")
        .then((response) => response.json())
        .then((data) => {
          this.totalpeminjaman = data.length;
        })
        .catch((err) => {
          console.error(err);
        });
      //Pengembalian
      fetch("http://localhost:3000/pengembalian")
        .then((response) => response.json())
        .then((data) => {
          this.totalpengembalian = data.length;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
