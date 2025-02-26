
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ILWSSJTX.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OZRZCHLP.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UX3Q773Z.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 589, hash: '41b7ae5800b48908f86718f77daca7dcb0f82e3b573b3977e3bb988828b367fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: 'fc3baaae69f00077bbef4492202b8f7577b989b9c623a5e806bb080764c51bb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 26635, hash: 'd530ec4675fd0ca3dfc97a46a4e1e4b91539a732509ac35efd72d1a7d7e5b50d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25704, hash: '8c31d89fc5e544ff7740e1b4da4e0587510fc2de1f913e8beefae9fb5d44e317', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 25182, hash: '9160cf68f96607d856660c6e107813e22053e98451b6d94f746143047a7b7075', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
