<template>
    <v-app style="background-color: #fffffe">
      <v-card-actions class="d-flex justify-center mt-16">
        <v-card
          width="400"
          height="auto"
          style="background-color: #6246ea"
          class="rounded-xl"
          flat
        >
          <v-container class="d-flex justify-center">
            <v-form v-model="isvalid">
              <v-card
                flat
                style="background-color: #6246ea"
                class="ml-3 rounded-lg d-flex justify-center"
                width="250"
              >
                <v-icon style="color: #2b2c34" size="130">mdi-account</v-icon>
              </v-card>
              <v-card
                tile
                elevation="5"
                class="ml-4 mt-5 rounded-lg d-flex justify-center"
                width="250"
              >
                <v-text-field
                  class="ml-3 mr-3"
                  :rules="usernameRules"
                  prepend-icon="mdi-account"
                  v-model="username"
                />
              </v-card>
              <v-card
                tile
                elevation="5"
                class="ml-4 mt-5 rounded-lg d-flex justify-center"
                width="250"
              >
                <v-text-field
                  class="ml-3 mr-3"
                  :rules="passwordRules"
                  :type="showPassword ? 'text' : 'password'"
                  :prepend-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:prepend="handleclick"
                  v-model="password"
              /></v-card>
  
              <v-card-actions class="ml-2 mb-2 mt-4">
                <v-btn
                  color="#FFFFFE"
                  style="background-color: #58e45e"
                  @click="Login()"
                  width="250"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-form>
            <v-dialog v-model="dialog" width="auto">
              <v-card class="ml-2">
                <v-toolbar color="error" title="Login Gagal"></v-toolbar>
                <v-card-text>
                  <div class="">Username/Password Salah</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="dialog = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </v-card>
      </v-card-actions>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        dialog: false,
        isvalid: false,
        showPassword: false,
        usernameRules: [(value) => value != "" || "Username is required"],
        passwordRules: [(value) => value != "" || "Password is required"],
        username: "",
        password: "",
        uname:null,
        pass:null,
        err: null,
      };
    },
    methods: {
      handleclick() {
        this.showPassword = !this.showPassword;
      },
      Login() {
        const username = this.username;
        const password = this.password;
        const uname = this.uname
        const pass = this.pass
        fetch("http://localhost:3000/admin/?username=" + username)
          .then((response) => response.json())
          .then((data) => {
              const a = data[0];
              this.uname = a.username
            // cek password
            fetch("http://localhost:3000/operator/?password=" + password)
              .then((response) => response.json())
              .then((data) => {
                const b = data[0];
                this.pass = b.password
                if(username == uname , password == pass ){
                  this.$router.push("/Dashboard");
                }
              })
              // Jika Password salah
              .catch((err) => {
                this.err = err;
                this.dialog = true;
              });
          })
          //Jika Username tidak ditemukan
          .catch((err) => {
            this.err = err;
            this.dialog = true;
          });
      },
    },
  };
  </script>
  