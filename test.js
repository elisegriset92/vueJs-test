// new Vue ({
//   el: '#app',
//   data: {
//     title: 'Hello World!',
//     link: 'http://google.com',
//     finishedLink: '<a href="http://google.com">Google</a>',
//   },
//   methods: {
//     sayHello: function () {
//       this.title = 'Hello';
//       return this.title;
//     },
//   },
// });

// new Vue ({
//   el: '#app-2',
//   data: {
//     counter: 0,
//     x: 0,
//     y: 0,
//   },
//   methods: {
//     increase: function (step, event) {
//       this.counter += step;
//     },
//     updateCoordinates: function (event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//     },
//     alertMe: function () {
//       alert ('ALert');
//     },
//   },
// });

// new Vue ({
//   el: '#app-3',
//   data: {
//     name: 'Elise',
//   },
// });

// new Vue ({
//   el: '#app-4',
//   data: {
//     counter: 0,
//     secondCounter: 0,
//   },
//   computed: {
//     output: function () {
//       return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//     },
//   },
//   watch: {
//     counter: function () {
//       var vm = this;
//       setTimeout (function () {
//         vm.counter = 0;
//       }, 2000);
//     },
//   },
//   methods: {
//     result: function () {
//       return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
//     },
//   },
// });

new Vue ({
  el: '#app-5',
  data: {
    color: 'blue',
    width: 100,
    attachRed: false,
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px',
      };
    },
  },
});
