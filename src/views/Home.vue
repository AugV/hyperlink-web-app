<template>
<div>
    <NavigationBar
      :leftElement="leftNavElement"
    />
  <div class="home">

    <div class="landing-hyperlink">
        <router-link to="/home">Hyperlink</router-link>
    </div>

    <div class="exhibition-list">
      <HomeExhibitionSelection
        :itemName=exhibitions[0].name
        :description=exhibitions[0].description
        link="/expo"
      />
      <HomeExhibitionSelection
        :itemName=exhibitions[1].name
        :description=exhibitions[1].description
      />
    </div>

  </div>
</div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import HomeExhibitionSelection from '@/components/HomeExhibitionSelection.vue';
import {exhibitions} from '@/constants/exhibitions';

const leftNavElement = {name: 'Apie', path: '/about'};
const rightNavElement = {name: 'Kontaktai', path: '/contacts'};

export default {
  name: 'Home',
  components: {
    NavigationBar,
    HomeExhibitionSelection,
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

