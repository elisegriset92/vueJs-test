new Vue ({
  el: '#app',
  data: {
    myHealth: 100,
    myAttack: -5,
    mySpecialAttack: -20,
    itsHealth: 100,
    itsAttack: -4,
    itsSpecialAttack: -15,
    show: false,
    array: [],
    arraySpecial: [],
    array2: [],
    array2Special: [],
  },
  methods: {
    attack: function (
      myAttack,
      itsAttack,
      itsSpecialAttack,
      myHealth,
      itsHealth
    ) {
      var vm = this;
      this.itsHealth += this.myAttack;
      this.array.push (1);
      var random = Math.random ();
      if (random < 0.3) {
        this.myHealth += this.itsAttack;
        this.array2.push (1);
      } else if (random < 0.8 && random > 0.3) {
        this.myHealth += this.itsSpecialAttack;
        this.array2Special.push (1);
      } else {
        return;
      }
    },
    heal: function (myAttack, myHealth) {
      var vm = this;
      return (this.myHealth -= this.myAttack);
    },

    special: function (mySpecialAttack, itsHealth) {
      var vm = this;
      this.itsHealth += this.mySpecialAttack;
      this.arraySpecial.push (1);
      var random = Math.random ();
      if (random < 0.6) {
        this.attack ();
      } else {
        return;
      }
    },
    start: function (myHealth, itsHealth) {
      var vm = this;
      this.myHealth = 100;
      this.itsHealth = 100;
      this.show = false;
      this.array = [];
      this.arraySpecial = [];
      this.array2 = [];
      this.array2Special = [];
    },
    giveUp: function () {
      var vm = this;
      if (
        confirm (
          'Are you sure you want to give up ?\n It will start a new game'
        )
      ) {
        return (this.show = true);
      } else {
        return;
      }
    },
  },
});
