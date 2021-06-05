<template>
    <div class="text">
        <div class="header">SUPERFLUITATES</div>

        <app-image
            v-for="[key, image] in Object.entries(SUPERFLUITATES_IMAGES)"
            :key="key"
            :image='image'
        />

    </div>
</template>

<script>
import {SUPERFLUITATES_IMAGES} from '@/constants/images.js';
import AppImage from '@/components/AppImage.vue';

export default {
  name: 'SuperfluitatesExpo',
  data() {
    return {
      SUPERFLUITATES_IMAGES,
    };
  },
  components: {
    AppImage,
  },
};
</script>

<style scoped>
  .header {
    text-align: center;
    font-size: 40pt;
    color:white;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 740px) {
  .header {
    font-size: 26pt;
  }
}

  .text {
    text-align: justify;
    padding: 0px 8px 0px 8px;
  }

  .text a:visited {
    color:rgb(220, 176, 75);
  }

</style>
