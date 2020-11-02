<template>
<div>

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
  .exhibition-list {
    margin: 5%;
  }

  @media only screen and (min-width: 666px) {
    .exhibition-list {
      margin: 5%;
      padding-top: 160px;
    }
  }
</style>

