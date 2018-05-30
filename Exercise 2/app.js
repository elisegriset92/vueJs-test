new Vue ({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    alertMe: function () {
      alert ('Hello');
    },
    newValue: function () {
      this.value = event.target.value;
    },
    enterValue: function () {
      this.value = event.target.value;
    },
  },
});
