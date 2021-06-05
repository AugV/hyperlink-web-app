<template>
    <div class="container">

        <section class="section">
            <landing-page-section
                expoLink="/hyperlink"
                expoText="HYPERLINK"
                authorText="STULTUS PICTOREM MONIKA RADŽIŪNAITĖ"
                authorLink="/about"
                coAuthorText="STULTUS SCRIPTOR LINAS BLIŠKEVIČIUS"
                coAuthorLink="https://en.wikipedia.org/wiki/Nosferatu?fbclid=IwAR3-HU6TyIlyPzHRUxjcTQByiW9M3ghuua97STEn4mSoVywJbzcYSa_-7AE"
            />
        </section>

        <section class="section">
            <landing-page-section
                expoLink="/superfluitates"
                expoText="SUPERFLUITATES"
                authorText="STULTUS PICTOREM MONIKA RADŽIŪNAITĖ"
                authorLink="/about"
                coAuthorText="STULTUS CURATOREM LINAS BLIŠKEVIČIUS"
                coAuthorLink="https://en.wikipedia.org/wiki/Nosferatu?fbclid=IwAR3-HU6TyIlyPzHRUxjcTQByiW9M3ghuua97STEn4mSoVywJbzcYSa_-7AE"
            />
        </section>

    </div>
</template>

<script>
import LandingPageSection from '@/components/LandingPageSection';

export default {
  name: 'Landing',
  components: {
    LandingPageSection,
  },
};
</script>

<style scoped>
.container {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.section {
    max-width: 366px;
    margin-bottom: 80px;
}
</style>
