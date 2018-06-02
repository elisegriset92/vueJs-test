<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
             <app-single></app-single>
               <app-new  @blabla="added"></app-new>
               <app-all @quoteDeleted="deleted" :quotes="quotes" ></app-all>
               <div class="col-sm-12 text-center">
                 <div class="alert alert-info">Cick on a quote to delete</div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import newQuote from './components/New.vue';
import header from './components/Header.vue';
import allQuotes from './components/All.vue';
import singleQuote from './components/Single.vue';
export default {
  components: {
    'app-new': newQuote,
    'app-header': header,
    'app-all': allQuotes,
    'app-single': singleQuote,
  },
  data: function() {
    return {
      quotes: ['just a quote to see something', 'another one'],
      maxQuotes: 10,
    };
  },
  methods: {
    added(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('please delete one quote first');
      }
      if (quote == '') {
        alert('please type soe text before');
        return;
      }
      this.quotes.push(quote);
    },
    deleted(index) {
      this.quotes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
