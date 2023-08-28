<template>
  <v-container style="background-color: #fffffe">
    <h2 class="ml-5 mt-2">Data Operator</h2>
    <v-card
      class="d-flex justify-end mb-2"
      flat
      tile
      style="background-color: #fffffe"
    >
      <v-btn style="background-color: #58e45e" @click="dialog3 = true">
        <v-icon style="color: #2b2c34" left> mdi-plus-thick </v-icon>
        Tambah Operator
      </v-btn>
    </v-card>
    <!-- Tabel Data API Operator -->
    <v-card>
      <v-table
        fixed-header
        height="458"
        style="background-color: rgb(196, 200, 253)"
      >
        <thead>
          <tr>
            <th class="text-left" style="background-color: #6246ea">ID</th>
            <th class="text-left" style="background-color: #6246ea">
              Username
            </th>
            <th class="text-left" style="background-color: #6246ea">Jabatan</th>
            <th class="text-left" style="background-color: #6246ea">Opsi</th>
          </tr>
        </thead>
        <!-- Table Data API -->
        <tbody>
          <tr v-for="data in operator" :key="data.id">
            <!-- Data API operator -->
            <td>{{ data.id }}</td>
            <td>{{ data.username }}</td>
            <td>{{ data.jabatan }}</td>
            <!-- End Data API Operator -->
            <!-- edit dan delete -->
            <td>
              <!-- EDIT -->
              <v-btn
                @click="GetDataId(data)"
                color="#58e45e"
                style="color: #2b2c34"
              >
                EDIT
              </v-btn>
              <!-- DELETE -->
              <v-btn
                @click="Delete(data)"
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
      </v-table>
    </v-card>
    <!-- Pop Up Add Operator -->
    <v-dialog v-model="dialog3" width="700">
      <v-card flat color="#6246EA" class="pa-3 mt-2" width="650" height="400">
        <v-card-actions>
          <h2 class="mt-3">Tambah Operator</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Add Operator -->
        <div>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.username"
              label="Username"
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
              v-model="form.password"
              type="password"
              label="Password"
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
              v-model="form.jabatan"
              label="Jabatan"
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
        <!-- End Form Add Operator -->
      </v-card>
    </v-dialog>
    <!-- Pop Up Edit -->
    <v-dialog v-model="dialog2" width="700">
      <v-card flat color="#6246EA" class="pa-3 mt-2" width="650" height="400">
        <v-card-actions>
          <h2 class="mt-3">Edit Operator</h2>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Form Edit Operator -->
        <div>
          <v-card
            tile
            elevation="4"
            class="mt-2 rounded d-flex justify-center"
            width="100%"
          >
            <v-text-field
              v-model="form.username"
              label="Useraname"
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
              v-model="form.password"
              type="password"
              label="Password"
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
              v-model="form.jabatan"
              label="Jabatan"
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
        <!-- End Form Edit Operator -->
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
      operator: null,
      totaloperator: null,
      form: {
        id: "",
        username: "",
        password: "",
        jabatan: "",
      },
    };
  },
  mounted() {
    this.GetData();
  },
  methods: {
    // Method Get Data operator
    GetData() {
      fetch("https://fake-json-api.vercel.app/operator")
        .then((response) => response.json())
        .then((data) => {
          this.operator = data;
          this.totaloperator = data.length;
        });
    },
    // Method Get Data By Id operator
    GetDataId(data) {
      this.dialog2 = true;
      this.form.id = data.id;
      this.form.username = data.username;
      this.form.password = data.password;
      this.form.jabatan = data.jabatan;
    },
    // Method Edit operator
    Update(form) {
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Headet (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("username", form.username);
      urlencoded.append("password", form.password);
      urlencoded.append("jabatan", form.jabatan);
      // Header
      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("https://fake-json-api.vercel.app/operator/" + form.id, requestOptions)
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
    // Method Add operator
    Add(form) {
      // Automatic Nilai ID
      const id = this.totaloperator + 1;
      // Request Body Header
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      // Isi Request Body Header (Form)
      const urlencoded = new URLSearchParams();
      urlencoded.append("id", id);
      urlencoded.append("username", form.username);
      urlencoded.append("password", form.password);
      urlencoded.append("jabatan", form.jabatan);
      // Header
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
      };
      // Last Request
      fetch("https://fake-json-api.vercel.app/operator/", requestOptions)
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
    // Method Delete operator
    Delete(data) {
      //Get ID
      const id = (this.form.id = data.id);
      // Header
      const requestOptions = {
        method: "DELETE",
      };
      // Last Request
      fetch("https://fake-json-api.vercel.app/operator/" + id, requestOptions)
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
