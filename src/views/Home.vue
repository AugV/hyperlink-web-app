<template>
<div>
  <div class="home">
    <div class="exhibition-list">
      <HomeExhibitionContainer
        :itemName=exhibitions[0].name
        :description=exhibitions[0].description
        link="/hyperlink"
      />
      <HomeExhibitionContainer
        :itemName=exhibitions[1].name
        :description=exhibitions[1].description
        link="/superfluitates"
      />
    </div>

  </div>
</div>
</template>

<script>
import HomeExhibitionContainer from '@/components/HomeExhibitionContainer.vue';
import {exhibitions} from '@/constants/exhibitions';

const leftNavElement = {name: 'Apie', path: '/about'};
const rightNavElement = {name: 'Kontaktai', path: '/contacts'};

export default {
  name: 'Home',
  components: {
    HomeExhibitionContainer,
  },
  data: () => ({
    exhibitions,
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

