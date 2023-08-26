<template>
  <v-container style="background-color: #fffffe">
    <h2 class="mt-2">Data Peminjaman</h2>
    <v-card
      class="d-flex justify-end mb-2"
      flat
      tile
      style="background-color: #fffffe"
    >
      <v-btn style="background-color: #58e45e" @click="dialog3 = true">
        <v-icon style="color: #2b2c34" left> mdi-plus-thick </v-icon>
        Tambah Peminjaman
      </v-btn>
    </v-card>
    <!-- All Table Data API -->
    <v-card>
      <v-table
        fixed-header
        height="448"
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
            <th class="text-left" style="background-color: #6246ea">Status</th>
            <th class="text-left" style="background-color: #6246ea">Opsi</th>
          </tr>
        </thead>
        <!-- Table Data API-->
        <tbody>
          <tr v-for="peminjaman in peminjaman" :key="peminjaman.id">
            <!-- Data API peminjaman -->
            <td>{{ peminjaman.id }}</td>
            <td>{{ peminjaman.nama_brg }}</td>
            <td>{{ peminjaman.nama_operator }}</td>
            <td>{{ peminjaman.nama_peminjam }}</td>
            <td>{{ peminjaman.kelas_peminjam }}</td>
            <td>{{ peminjaman.jurusan_peminjam }}</td>
            <td>{{ peminjaman.tanggal_pinjam }}</td>
            <td>{{ peminjaman.status }}</td>
            <!-- End Data API peminjaman -->
            <!-- edit dan delete -->
            <td>
              <!-- EDIT -->
              <v-btn
                @click="GetDataId(peminjaman)"
                color="#58e45e"
                style="color: #2b2c34"
                width="85"
                class="mt-1"
              >
                EDIT
              </v-btn>
              <!-- DELETE -->
              <v-btn
                @click="Delete(peminjaman)"
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
    <!-- Pop Up Add Peminjaman -->
    <v-dialog v-model="dialog3" width="700">
      <v-card
        flat
        color="#6246EA"
        class="pa-5 mx-auto"
        width="650"
        height="auto"
      >
        <v-card-actions>
          <h2>Tambah Peminjaman</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Add Peminjaman -->
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
              v-model="nama_barang"
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
              v-model="tanggal_pinjam"
              label="Tanggal Peminjam"
              class="ml-3 mr-3"
              disabled
            />
          </v-card>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="status"
              label="Status"
              class="ml-3 mr-3"
              disabled
            />
          </v-card>
          <v-btn
            class="mt-2"
            width="200"
            type="submit"
            color="#58e45e"
            style="color: #2b2c34"
            @click="Add(form, form_brg)"
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
        <!-- End Form Add Peminjaman -->
      </v-card>
    </v-dialog>
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
          <h2>Edit Peminjaman</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Edit Peminjaman -->
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
              hint="Note : Merubah Nama Pinjaman Barang Yang Dipinjam Tidak Akan Mengurangi Stok Barang"
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
            <v-select
              class="ml-3 mr-3"
              v-model="form.status"
              :items="['Sudah Dikembalikan', 'Belum Dikembalikan']"
              label="Status"
            ></v-select>
          </v-card>
          <v-btn
            class="mt-2"
            width="200"
            type="submit"
            color="#58e45e"
            style="color: #2b2c34"
            @click="Update(form, form_brg)"
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
        <!-- End Form Edit Peminjaman -->
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
      peminjaman: null,
      barang: null,
      pengembalian: null,
      totalpeminjaman: null,
      item_barang: null,
      item_operator : null,
      totalpengembalian: null,
      tanggal_pinjam: null,
      id: "Otomatis",
      status: "Belum Dikembalikan",
      nama_operator: "",
      nama_barang: "",
      form_brg: {
        id: "",
        nama_brg: "",
        jenis_brg: "",
        stock: "",
      },
      form: {
        id: "",
        nama_brg: "",
        nama_operator: "",
        nama_peminjam: "",
        kelas_peminjam: "",
        jurusan_peminjam: "",
        tanggal_pinjam: "",
        status: "",
      },
    };
  },
  mounted() {
    this.GetData();
  },
  methods: {
    // Method Get Data Peminjaman
    GetData() {
      //Peminjaman
      fetch("http://localhost:3000/peminjaman/")
        .then((response) => response.json())
        .then((data) => {
          this.peminjaman = data;
          this.totalpeminjaman = data.length;
          const today = new Date();
          const yyyy = today.getFullYear();
          let mm = today.getMonth() + 1; // Months start at 0!
          let dd = today.getDate();
          if (dd < 10) dd = "0" + dd;
          if (mm < 10) mm = "0" + mm;
          const date = dd + "-" + mm + "-" + yyyy;
          this.tanggal_pinjam = date;
        })
        .catch((err) => {
          console.error(err);
        });
      //Pengembalian
      fetch("http://localhost:3000/pengembalian")
        .then((response) => response.json())
        .then((data) => {
          this.pengembalian = data;
          this.totalpengembalian = data.length;
        })
        .catch((err) => {
          console.error(err);
        });
      //Barang
      fetch("http://localhost:3000/barang/")
        .then((response) => response.json())
        .then((data) => {
          this.item_barang = data;
        })
        .catch((err) => {
          console.error(err);
        });
      //Operator
      fetch("http://localhost:3000/operator/")
        .then((response) => response.json())
        .then((data) => {
          this.item_operator = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Method Get Data By Id Peminjaman
    GetDataId(peminjaman) {
      this.dialog2 = true;
      this.form.id = peminjaman.id;
      this.form.nama_brg = peminjaman.nama_brg;
      this.form.nama_operator = peminjaman.nama_operator;
      this.form.nama_peminjam = peminjaman.nama_peminjam;
      this.form.kelas_peminjam = peminjaman.kelas_peminjam;
      this.form.jurusan_peminjam = peminjaman.jurusan_peminjam;
      this.form.tanggal_pinjam = peminjaman.tanggal_pinjam;
      this.form.status = peminjaman.status;
      fetch("http://localhost:3000/barang/?nama_brg=" + peminjaman.nama_brg)
        .then((response) => response.json())
        .then((data) => {
          this.barang = data[0];
          this.form_brg.id = this.barang.id;
          this.form_brg.nama_brg = this.barang.nama_brg;
          this.form_brg.jenis_brg = this.barang.jenis_brg;
          this.form_brg.stock = this.barang.stock;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Method Edit Peminjaman
    Update(form, form_brg) {
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
      urlencoded.append("status", form.status);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/peminjaman/" + form.id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
          const status = form.status;
          // Function Add Pengembalian
          if (status == "Sudah Dikembalikan") {
            this.AddPengembalian(form, form_brg);
          }
        })
        .catch((err) => {
          console.error(err);
          this.EditAddGagal = true;
        });
    },
    // Method Add Peminjaman
    Add(form, form_brg) {
      // Auto Nilai ID
      const id = this.totalpeminjaman + 1;
      // Auto Nilai Status
      const status = this.status;
      // Get Nilai Nama Barang
      const nama_barang = this.nama_barang;
      // Auto Nilai Tanggal Pinjam
      const tanggal_pinjam = this.tanggal_pinjam;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Header (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", id);
      urlencoded.append("nama_brg", nama_barang);
      urlencoded.append("nama_operator", form.nama_operator);
      urlencoded.append("nama_peminjam", form.nama_peminjam);
      urlencoded.append("kelas_peminjam", form.kelas_peminjam);
      urlencoded.append("jurusan_peminjam", form.jurusan_peminjam);
      urlencoded.append("tanggal_pinjam", tanggal_pinjam);
      urlencoded.append("status", status);
      // Header
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/peminjaman/", requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
          // Get Data Barang Yang Akan di Update Stock
          fetch("http://localhost:3000/barang/?nama_brg=" + nama_barang)
            .then((response) => response.json())
            .then((data) => {
              this.barang = data[0];
              this.form_brg.id = this.barang.id;
              this.form_brg.nama_brg = this.barang.nama_brg;
              this.form_brg.jenis_brg = this.barang.jenis_brg;
              this.form_brg.stock = this.barang.stock;
              this.KurangStokBarang(form_brg);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          this.EditAddGagal = true;
          console.error(err);
        });
    },
    // Method Delete
    Delete(peminjaman) {
      //Get ID
      const id = (this.form.id = peminjaman.id);
      // Header
      const requestOptions = {
        method: "DELETE",
      };
      // Last Request
      fetch("http://localhost:3000/peminjaman/" + id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.GetData();
          this.EditAddOk = true;
        })
        .catch((err) => {
          this.EditAddGagal = true;
          console.error(err);
        });
    },
    // Method Add Pengembalian Saat Status Peminjaman "Sudah Dikembalikan"
    AddPengembalian(form, form_brg) {
      // Automatic Nilai ID
      const id = this.totalpengembalian + 1;
      // Automatic Nilai Tanggal Kembali
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      const tanggal_kembali = dd + "-" + mm + "-" + yyyy;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Header (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", id);
      urlencoded.append("nama_brg", form.nama_brg);
      urlencoded.append("nama_operator", form.nama_operator);
      urlencoded.append("nama_peminjam", form.nama_peminjam);
      urlencoded.append("kelas_peminjam", form.kelas_peminjam);
      urlencoded.append("jurusan_peminjam", form.jurusan_peminjam);
      urlencoded.append("tanggal_pinjam", form.tanggal_pinjam);
      urlencoded.append("tanggal_kembali", tanggal_kembali);
      // Header
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/pengembalian/", requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.GetData();
          this.TambahStokBarang(form_brg);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // Method Mengurangi Stok Barang
    KurangStokBarang(form_brg) {
      // Auto Update Nilai Stock
      const stock = this.form_brg.stock - 1;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Headet (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", form_brg.id);
      urlencoded.append("nama_brg", form_brg.nama_brg);
      urlencoded.append("jenis_brg", form_brg.jenis_brg);
      urlencoded.append("stock", stock);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/barang/" + form_brg.id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
        })
        .catch((err) => {
          console.error(err);
          this.EditAddGagal = true;
        });
    },
    // Method Menambahkan Stok Barang
    TambahStokBarang(form_brg) {
      // Auto Update Nilai Stock dan Nilai Stok di convert String->Interger
      const stock = parseInt(this.form_brg.stock) + 1;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Headet (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", form_brg.id);
      urlencoded.append("nama_brg", form_brg.nama_brg);
      urlencoded.append("jenis_brg", form_brg.jenis_brg);
      urlencoded.append("stock", stock);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("http://localhost:3000/barang/" + form_brg.id, requestOptions)
        .then((response) => {
          console.log(response.statusText);
          this.EditAddOk = true;
          this.GetData();
        })
        .catch((err) => {
          console.error(err);
          this.EditAddGagal = true;
        });
    },
  },
};
</script>
