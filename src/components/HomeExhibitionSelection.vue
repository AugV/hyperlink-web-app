<template>
    <div>

        <div class="folded" v-on:click='itemClicked'>
          <div class='clickable'>
            {{itemName}}
          </div>
        </div>

        <div class="unfolded" v-bind:div="collapsed" v-if='!collapsed'>

            {{description}}
              <router-link v-if={link}  class="link" v-bind:to="link || ''">
                <div class='clickable'>
                  ...žiūrėti
                </div>
              </router-link>
        </div>
    </div>
</template>

<script>
const collapsed = true;

export default {
  name: 'HomeExhibitionSelection',
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
