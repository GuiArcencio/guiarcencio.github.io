<template>
    <footer>
        <p>
            This website was made with Nuxt. Source code is available
            <NuxtLink to="https://github.com/GuiArcencio/guiarcencio.github.io" target="_blank"
                rel="noreferrer noopener">here</NuxtLink>.
        </p>
    </footer>
</template>

<style lang="scss">
footer {
    margin-top: 5vh;
    margin-bottom: 1vh;

    p,
    a {
        color: #888888;
        text-align: center;
    }
}

@media screen and (orientation: portrait) {
    footer {

        p,
        a {
            font-size: 0.9em;
        }
    }
}
</style>
