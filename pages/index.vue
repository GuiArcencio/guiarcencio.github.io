<script setup lang="ts">
</script>

<template>
  <main>
    <div id="profile-wrapper">
      <nuxt-img id="profile" src="/profile.png" width="250" height="250" alt="My profile picture." />
      <div id="socials">
        <a href="https://github.com/GuiArcencio" target="_blank" rel="noreferrer noopener">
          <Icon name="grommet-icons:github" size="32" class="socialicon" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-arcencio/" target="_blank" rel="noreferrer noopener">
          <Icon name="grommet-icons:linkedin-option" size="32" />
        </a>
        <a href="http://lattes.cnpq.br/5079378686582819" target="_blank" rel="noreferrer noopener">
          <Icon name="heroicons:academic-cap-solid" size="32" />
        </a>
      </div>
    </div>
    <div id="main-text">
      <p>Computer Engineering undergrad and Machine Learning researcher.</p>
    </div>
  </main>
</template>

<style lang="scss">
main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    align-self: center;
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

#profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;

    #socials {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;

        a {
            transition: all 0.2s;
            .socialicon {
                * {
                    color: #dbdbdb;
                }
            }
        }

        a:hover {
            scale: 1.2;
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

@media screen and (orientation: portrait) {
    main {
        flex-direction: column;
        gap: 3vh;
        margin-top: 8vh;
        margin-bottom: 0;

        #main-text {
            margin-left: 5vw;
            margin-right: 5vw;
        }
    }
}
</style>
