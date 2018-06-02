<template>
    <div class="row">
      <app-quote v-for="(oneQuote, index) in quotes" @click.native="deleteThisQuote(index)">
   {{oneQuote}}
      </app-quote>
  </div>
</template>


<script>
import Quote from './Single.vue';

export default {
  props: ['quotes', 'maxQuotes', 'quoteCount'],
  components: {
    appQuote: Quote,
  },
  methods: {
    deleteThisQuote(index) {
      this.$emit('quoteDeleted', index);
    },
  },
};
</script>

<style>
</style>
