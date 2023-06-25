

const routes = [
  { path: '/itinarypreview', component: () => import('components/ItineraryPreview.vue') },
  { path: '/itinarybuilder',name:'ItineraryCreator', component: () => import('components/ItinaryBuilder.vue') },
  { path: '/destination',name:'DestinationPage', component: () => import('pages/DestinationPage.vue'),props: true },
  { path: '/comparison', component: () => import('pages/ComparisonTable.vue') },
  { path: '/destinationweb', component: () => import('pages/DestinationPageWeb.vue') },
  { path: '/appbar', component: () => import('pages/TransparentBar.vue') },
  { path: '/editcardw', component: () => import('pages/EditItineraryCardw.vue') },
  { path: '/viewitinerary', component: () => import('pages/ViewItinerary.vue') },
  { path: '/profilepageweb',name:'ProfilePageWeb', component: () => import('pages/ProfilePageWeb.vue') },
  { path: '/likeditinerary', component: () => import('pages/LikedItinerary.vue') },
  { path: '/createditinerary', component: () => import('pages/CreatedItinerary.vue') },
  { path: '/itinerarybuilder',name:'ItineraryBuilder', component: () => import('pages/ItineraryBuilder.vue') },
  { path: '/compare', component: () => import('pages/CompareTable.vue') },
  { path: '/purchaseditinerary', component: () => import('pages/PurchasedItinerary.vue') },
  { path: '/blogspage', component: () => import('pages/BlogsPage.vue') },
  { path: '/blogshomepage', component: () => import('pages/BlogsHomePage.vue') },
  { path: '/itinerarylink', component: () => import('components/ItineraryPreviewOpenToInternet.vue') },
  { path: '/embracing_blog', component: () => import('pages/Embracing_blog.vue') },
  { path: '/agent_or_diy', component: () => import('pages/Agent_or_diy.vue') },
  { path: '/popularity_zostel', component: () => import('pages/Popularity_zostel.vue') },
  { path: '/workation', component: () => import('pages/workation_vue.vue') },
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
