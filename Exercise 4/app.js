new Vue ({
  el: '#exercise',
  data: {
    newClass: {
      highlight: false,
      shrink: true,
    },

    color: 'color',
    myStyle: {
      backgroundColor: 'red',
      width: '50px',
      height: '20px',
    },
    userChose: '',
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval (function () {
        vm.newClass.highlight = !vm.newClass.highlight;
        vm.newClass.shrink = !vm.newClass.shrink;
      }, 1000);
    },
  },
});
