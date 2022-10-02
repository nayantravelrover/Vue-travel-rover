
const routes = [
  { path: '/itinarypreview', component: () => import('components/ItineraryPreview.vue') },
  { path: '/itinarybuilder', component: () => import('components/ItinaryBuilder.vue') },
  { path: '/destination', component: () => import('pages/DestinationPage.vue')},
  {
    path: '/',
    redirect: "/home",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/DestinationPage.vue")
      },
      { path: '/page', component: () => import('pages/IndexPage.vue')},
      { path: '/itinaries', component: () => import('pages/Itinaries.vue')},
    ]
  },
  {
    path: '/MainHome',
    component: () => import('pages/MainHome.vue')

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
