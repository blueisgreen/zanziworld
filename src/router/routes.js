const routes = [
  {
    path: '/',
    component: () => import('layouts/SimpleLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/auth',
        name: 'auth',
        component: () => import('pages/IdentitySettings.vue'),
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('pages/UserSettings.vue'),
      },
    ],
  },

  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('pages/NuclearPix.vue'),
      },
      {
        path: 'lessons',
        name: 'lessons',
        component: () => import('pages/LessonPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
