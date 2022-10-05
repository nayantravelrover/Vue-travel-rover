

const routes = [
  { path: '/itinarypreview', component: () => import('components/ItineraryPreview.vue') },
  { path: '/itinarybuilder', component: () => import('components/ItinaryBuilder.vue') },
  { path: '/destination',name:'DestinationPage', component: () => import('pages/DestinationPage.vue'),props: true },
  { path: '/comparison', component: () => import('pages/ComparisonTable.vue') },
  { path: '/mainhome', component: () => import('pages/MainHome.vue') },
  { path: '/appbar', component: () => import('pages/TransparentBar.vue') },
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
