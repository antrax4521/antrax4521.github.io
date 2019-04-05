<template>
    <vue-typed-js :strings=msg>
      <h1 class="typing"></h1>
    </vue-typed-js>
</template>

<script>
export default {
    name: Typed,
    props: {
        msg: Array
    }
}
</script>
