<template>
<nav class="author">
  <a :style="cssProps"
    href='https://www.linkedin.com/in/augustinas-vainius-3797b7114/'
    @mouseover="striptease()"
    @mouseout="clearAllIntervals()"
  >
      STULTUS MACHINATOR AUGUSTINAS VAINIUS
    </a>
</nav>
</template>

<script>
const getInitialColor = () => Math.floor(Math.random() * (256 - 0 + 1) + 0);

export default {
  name: 'HiddenLink',
  data() {
    return {
      intervals: null,
      red: getInitialColor(),
      green: getInitialColor(),
      blue: getInitialColor(),
      prev: {
        red: getInitialColor(),
        green: getInitialColor(),
        blue: getInitialColor(),
      },
    };
  },
  methods: {
    striptease() {
      this.intervals = [
        setInterval(() => {
          this.red = this.getNewColor(this.prev.red, this.red, 'red');
        }, 476),
        setInterval(() => {
          this.green = this.getNewColor(this.prev.green, this.green, 'green');
        }, 430),
        setInterval(() => {
          this.blue = this.getNewColor(this.prev.blue, this.blue, 'blue');
        }, 1500),
      ];
    },

    getNewColor(prev, curr, color) {
      if (prev <= curr) {
        return this.getIncrement(prev, curr, color);
      } else {
        return this.getDecrement(prev, curr, color);
      }
    },
    getIncrement(prev, curr, color) {
      const sum = prev + curr;
      this.prev[color] = curr;

      if (sum <= 256) {
        return sum;
      } else {
        return curr - prev;
      }
    },
    getDecrement(prev, curr, color) {
      const subtraction = prev - curr;
      this.prev[color] = curr;

      if (subtraction >= 0) {
        return subtraction;
      } else {
        return curr + prev;
      }
    },
    clearAllIntervals() {
      this.intervals.forEach((interval) => {
        clearInterval(interval);
      });
    },
  },
  computed: {
    cssProps() {
      return {
        '--hover-color': `rgb(${this.red}, ${this.green}, ${this.blue})`,
      };
    },
  },
};
</script>

<style scoped>
.author {
    width: 100%;
    text-align: justify;
    font-size: 12pt;
    text-align-last: justify;
}

@media screen and (max-width: 740px) {
  .author {
    font-size: 10pt;
  }
}
a {
    color: black;
    margin: var(--margin);
}
a:hover {
    color: var(--hover-color);
}
</style>
