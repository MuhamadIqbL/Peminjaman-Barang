import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/coba",
    name: "coba",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: '/Dashboard',
    component: Layout,
    redirect: '/Dashboard',
    children: [{
        path: '/Dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue'),
    }]
},
  {
    path: "/Barang",
    component: Layout,
    redirect: "/Barang",
    children: [
      {
        path: "/Barang",
        name: "Barang",
        component: () => 
            import("../views/BarangViews.vue"),
      },
    ],
  },
  {
    path: "/Peminjaman",
    component: Layout,
    redirect: "/Peminjaman",
    children: [
      {
        path: "/Peminjaman",
        name: "Peminjaman",
        component: () => 
            import("../views/PeminjamanViews.vue"),
      },
    ],
  },
  {
    path: "/Pengembalian",
    component: Layout,
    redirect: "/Pengembalian",
    children: [
      {
        path: "/Pengembalian",
        name: "Pengembalian",
        component: () => 
            import("../views/PengembalianViews.vue"),
      },
    ],
  },
  {
    path: "/Operator",
    component: Layout,
    redirect: "/Operator",
    children: [
      {
        path: "/Operator",
        name: "Operator",
        component: () => 
            import("../views/OperatorViews.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
