<template>
<div class="row">
  <form>
  <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3"></div>
  <textarea class="form-control" rows="3" v-model="quote"></textarea>
    <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3"></div>
<button class="btn btn-primary" @click.prevent="add">Add</button>
  </form>
  </div>
</template>


<script>
import allQuotes from './All.vue';

export default {
  props: ['quotes'],
  data: function() {
    return {
      quote: '',
    };
  },
  methods: {
    add: function() {
      this.$emit('blabla', this.quote);
      this.quote = '';
    },
  },
};
</script>

<style>
</style>
