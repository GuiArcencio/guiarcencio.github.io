<script setup lang="ts">
const publications = ref([
    {
        title: 'Unsupervised feature based algorithms for time series extrinsic regression',
        url: 'https://link.springer.com/article/10.1007/s10618-024-01027-w',
        journal: 'Data Mining and Knowledge Discovery',
        year: 2024,
    },
    {
        title: 'Study and analysis of parallel N-body simulations',
        url: 'https://sol.sbc.org.br/index.php/eradsp/article/view/28721',
        journal: 'Escola Regional de Alto Desempenho de São Paulo',
        year: 2024,
    },
    {
        title: 'Aprendizado de Máquina Supervisionado para Séries Temporais na Área da Saúde',
        url: 'https://books-sol.sbc.org.br/index.php/sbc/catalog/book/123/543/830-1',
        journal: 'Minicursos do XXIII Simpósio Brasileiro de Computação Aplicada à Saúde',
        year: 2023,
    },
    {
        title: 'Spanning Cover Inequalities for the Capacitated Vehicle Routing Problem',
        url: 'https://sol.sbc.org.br/index.php/etc/article/view/16387',
        journal: 'Anais do VI Encontro de Teoria da Computação',
        year: 2021,
    },
])
</script>

<template>
    <main>
        <header>
            <div id="profile-wrapper">
                <NuxtImg id="profile" src="/profile.png" width="250" height="250" alt="My profile picture." />
                <div id="socials">
                    <NuxtLink to="https://github.com/GuiArcencio" target="_blank" rel="noreferrer noopener">
                        <Icon name="grommet-icons:github" size="32" class="socialicon" />
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/guilherme-arcencio/" target="_blank"
                        rel="noreferrer noopener">
                        <Icon name="grommet-icons:linkedin-option" size="32" />
                    </NuxtLink>
                    <NuxtLink to="http://lattes.cnpq.br/5079378686582819" target="_blank" rel="noreferrer noopener">
                        <Icon name="heroicons:academic-cap-solid" size="32" />
                    </NuxtLink>
                </div>
            </div>
            <div id="main-text">
                <p>
                    Computer Engineering undergrad and Machine Learning
                    researcher.
                </p>
            </div>
        </header>
        <section id="publications">
            <h1>Recent publications</h1>
            <ul>
                <li v-for="pub in publications">
                    <div class="pub-item">
                        <NuxtLink :to="pub.url">
                            <h3>{{ pub.title }}</h3>
                        </NuxtLink>
                        <p>{{ pub.journal }} ({{ pub.year }})</p>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss">
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin-top: 5vh;

    #main-text {
        p {
            font-family: 'Source Code Pro', monospace;
            max-width: 40ch;
            text-align: justify;
            font-size: large;
        }
    }
}

#publications {
    margin-top: 5vh;
    font-family: 'Source Code Pro', monospace;

    ul {
        list-style: square;

        li {
            margin-top: 2vh;

            .pub_item {
                display: flex;
                flex-direction: column;
            }
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

a {
    color: #dbdbdb;
}

@media screen and (orientation: portrait) {
    header {
        flex-direction: column;

        #main-text {
            margin-top: 1vh;

            p {
                text-align: center;
                font-size: 1em;
            }
        }

        #profile {
            width: 200px;
            height: 200px;
        }
    }

    #publications {
        font-size: 0.9em;
    }
}
</style>
