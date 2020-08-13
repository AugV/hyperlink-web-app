<template>
    <div>
        <div class="folded" v-on:click='itemClicked'>
            {{itemName}}
        </div>

        <div class="unfolded" v-bind:div="collapsed" v-if='!collapsed'>
            {{description}}
              <router-link class="link" to="/expo">...view</router-link>
        </div>
    </div>
</template>

<script>
const collapsed = true;

export default {
  name: 'ExhibitionSelection',
  props: {
    itemName: String,
    description: String,
  },
  data: () => ({
    collapsed,
  }),
  methods: {
    itemClicked: function() {
      console.log(this);
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
  .folded {
      font-size: 24pt;
      color:white;
      font-family: 'Roboto';
  }

  .unfolded {
      font-size: 18pt;
      text-align: justify;
      color:white;
      font-family: 'Roboto';
      font-weight: 300;
      display: inline-block;
  }

  .link {
    display: inline;
    float: right;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }
</style>
