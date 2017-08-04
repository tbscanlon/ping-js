(function(exports) {

function Paddle(playfield, x = 0) {
  this.MOVEMENT_SPEED = 50;

  this.playfieldHeight = playfield.height;
  this.x = x
  this.height = 60;
  this.width = 10;
  this.location = playfield.height / 2;
}

Paddle.prototype.player1Move =  function (e) {
  if (e.keyCode == 65) {
    this.moveUp();
  } else if (e.keyCode == 90) {
    this.moveDown();
  }
}

Paddle.prototype.player2Move = function (e) {
  if (e.keyCode == 38) {
    this.moveUp();
  } else if (e.keyCode == 40) {
    this.moveDown();
  }
}

Paddle.prototype.moveUp = function () {
  if (this._withinTopBound()) {
    this.location -= this.MOVEMENT_SPEED;
  } else {
    this.location = 0;
    }
  };

Paddle.prototype.moveDown = function () {
  if (this._withinBottomBound()) {
    this.location += this.MOVEMENT_SPEED;
  } else {
    this.location = this.playfieldHeight - this.height;
  }
};

Paddle.prototype._withinTopBound = function () {
  return this.location > 0;
};

Paddle.prototype._withinBottomBound = function () {
  return this.location + this.height < this.playfieldHeight;
};

exports.Paddle = Paddle;

})(this);
