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

#profile-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

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
</style>
