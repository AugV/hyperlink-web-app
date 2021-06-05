<template>
<expo-intro-container
    :itemName=expoNamesEnum.HYPERLINK
    link="hyperlink/expo"
/>
</template>

<script>
import ExpoIntroContainer from '@/components/ExpoIntroContainer';
import {expoNamesEnum} from '@/constants/expo-names-enum.js';

export default {
  name: 'Home',
  components: {
    ExpoIntroContainer,
  },
  data: () => ({
    expoNamesEnum,
  }),
};
</script>

