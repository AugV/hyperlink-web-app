<template>
<div>
    <nav class="title">
        <router-link :to="expoLink">
            {{ expoText }}
        </router-link>
    </nav>

    <router-link :to="authorLink">
        <nav class="author">
            {{ authorText }}
        </nav>
    </router-link>

    <a :href="coAuthorLink">
        <nav class="author">
            {{ coAuthorText }}
        </nav>
    </a>
</div>
</template>

<script>
export default {
  name: 'LandingPageSection',
  props: ['expoLink', 'expoText', 'authorText', 'authorLink', 'coAuthorText', 'coAuthorLink'],
};
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-evenly;
    font-size: 48pt;
    margin-bottom: 10px;
}

@media screen and (max-width: 740px) {
  .title {
    font-size: 27pt;
  }
}

.author {
    width: 100%;
    text-align: justify;
    font-size: 12pt;
    text-align-last: justify;
}

@media screen and (max-width: 740px) {
  .author {
    font-size: 10pt;
  }
}
</style>
