<template>
<div class="header">
    <div class="header__title">
        <slot></slot>
    </div>
    <app-image
        :image='image'
    />
</div>
</template>

<script>
import AppImage from '@/components/AppImage.vue';
export default {
  name: 'HeaderContainer',
  props: {
    image: Object,
  },
  components: {
    AppImage,
  },
};
</script>

<style scoped>
.header {
    position: relative;
    text-align: center;
    color: white;
  }

  .header__title {
    text-align: center;
    font-size: 40pt;
    color:white;
    margin-bottom: 10px;

    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 740px) {
    .header__title {
      font-size: 26pt;
    }
  }
</style>
