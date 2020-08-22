<template>
    <div>

        <div class="folded" v-on:click='itemClicked'>
            {{itemName}}
        </div>

        <div class="unfolded" v-bind:div="collapsed" v-if='!collapsed'>

            {{description}}

            <router-link class="link" v-if={link} v-bind:to="link">
              ...view
            </router-link>

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
    link: String,
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
      margin-bottom: 30px;
      cursor: pointer;
  }

  .unfolded {
      font-size: 16pt;
      text-align: justify;
      color:white;
      font-weight: 100;
      display: inline-block;
      margin-bottom: 50px;
  }

  .link {
    display: inline;
    float: right;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }
</style>
