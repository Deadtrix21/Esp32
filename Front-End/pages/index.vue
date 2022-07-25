<template>
<div app>
  <h1>hello</h1>
  <Login/>
</div>

</template>

<script>
import Login from '~/components/Login.vue';
export default {
    name: "IndexPage",
    components: { Login }
}
</script>
