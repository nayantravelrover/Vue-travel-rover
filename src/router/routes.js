
const routes = [
  {
    path: '/',
    redirect: "/home",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Home.vue")
      },
      { path: '/Home', component: () => import('pages/MainHome.vue') },
      { path: '/page', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
