import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';

// Admin components
import Index from '@/pages/admin/Admin';
import New from '@/pages/admin/New';
import Product from '@/pages/admin/Product';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: '',
          name: 'Product',
          component: Product,
        },
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
  ],
});
