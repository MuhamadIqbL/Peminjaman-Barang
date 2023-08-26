<template>
  <v-container style="background-color: #fffffe">
    <h2 class="mt-2">Data Pengembalian</h2>
    <v-card
      class="d-flex justify-end mb-2"
      flat
      tile
      style="background-color: #fffffe"
    >
    </v-card>
    <!-- All Table Data API -->
    <v-card>
      <v-table
        fixed-header
        height="485"
        style="background-color: rgb(196, 200, 253)"
      >
        <thead>
          <tr>
            <th class="text-left" style="background-color: #6246ea">No</th>
            <th class="text-left" style="background-color: #6246ea">
              Nama Barang
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Nama Operator
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Nama Peminjam
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Kelas Peminjam
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Jurusan Peminjam
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Tanggal Peminjam
            </th>
            <th class="text-left" style="background-color: #6246ea">
              Tanggal Kembali
            </th>
            <th class="text-left" style="background-color: #6246ea">Opsi</th>
          </tr>
        </thead>
        <!-- Table Data API-->
        <tbody>
          <tr v-for="data in pengembalian" :key="data.id">
            <!-- Data API pengembalian -->
            <td>{{ data.id }}</td>
            <td>{{ data.nama_brg }}</td>
            <td>{{ data.nama_operator }}</td>
            <td>{{ data.nama_peminjam }}</td>
            <td>{{ data.kelas_peminjam }}</td>
            <td>{{ data.jurusan_peminjam }}</td>
            <td>{{ data.tanggal_pinjam }}</td>
            <td>{{ data.tanggal_kembali }}</td>
            <!-- End Data API pengembalian -->
            <!-- edit dan delete -->
            <td>
              <!-- EDIT -->
              <v-btn
                @click="GetDataId(data)"
                color="#58e45e"
                style="color: #2b2c34"
                width="85"
                class="mt-1"
              >
                EDIT
              </v-btn>
              <!-- DELETE -->
              <v-btn
                @click="Delete(data)"
                class="mt-1"
                color="#ff3232"
                style="color: #2b2c34"
              >
                HAPUS
              </v-btn>
            </td>
            <!-- end edit dan delete -->
          </tr>
        </tbody>
      </v-table>
    </v-card>
    <!-- Pop Up Edit -->
    <v-dialog v-model="dialog2" width="700">
      <v-card
        flat
        color="#6246EA"
        class="pa-5 mx-auto"
        width="650"
        height="auto"
      >
        <v-card-actions>
          <h2>Edit Pengembalian</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Edit Pengembalian -->
        <div>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-select
              class="ml-3 mr-3"
              :items="item_barang"
              item-title="nama_brg"
              v-model="form.nama_brg"
              label="Nama Barang"
            ></v-select>
          </v-card>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-select
              class="ml-3 mr-3"
              :items="item_operator"
              item-title="username"
              v-model="form.nama_operator"
              label="Nama Operator"
            ></v-select>
          </v-card>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.nama_peminjam"
              label="Nama Peminjam"
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
              v-model="form.kelas_peminjam"
              label="Kelas Peminjam"
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
              v-model="form.jurusan_peminjam"
              label="Jurusan Peminjam"
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
              v-model="form.tanggal_pinjam"
              label="Tanggal Peminjam"
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
              v-model="form.tanggal_kembali"
              label="Tanggal Kembali"
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
        <!-- End Form Edit Pengembalian -->
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
        @click="(EditAddOk = false), (dialog2 = false)"
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
        @click="(EditAddGagal = false), (dialog2 = false)"
      ></v-btn>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog2: false,
      EditAddOk: false,
      EditAddGagal: false,
      pengembalian: null,
      item_barang: null,
      item_operator: null,
      form: {
        id: "",
        nama_brg: "",
        nama_operator: "",
        nama_peminjam: "",
        kelas_peminjam: "",
        jurusan_peminjam: "",
        tanggal_pinjam: "",
        tanggal_kembali: "",
      },
    };
  },
  mounted() {
    this.GetData();
  },
  methods: {
    // Method Get Data Pengembalian
    GetData() {
      fetch("http://localhost:3000/pengembalian")
        .then((response) => response.json())
        .then((data) => {
          this.pengembalian = data;
        })
        .catch((err) => {
          console.error(err);
        });
        fetch("http://localhost:3000/barang")
        .then((response) => response.json())
        .then((data) => {
          this.item_barang = data;
        })
        .catch((err) => {
          console.error(err);
        });fetch("http://localhost:3000/operator")
        .then((response) => response.json())
        .then((data) => {
          this.item_operator = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Method Get Data By Id Pengembalian
    GetDataId(data) {
      this.dialog2 = true;
      this.form.id = data.id;
      this.form.nama_brg = data.nama_brg;
      this.form.nama_operator = data.nama_operator;
      this.form.nama_peminjam = data.nama_peminjam;
      this.form.kelas_peminjam = data.kelas_peminjam;
      this.form.jurusan_peminjam = data.jurusan_peminjam;
      this.form.tanggal_pinjam = data.tanggal_pinjam;
      this.form.tanggal_kembali = data.tanggal_kembali;
    },
    // Method Edit Pengembalian
    Update(form) {
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Headet (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("nama_brg", form.nama_brg);
      urlencoded.append("nama_operator", form.nama_operator);
      urlencoded.append("nama_peminjam", form.nama_peminjam);
      urlencoded.append("kelas_peminjam", form.kelas_peminjam);
      urlencoded.append("jurusan_peminjam", form.jurusan_peminjam);
      urlencoded.append("tanggal_pinjam", form.tanggal_pinjam);
      urlencoded.append("tanggal_kembali", form.tanggal_kembali);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/pengembalian/" + form.id, requestOptions)
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
    // Method Delete Pengembalian
    Delete(data) {
      //Get ID
      const id = (this.form.id = data.id);
      // Header
      const requestOptions = {
        method: "DELETE",
      };
      // Last Request
      fetch("http://localhost:3000/pengembalian/" + id, requestOptions)
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
