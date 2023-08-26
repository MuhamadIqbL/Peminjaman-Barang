<template>
    <v-app id="app" style="background-color:#FFFFFE">
        <div height="659" fixed-header >
            <v-toolbar flat style="background-color:#6246EA" class="rounded-lg mt-2 ml-2 mr-2 mb-2">

                <v-toolbar-title style="color:#FFFFFE">Peminjaman Barang</v-toolbar-title>

                <v-spacer></v-spacer>
                <v-btn text  class="mr-5" style="color:#2B2C34" width="85">About Us</v-btn>
                <v-btn text  class="mr-5" style="color:#2B2C34" width="85" @click="redirecContactMe()">Contact Me</v-btn>
                <v-btn width="100" height="50" color="#58E45E" style="color:#FFFFFE" @click="redirecLogin()"
                    class="rounded-lg">Login</v-btn>
            </v-toolbar>
        </div>
    </v-app>
</template>
  
<script>
export default {
    name: "App",

    methods: {
        redirecLogin() {
            this.$router.push("/Login");
        },
    },
};
</script>