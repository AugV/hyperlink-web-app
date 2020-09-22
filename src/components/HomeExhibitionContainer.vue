<template>
    <div>

      <div class='title'>
         <router-link v-bind:to="link || ''">
          {{itemName}}
        </router-link>
      </div>

      <div class="annotation">
          {{description}}
          <router-link v-if={link}  class="link" v-bind:to="link || ''">
            <img class="icon" :src="image"/>
          </router-link>
      </div>

    </div>
</template>

<script>
import image from '@/assets/hand-pointer.png';

export default {
  name: 'HomeExhibitionContainer',
  props: {
    itemName: String,
    description: String,
    link: String,
  },
  data: () => ({
    image: image,
  }),
};
</script>

<style scoped>
  .title {
    font-size: 24pt;
    margin-bottom: 10px;
  }

  .annotation {
    text-align: justify;
    margin-bottom: 20px;
  }

  .icon {
    max-height: 20px;
    width: auto;
    transform: rotate(90deg);
  }

  .link {
    display: inline;
    float: right;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }
</style>
