<template>
  <v-container style="background-color: #fffffe">
    <h2 class="mt-2">Data Barang</h2>
    <v-card
      class="d-flex justify-end mb-2"
      flat
      tile
      style="background-color: #fffffe"
    >
      <v-btn style="background-color: #58e45e" @click="dialog3 = true">
        <v-icon style="color: #2b2c34" left> mdi-plus-thick </v-icon>
        Tambah Barang
      </v-btn>
    </v-card>
    <!-- Tabel Data API Barang -->
    <v-card>
      <v-table
        fixed-header
        height="448"
        style="background-color: rgb(196, 200, 253)"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" style="background-color: #6250ea">
                No Barang
              </th>
              <th class="text-left" style="background-color: #6250ea">
                Nama Barang
              </th>
              <th class="text-left" style="background-color: #6250ea">
                Jenis Barang
              </th>
              <th class="text-left" style="background-color: #6250ea">
                Stok Barang
              </th>
              <th class="text-left" style="background-color: #6250ea">Opsi</th>
            </tr>
          </thead>
          <!-- Table Data API -->
          <tbody>
            <tr v-for="product in product" :key="product.id">
              <!-- Data API product -->
              <td>{{ product.id }}</td>
              <td>{{ product.nama_brg }}</td>
              <td>{{ product.jenis_brg }}</td>
              <td>{{ product.stock }}</td>
              <!-- End Data API Barang -->
              <!-- edit dan delete -->
              <td>
                <!-- EDIT -->
                <v-btn
                  @click="GetDataId(product)"
                  color="#58e45e"
                  style="color: #2b2c34"
                >
                  EDIT
                </v-btn>
                <!-- DELETE -->
                <v-btn
                  @click="Delete(product)"
                  class="ml-2"
                  color="#ff3232"
                  style="color: #2b2c34"
                >
                  HAPUS
                </v-btn>
              </td>
              <!-- end edit dan delete -->
            </tr>
          </tbody>
        </template>
      </v-table>
    </v-card>
    <!-- Pop Up Add Barang -->
    <v-dialog v-model="dialog3" width="700">
      <v-card
        flat
        color="#6246EA"
        class="pa-3 mt-2 mx-auto"
        width="650"
        height="400"
      >
        <v-card-actions>
          <h2 class="mt-3 ml-7">Add Barang</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Add Barang -->
        <div>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.nama_brg"
              label="Nama Barang"
              class="ml-3 mr-3"
            />
          </v-card>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.jenis_brg"
              label="Jenis Barang"
              class="ml-3 mr-3"
            />
          </v-card>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.stock"
              label="Stok Barang"
              class="ml-3 mr-3"
            />
          </v-card>
          <v-btn
            class="mt-2"
            width="200"
            type="submit"
            color="#58e45e"
            style="color: #2b2c34"
            @click="Add(form)"
          >
            Simpan
          </v-btn>
          <v-btn
            class="mt-2 ml-2"
            width="150"
            color="#ff3232"
            style="color: #2b2c34"
            @click="dialog3 = false"
          >
            Kembali
          </v-btn>
        </div>
        <!-- End Form Add Barang -->
      </v-card>
    </v-dialog>
    <!-- Pop Up Edit -->
    <v-dialog v-model="dialog2" width="700">
      <v-card color="#6246EA" flat>
        <v-card-actions>
          <h2 class="mt-3 ml-7">Edit Barang</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Edit Barang -->
        <v-card
          flat
          color="#6246EA"
          class="pa-3 mt-2 mx-auto"
          width="650"
          height="400"
        >
          <div>
            <v-card
              tile
              elevation="4"
              class="mt-2 rounded d-flex justify-center"
              width="100%"
            >
              <v-text-field
                v-model="form.nama_brg"
                label="Nama Barang"
                class="ml-3 mr-3"
              />
            </v-card>
            <v-card
              tile
              elevation="4"
              class="mt-2 rounded d-flex justify-center"
              width="100%"
            >
              <v-text-field
                v-model="form.jenis_brg"
                label="Jenis Barang"
                class="ml-3 mr-3"
              />
            </v-card>
            <v-card
              tile
              elevation="4"
              class="mt-2 rounded d-flex justify-center"
              width="100%"
            >
              <v-text-field
                v-model="form.stock"
                label="Stok Barang"
                class="ml-3 mr-3"
              />
            </v-card>
            <v-btn
              class="mt-2"
              width="200"
              type="submit"
              color="#58e45e"
              style="color: #2b2c34"
              @click="Update(form)"
            >
              Simpan
            </v-btn>
            <v-btn
              class="mt-2 ml-2"
              width="150"
              color="#ff3232"
              style="color: #2b2c34"
              @click="dialog2 = false"
            >
              Kembali
            </v-btn>
          </div>
          <!-- End Form Add Barang -->
        </v-card>
      </v-card>
    </v-dialog>
    <!-- PopUp Edit dan Add Berhasil -->
    <v-dialog v-model="EditAddOk" width="auto">
      <v-btn
        class="ma-4"
        width="60"
        height="60"
        color="#58e45e"
        icon="mdi-check"
        @click="(EditAddOk = false), (dialog2 = false), (dialog3 = false)"
      ></v-btn>
    </v-dialog>
    <!-- PopUp Edit dan Add Gagal -->
    <v-dialog v-model="EditAddGagal" width="auto">
      <v-btn
        class="ma-4"
        width="60"
        height="60"
        color="#ff3232"
        icon="mdi-cancel"
        @click="(EditAddGagal = false), (dialog2 = false), (dialog3 = false)"
      ></v-btn>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog2: false,
      dialog3: false,
      EditAddOk: false,
      EditAddGagal: false,
      product: null,
      totalbarang: null,
      id: "Otomatis",
      form: {
        id: "",
        nama_brg: "",
        jenis_brg: "",
        stock: "",
      },
    };
  },
  mounted() {
    this.GetData();
  },
  methods: {
    // Method Get Data Barang
    GetData() {
      fetch("http://localhost:3000/barang")
        .then((response) => response.json())
        .then((data) => {
          this.product = data;
          this.totalbarang = data.length;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Method Get Data By Id Barang
    GetDataId(product) {
      this.dialog2 = true;
      this.form.id = product.id;
      this.form.nama_brg = product.nama_brg;
      this.form.jenis_brg = product.jenis_brg;
      this.form.stock = product.stock;
    },
    // Method Edit Barang
    Update(form) {
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Headet (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("nama_brg", form.nama_brg);
      urlencoded.append("jenis_brg", form.jenis_brg);
      urlencoded.append("stock", form.stock);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/barang/" + form.id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
        })
        .catch((err) => {
          this.EditAddGagal = true;
          console.error(err);
        });
    },
    // Method Add Barang
    Add(form) {
      // Automatic Nilai ID
      const id = this.totalbarang + 1;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Header (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", id);
      urlencoded.append("nama_brg", form.nama_brg);
      urlencoded.append("jenis_brg", form.jenis_brg);
      urlencoded.append("stock", form.stock);
      // Header
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/barang/", requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
        })
        .catch((err) => {
          this.EditAddGagal = true;
          console.error(err);
        });
    },
    // Method Delete Barang
    Delete(product) {
      //Get ID
      const id = (this.form.id = product.id);
      // Header
      const requestOptions = {
        method: "DELETE",
      };
      // Last Request
      fetch("http://localhost:3000/barang/" + id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.GetData();
          this.EditAddOk = true;
        })
        .catch((err) => {
          console.error(err);
          this.EditAddGagal = true;
        });
    },
  },
};
</script>
