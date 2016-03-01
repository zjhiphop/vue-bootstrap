<script type="es6">
  export default {
    name: "Navbar"
  }

</script>

<template>
  <div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Menu</li>
      <li><a v-link="{name: 'location'}">Location</a></li>
      <li><a v-link="{name: 'home'}">Home</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="menu">

    </ul>
  </div>
</div>
</template>
