<template>
  <div class="wrapper">
    {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Function,
      default: () => {}
    }
  }
}
</script>