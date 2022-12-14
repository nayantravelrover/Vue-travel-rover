

const routes = [
  { path: '/itinarypreview', component: () => import('components/ItineraryPreview.vue') },
  { path: '/itinarybuilder',name:'ItineraryCreator', component: () => import('components/ItinaryBuilder.vue') },
  { path: '/destination',name:'DestinationPage', component: () => import('pages/DestinationPage.vue'),props: true },
  { path: '/comparison', component: () => import('pages/ComparisonTable.vue') },
  { path: '/destinationweb', component: () => import('pages/DestinationPageWeb.vue') },
  { path: '/appbar', component: () => import('pages/TransparentBar.vue') },
  { path: '/editcardw', component: () => import('pages/EditItineraryCardw.vue') },
  { path: '/viewitinerary', component: () => import('pages/ViewItinerary.vue') },
  { path: '/profilepage2', component: () => import('pages/ProfilePage2.vue') },
  { path: '/profilepage', component: () => import('pages/ProfilePage.vue') },
  { path: '/profilepageweb',name:'ProfilePageWeb', component: () => import('pages/ProfilePageWeb.vue') },
  { path: '/likeditinerary', component: () => import('pages/LikedItinerary.vue') },
  { path: '/vieweditinerary', component: () => import('pages/ViewedItinerary.vue') },
  { path: '/itinerarybuilder',name:'ItineraryBuilder', component: () => import('pages/ItineraryBuilder.vue') },
  { path: '/compare', component: () => import('pages/CompareTable.vue') },
  { path: '/customitinerary', component: () => import('pages/CustomItinerary.vue') },
  { path: '/blogspage', component: () => import('pages/BlogsPage.vue') },
  { path: '/blogshomepage', component: () => import('pages/BlogsHomePage.vue') },
  {
    path: '/',
    redirect: "/home",
    name: "Home",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Home.vue")
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
