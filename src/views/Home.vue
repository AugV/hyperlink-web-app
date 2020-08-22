<template>
<div>
    <NavigationBar/>
  <div class="home">


    <div class="landing-hyperlink">
        <router-link to="/home">Hyperlink</router-link>
    </div>

    <div class="exhibition-list">
      <ExhibitionSelection
        v-bind:itemName=exhibitions[0].name
        v-bind:description=exhibitions[0].description
        link="/expo"
      />
      <ExhibitionSelection
        v-bind:itemName=exhibitions[1].name
        v-bind:description=exhibitions[1].description
      />
    </div>

  </div>
</div>
</template>

<script>
import NavigationBar from '@/components/navigation/NavigationBar.vue';
import ExhibitionSelection from '@/components/ExhibitionSelection.vue';
import {exhibitions} from '@/constants/exhibitions';


export default {
  name: 'Home',
  components: {
    NavigationBar,
    ExhibitionSelection,
  },
  data: () => ({exhibitions}),
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

