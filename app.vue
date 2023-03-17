<script setup>
const windowHeight = ref("")
const allMounted = ref(false)
onMounted(() => {
    windowHeight.value = `${window.innerHeight}px`
    allMounted.value = true
})

</script>

<template>
  <div v-if="allMounted" id="wrapper">
    <NuxtPage />
    <MainFooter />
  </div>
</template>

<style lang="scss">
#wrapper {
    min-height: v-bind(windowHeight);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
