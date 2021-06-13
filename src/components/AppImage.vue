<template>
  <div class='container'>
    <div v-if="!imageOnly" class="image-title">
      {{ image.title }}
    </div>

    <div v-if="!imageOnly" class="image-sub-title">
      {{ image.subTitle }}
    </div>

    <div
      v-show='isLoading'
      class='skeleton'
      :style="{'paddingBottom': getAspectRatio}"
    />
    <a :href="image.url">
      <img
        v-show='!isLoading'
        :src='image.urlSmall'
        @load="imageLoaded"
        class='img'
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppImage',
  props: {
    image: Object,
    imageOnly: Boolean,
  },
  data: () => ({
    isLoading: true,
  }),
  computed: {
    getAspectRatio: function() {
      const aspectRatio = this.image.height / this.image.width * 100;
      const percent = aspectRatio.toString() + '%';

      return percent;
    },
  },
  methods: {
    imageLoaded: function() {
      this.isLoading= !this.isLoading;
    },
  },
};
</script>

<style scoped>
  .image-title {
    font-size: 18pt;
    margin-top: 37px;
    text-align: center;
    text-transform: uppercase;
  }

  .image-sub-title {
    font-size: 12pt;
    text-align: center;
    margin-bottom: 16px;
  }

  .container {
    height: auto;
  }

  .skeleton {
    background-color: black;
  }

  .img {
    max-width: 100%;
    display: block;
  }
</style>
