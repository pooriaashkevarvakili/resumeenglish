
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/article', component: () => import('pages/Articles.vue') },
      { path: '/education', component: () => import('pages/Education.vue') },
      { path: '/skills', component: () => import('pages/skills.vue') },
      { path: '/socialNetwork', component: () => import('pages/socialNetwork.vue') },
      { path: '/portfolio', component: () => import('pages/Portfolio.vue') },
      { path: '/experience', component: () => import('pages/Experience.vue') },
      { path: '/resume', component: () => import('pages/resume.vue') }
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
