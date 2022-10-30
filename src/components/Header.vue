<template>
<header>
  <nav><img src="../assets/images/menu.png"  class="menu" alt="menu"/></nav>
</header>
</template>

<script>

export default {
  name:'Header'
}

</script>

<style scoped>

header{
  /* background-color: var(--color-background-nav); */
  background-color: red;
  height: 77px;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;

}
nav{
  display: flex;
  justify-content: space-ri;
  height: 40px;
  align-items: center;
}
.menu{
  padding-right: 10px;
}

</style>