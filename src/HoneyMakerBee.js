var HoneyMakerBee = function() {
  Bee.call(this);
  this.job = 'make honey';
  this.honeyPot = 0;
  this.age = 10;
};

//make [[prototype]] of Child be a ref to Parent.prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);

//need to explicitly set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee; 

HoneyMakerBee.prototype.makeHoney = function() {this.honeyPot++;};
HoneyMakerBee.prototype.giveHoney = function() {this.honeyPot--;};