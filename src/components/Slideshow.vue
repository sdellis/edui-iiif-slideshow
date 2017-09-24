<template>
  <div>
    <p>
      <a @click="prev">Previous</a> || <a @click="next">Next</a>
    </p>
    <div v-for="number in [currentNumber]">
      <img :src="images[Math.abs(currentNumber) % images.length].display_src"
           v-on:mouseover="stopRotation"
           v-on:mouseout="startRotation"/>

    </div>
  </div>
</template>

<script>
import manifest from '../data/manifest'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
import mixins from '../mixins/manifesto-vue-mixins'
const manifestation = Object.assign(manifesto.create(JSON.stringify(manifest)), mixins)

window.manifestation = manifestation

export default {
  name: 'slideshow',
  data () {
    return {
      images: manifestation.photos(),
      currentNumber: 0,
      timer: null
    }
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 1000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      this.currentNumber += 1
    },
    prev: function() {
      this.currentNumber -= 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
