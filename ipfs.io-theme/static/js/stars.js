(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var STAR_COLORS = [0x6acad1, 0xffffff];
var LINE_COLOR = 0x6acad1;
var FARTHEST = 200;
var PARTICLES = 0;
var TWINKLE_SPEED = 6;
var COMET_SPEED = 100;
var PARTICLE_SPEED = 30;
var SPIN_SPEED = 2;
var LINE_FADE_SPEED = .75;

function StarChart(canvas, pixi, gridX, gridY, starCount) {
  this.canvas = canvas;
  this.pixi = pixi;
  this.renderer = this.pixi.autoDetectRenderer(800, 600, {antialias: true});
  document.body.appendChild(this.renderer.view);
  this.stage = new this.pixi.Container();
  this.gridX = gridX;
  this.gridY = gridY;
  this.cellWidth = this.renderer.view.width / this.gridX;
  this.cellHeight = this.renderer.view.height / this.gridY;
  this.starCount = starCount;
  this.stars = {};
  this.starList = [];
  this.cells = [];
  this.comets = [];
  this.removeComets = [];
  this.activeStar = null;
  this.lastNow = window.performance.now();
}

(function () {

  this.run = function () {
    this.pixi.loader.add('star', 'star2.png')
    .add('comet', 'star2.png').load(function (loader, resources) {
      var gx, gy = 0;
      var x, y, n, row, col;

      for (gx = 0; gx < this.gridX; gx++) {
        row = [];
        for (gy = 0; gy < this.gridY; gy++) {
          col = [];
          for (n = 0; n < this.starCount; n++) {
            x = Math.round(Math.random() * (this.cellWidth) + gx * this.cellWidth);
            y = Math.round(Math.random() * (this.cellHeight) + gy * this.cellHeight);
            this.stars[x + 'x' + y] = new Star(this, x, y, gx, gy);
            col.push(this.stars[x + 'x' + y]);
            this.starList.push(this.stars[x + 'x' + y]);
          }
          row.push(col);
        }
        this.cells.push(row);
      }

      Object.keys(this.stars).forEach(function (skey) {
        this.stars[skey].setLinks();
      }.bind(this));

      this.comets.push(new Comet(this, this.randomStar(), undefined, 10, true));
      this.twinkleStar();
      this.animate();
    }.bind(this));
  };

  this.twinkleStar = function () {
    var keys = Object.keys(this.stars);
    this.activeStar = this.stars[keys[Math.floor(Math.random() * keys.length)]];
    console.log(this.activeStar.id)
  };

  this.randomStar = function () {
    return this.starList[Math.floor(Math.random() * this.starList.length)];
  }

  var lastTwinkle = 0;

  this.animate = function () {
    var now = window.performance.now();
    var dt = (now - this.lastNow) * .001;
    this.lastNow = now;
    var r, c, s;
    lastTwinkle += dt;
    requestAnimationFrame(this.animate.bind(this));
    if (true || lastTwinkle > .033333) {
      lastTwinkle = 0;
      if (!this.activeStar.animate(dt)) {
        this.twinkleStar();
      }
      for (r = 0, l = this.comets.length; r < l; r++) {
          this.comets[r].animate(dt);
      }
      for (r = 0, l = this.removeComets.length; r < l; r++) {
        this.comets.splice(this.comets.indexOf(this.removeComets[r]), 1);
      }
      this.removeComets = [];
      this.renderer.render(this.stage);
    }
  };

}).call(StarChart.prototype);

function Comet(game, star, next, hops, addAfter) {
  this.game = game;
  this.fromStar = star;
  this.fromStar.sprite.tint = STAR_COLORS[0];
  this.nextStar = next;
  if (typeof this.nextStar === 'undefined') {
    var keys = Object.keys(this.fromStar.links);
    this.nextStar = this.game.stars[keys[Math.floor(Math.random() * keys.length)]]
  }
  this.angle = null;
  this.trip = 0;
  this.particles = [];
  this.aparticles = [];
  this.hops = hops;
  this.addAfter = addAfter;
  var part;

  for (var i = 0; i < PARTICLES; i++) {
    part = new this.game.pixi.Sprite(this.game.pixi.loader.resources.comet.texture);
    part.anchor = new this.game.pixi.Point(.5, .5);
    part.scale = new this.game.pixi.Point(.3, .3);
    part.tint = 0xd4f4ff;
    this.aparticles.push(part);
    this.game.stage.addChild(part);
  }
  this.sprite = new this.game.pixi.Sprite(this.game.pixi.loader.resources.comet.texture);
  this.sprite.anchor = new this.game.pixi.Point(.5, .5);
  this.sprite.scale = new this.game.pixi.Point(.5, .5);
  this.sprite.alpha = 0;
  this.game.stage.addChild(this.sprite);
  this.dist = null;
  this.visited = {};
  this.lines = [];
  this.curline = null;
  this.ending = false;
  this.setNext();
}

(function () {

  this.setNext = function () {
    var i, l;
    this.visited[this.fromStar.id] = true;
    this.visited[this.nextStar.id] = true;
    this.angle = Math.atan2(this.fromStar.y - this.nextStar.y, this.fromStar.x - this.nextStar.x) + Math.PI;
    this.dist = Math.sqrt(Math.pow(this.fromStar.x - this.nextStar.x, 2) + Math.pow(this.fromStar.y - this.nextStar.y, 2));

    //for (i = 0, l = this.particles.length; i < l; i++) {
    //  this.particles[i].angle = this.angle + Math.PI + ((Math.random() - .5) * Math.PI);
    //}
    this.curline = new this.game.pixi.Graphics();
    this.curline.lineStyle(2, LINE_COLOR, 1);
    this.curline.moveTo(-2, -2);
    this.curline.lineTo(-1, -1);
    this.game.stage.addChild(this.curline);
  };

  this.pickNext = function () {
    if (this.hops <= 0) {
      return this.end();
    }
    this.trip = 0;
    var ikeys = Object.keys(this.fromStar.links);
    var keys = [];
    var i, l;
    for (i = 0, l = ikeys.length; i < l; i++) {
      if (!this.visited[ikeys[i]]) {
        keys.push(ikeys[i]);
      }
    }
    if (keys.length === 0) {
      return this.end();
    }
    this.nextStar = this.fromStar.links[keys[Math.floor(Math.random() * keys.length)]];
    this.setNext();
    this.hops--;
  };

  this.end = function () {
    this.sprite.alpha = 0;
    this.ending = true;
    var i, l, p;
    for (i = 0, l = this.aparticles.length; i < l && i < 15; i++) {
      p = this.aparticles[i];
      p.position = this.sprite.position.clone();
      p.alpha = 1;
      p.angle = this.angle + (Math.random() - .5) * Math.PI * .75;
      //p.tint = 0xFF0000;
      this.particles.push(p)
    }
    this.aparticles = [];
    if (this.addAfter) {
      this.game.comets.push(new Comet(this.game, this.game.randomStar(), undefined, 10, true));
    }
  }

  this.animate = function (dt) {
    var line, i, l;
    var highestAlpha = 0;
    this.trip += dt * COMET_SPEED;
    var parts = [], p;
    if (!this.ending) {
      this.sprite.x = this.fromStar.x + Math.cos(this.angle) * this.trip;
      this.sprite.y = this.fromStar.y + Math.sin(this.angle) * this.trip;
    }
    for (i = 0, l = this.particles.length; i < l; i++) {
      this.particles[i].alpha -= (dt + Math.random() * .01);
      if (this.particles[i].alpha <= 0) {
        if (this.ending) {
          this.particles[i].alpha = 0;
        } else {
          parts.push(this.particles[i]);
          //this.particles[i].position = this.sprite.position.clone();
          //this.particles[i].alpha = 1;
        }
      } else if (this.particles[i].alpha > highestAlpha) {
        highestAlpha = this.particles[i].alpha;
      }
      this.particles[i].x = this.particles[i].x + Math.cos(this.particles[i].angle) * dt * PARTICLE_SPEED;
      this.particles[i].y = this.particles[i].y + Math.sin(this.particles[i].angle) * dt * PARTICLE_SPEED;
    }
    if (this.ending) {
      for (i = 0, l = this.lines.length; i < l; i++) {
        this.lines[i].alpha -= dt * LINE_FADE_SPEED;
        if (this.lines[i].alpha < 0) {
         this.lines[i].alpha = 0;
        } else if (this.lines[i].alpha > highestAlpha) {
          highestAlpha = this.lines[i].alpha;
        }
      }
    }
    if (!this.ending) {
      for (i = 0, l = parts.length; i < l; i++) {
        this.particles.splice(this.particles.indexOf(parts[i]), 1);
        this.aparticles.push(parts[i]);
      }
      if (this.aparticles.length > 0) {
        p = this.aparticles.pop();
        p.position = this.sprite.position.clone();
        p.alpha = 1;
        p.angle = this.angle + Math.PI + ((Math.random() - .5) * Math.PI);
        this.particles.push(p)
      }
      this.curline.clear();
      this.curline.lineStyle(2, LINE_COLOR, 1);
      this.curline.moveTo(this.fromStar.x, this.fromStar.y);
      this.curline.lineTo(this.sprite.x, this.sprite.y);
      if (this.trip >= this.dist) {
        this.lines.push(this.curline);
        this.nextStar.sprite.tint = STAR_COLORS[0];
        this.fromStar = this.nextStar;
        this.pickNext();
      }
    } else if (highestAlpha <= 0) {
      this.destroy();
    }
  }

  this.destroy = function () {
    var i, l, vkeys = Object.keys(this.visited);
    this.game.stage.removeChild(this.sprite);
    this.game.stage.removeChild(this.touch);
    for (i = 0, l = this.particles.length; i < l; i++) {
      this.game.stage.removeChild(this.particles[i]);
      this.particles[i].destroy();
    }
    for (i = 0, l = this.lines.length; i < l; i++) {
      this.game.stage.removeChild(this.lines[i]);
      this.lines[i].destroy();
    }
    for (i = 0, l = vkeys.length; i < l; i++) {
      this.game.stars[vkeys[i]].sprite.tint = STAR_COLORS[1];
    }
    this.game.removeComets.push(this);
  };

}).call(Comet.prototype);

function Star(game, x, y, cellx, celly) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.cellx = cellx;
  this.celly = celly;
  //this.sprite = new this.game.pixi.Sprite(this.game.pixi.loader.resources.star.texture);
  this.sprite = new this.game.pixi.Graphics();
  this.sprite.beginFill(0xFFFFFF, 1)
  this.sprite.drawCircle(0, 0, 1 + Math.random() * 3)
  this.sprite.endFill();
  this.touch = new this.game.pixi.Sprite();
  this.touch.width = 30;
  this.touch.height = 30;
  this.touch.anchor = new this.game.pixi.Point(.5, .5);
  this.touch.position = new this.game.pixi.Point(x, y);
  this.touch.interactive = true;
  this.touch.click = function () {
    var keys = Object.keys(this.links);
    this.game.comets.push(new Comet(this.game, this, this.links[keys[Math.floor(Math.random() * keys.length)]], 10, false));
  }.bind(this);
  this.sprite.x = x;
  this.sprite.y = y;
  //this.scale = Math.random() * .5 + .25;
  //this.scale = .6;
  //this.sprite.scale = new this.game.pixi.Point(this.scale, this.scale);
  this.sprite.anchor = new this.game.pixi.Point(.5, .5);
  //this.sprite.tint = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
  this.sprite.tint = STAR_COLORS[1];
  this.game.stage.addChild(this.sprite);
  this.game.stage.addChild(this.touch);
  this.links = {};
  this.lines = {};
  this.id = this.x + 'x' + this.y;
  this.alpha = 0;
}

(function () {

  this.animate = function (dt) {
    this.alpha += dt * TWINKLE_SPEED;
    this.sprite.alpha = 1 - Math.sin(this.alpha) * .7;
    if (this.alpha >= Math.PI) {
      this.alpha = 0;
      this.sprite.alpha = 1;
      return false;
    }
    return true;
  }

  this.setLinks = function () {
    var cx, cy;
    var other, dist, line;
    var near = [];
    var i, l;
    var startx = this.cellx - 1 >=0 ? this.cellx - 1 : 0;
    var endx = this.cellx + 1 < this.game.gridX ? this.cellx + 1 : this.cellx;
    var starty = this.celly - 1 >=0 ? this.celly - 1 : 0;
    var endy = this.celly + 1 < this.game.gridY ? this.celly + 1 : this.celly;
    for (cx = startx; cx <= endx; cx++) {
      for (cy = starty; cy <= endy; cy++) {
        this.game.cells[cx][cy].forEach(function (other) {
          if (other !== this && !this.links.hasOwnProperty(other.id)) {
            dist = Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
            near.push({star: other, dist: dist});
          }
         }.bind(this));
      }
    }
    near.sort(function (a, b) {
      return a.dist - b.dist;
    });
    i = 0;
    while (near[i].dist < FARTHEST && Object.keys(this.links).length < 4) {
      this.links[near[i].star.id] = near[i].star;
      near[i].star.links[this.id] = this;
      i++;
    }
    if (Object.keys(this.links).length === 0) {
      this.links[near[0].star.id] = near[0].star;
      near[0].star.links[this.id] = this;
    }
    /*
    Object.keys(this.links).forEach(function(key) {
      var other = this.links[key];
      line = new this.game.pixi.Graphics();
      line.lineStyle(1, 0xFF0000);
      line.moveTo(this.x, this.y);
      line.opacity = .4;
      line.lineTo(other.x, other.y);
      this.game.stage.addChild(line);
    }.bind(this));
    */
    this.game.stage.removeChild(this.sprite);
    this.game.stage.addChild(this.sprite);
  }

}.call(Star.prototype));

window.StarChart = StarChart;

},{}]},{},[1]);
