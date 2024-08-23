<template>
  <footer>
    <p>This website was made with Nuxt. Source code is available <a href="https://github.com/GuiArcencio/guiarcencio.github.io" target="_blank" rel="noreferrer noopener">here</a>.</p>
  </footer>
</template>

<style lang="scss">
footer {
    align-self: center;
    margin-bottom: 1vh;

    p, a {
        color: #888888;
        text-align: center;
    }
}

@media screen and (orientation: portrait) {
    footer>p {
        margin-right: 3vw;
        margin-left: 3vw;
    }
}
</style>
