<template>
  <div class='container'>
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
