<script setup lang="ts">
</script>

<template>
  <main>
    <div>
      <nuxt-img id="profile" src="/profile.png" width="250" height="250" alt="My profile picture." />
    </div>
    <div id="main-text">
      <p>This page is still under construction. Feel free to check out my social network pages in the meantime :)</p>
    </div>
  </main>
</template>

<style lang="scss">
main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-top: auto;
    margin-bottom: auto;

    #main-text {
        p {
            font-family: 'Source Code Pro', monospace;
            max-width: 40ch;
            text-align: justify;
            font-size: large;
        }
    }
}

#profile {
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 3px;
    border-color: #151515;
    border-style: solid;
}
</style>
