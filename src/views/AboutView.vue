<template>
  <div>
    <form @submit.prevent="add">
      nama
      <input type="text" v-model="form.nama_brg" />
      jenis
      <input type="text" v-model="form.jenis_brg" />
      stok
      <input type="text" v-model="form.stock" />
      
      <button type="submit" v-show="!updateSubmit">add</button>
      <button type="button" v-show="updateSubmit" @click="update">
        Update
      </button>
    </form>
    <ul v-for="barang in barang" :key="barang.idd">
      <li>
        <span>{{ barang.nama_brg }}</span> &#160;
        <span>{{ barang.jenis_brg }}</span> &#160;
        <span>{{ barang.stock }}</span> &#160;
        <button @click="edit(barang)">Edit</button> ||
        <button @click="del(barang)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        nama_brg: "",
        jenis_brg: "",
        stock: "",
      },
      barang: null,
      updateSubmit: false,
      priviewimg: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/barang")
        .then((res) => {
          this.barang = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/barang/", this.form).then((res) => {
        this.load();
        this.form.nama_brg = "";
        this.from.jenis_brg = "";
        this.from.stock = "";
      });
    },
    edit(barang) {
      this.updateSubmit = true;
      const nama = this.form.id = barang.id;
      this.form.nama_brg = barang.nama_brg;
      this.form.jenis_brg = barang.jenis_brg;
      this.form.stock = barang.stock;
      console.log(nama)
    },
    update(form) {
      return axios
        .put(
          "http://localhost:3000/barang/" + form.id,
          { nama_brg: this.form.nama_brg },
          { jenis_brg: this.form.jenis_brg },
          { stock: this.form.stock },
        )
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.nama_brg = "";
          this.form.jenis_brg = "";
          this.form.stock = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(barang) {
      axios.delete("http://localhost:3000/barang/" + barang.id).then((res) => {
        this.load();
        let index = this.barang.indexOf(form.barang);
        this.barang.splice(index, 1);
      });
    },
    uploadimg(e) {
      let file = e;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.priviewimg = reader.result;
        this.form.image = reader.result;
      };
    },
  },
};
</script>
