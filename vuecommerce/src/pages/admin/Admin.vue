<template>
  <div>
    <nav class="breadcrumb container is-right" aria-label="breadcrumbs">
      <ul>
        <li>
            <router-link to="/admin">View Products</router-link>
        </li>
        <li>
            <router-link to="/admin/new">Create New</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>
