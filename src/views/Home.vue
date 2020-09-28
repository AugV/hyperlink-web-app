<template>
<div>
  <div class="home">

    <div class="exhibition-list">
      <HomeExhibitionContainer
        :itemName=expoNamesEnum.HYPERLINK
        link="/hyperlink"
      />
      <HomeExhibitionContainer
        :itemName=expoNamesEnum.SUPERFLUITATES
        link="/superfluitates"
      />
    </div>

  </div>
</div>
</template>

<script>
import HomeExhibitionContainer from '@/components/HomeExhibitionContainer.vue';
import {expoNamesEnum} from '@/constants/expo-names-enum.js';

const leftNavElement = {name: 'Apie', path: '/about'};
const rightNavElement = {name: 'Kontaktai', path: '/contacts'};

export default {
  name: 'Home',
  components: {
    HomeExhibitionContainer,
  },
  data: () => ({
    expoNamesEnum,
    leftNavElement,
    rightNavElement,
  }),
};
</script>

<style scoped>
  .landing-hyperlink {
    margin-top: 30%;
    margin-bottom: 50px;
    font-size: 48pt;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .exhibition-list {
    margin: 5%;
  }
</style>

