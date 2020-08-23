<template>
    <div>
        <div v-if="leftElement" class="left-element">
            <NavigationElement
                :linkName="leftElement.name"
                :linkPath="leftElement.path"
            />
        </div>
        <div v-if="rightElement" class="right-element">
            <NavigationElement
                :linkName="rightElement.name"
                :linkPath="rightElement.path"
            />
        </div>
        <div style="clear:both"></div>
    </div>
</template>

<script>
import NavigationElement from '@/components/navigation/NavigationElement';

export default {
  name: 'NavigationBar',
  props: {
    leftElement: {name: String, path: String},
    rightElement: {name: String, path: String},
  },
  components: {
    NavigationElement,
  },
};
</script>

<style scoped>
    .left-element {
        float:left;
        margin-left: 5px;
    }
    .right-element {
        float:right;
        margin-right: 5px;
    }
</style>
