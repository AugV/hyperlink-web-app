<template>
    <div class="container">
        <div class="landing-hyperlink">
            <router-link to="/home">
                HYPERLINK
            </router-link>
        </div>

        <router-link to="/about">
            <div class="author">
                STULTUS PICTOREM MONIKA RADŽIŪNAITĖ
            </div>
        </router-link>

        <a href="https://en.wikipedia.org/wiki/Nosferatu?fbclid=IwAR3-HU6TyIlyPzHRUxjcTQByiW9M3ghuua97STEn4mSoVywJbzcYSa_-7AE">
            <div class="author">
                STULTUS SCRIPTOR LINAS BLIŠKEVIČIUS
            </div>
        </a>
    </div>
</template>

<style scoped>
.container {
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.landing-hyperlink {
    display: flex;
    justify-content: space-evenly;
    font-size: 48pt;
    margin-bottom: 10px;
}

@media screen and (max-width: 740px) {
  .landing-hyperlink {
    font-size: 42pt;
  }
}

.author {
    width: 100%;
    text-align: justify;
    font-size: 13pt;
    text-align-last: justify;
}

@media screen and (max-width: 740px) {
  .author {
    font-size: 11pt;
  }
}
</style>
