window.StarChart = (function () {
  var STAR_COLORS = [0x6acad1, 0xffffff];
  var LINE_COLOR = 0x6acad1;
  var LINE_SPEED = 40;
  var LINE_FADE_SECONDS = 10;
  var LINE_FADE_IMMEDIATE = true;
  var LINE_OPACITY_MAX = .9;
  var LINE_OPACITY_MIN = .3;
  var LINE_FORK_CHANCE = .3;
  var HOPS = 10;
  var NEW_LINE_ON_HOP = 12;
  var STAR_RADIUS_MAX = 4;
  var STAR_RADIUS_MIN = .5;
  var STAR_RADIUS_LARGE_MIN = 2;
  var STAR_RATIO_LARGE = .1;
  var STAR_OPACITY_MAX = .7;
  var STAR_OPACITY_MIN = .2;
  var CELL_WIDTH_TARGET = 70;
  var CELL_HEIGHT_TARGET = 70;
  var STARS_PER_CELL = 2;
  var FARTHEST_NEIGHBOR = 140;
  var TWINKLE_SPEED = 6;
  var TWINKLES_PER_SECOND = 20;

  var _STAR_OPACITY_DIFF = STAR_OPACITY_MAX - STAR_OPACITY_MIN;
  var _TWINKLE_RATE = 1 / TWINKLES_PER_SECOND;
  var _LINE_FADE_SPEED = 1 / LINE_FADE_SECONDS;

  function StarChart(div, pixi) {
    this.div = div;
    this.pixi = pixi;
    this.pixi.utils._saidHello = true;
    this.renderer = this.pixi.autoDetectRenderer(800, 600, {antialias: true, transparent: true});
    div.appendChild(this.renderer.view);
    this.stage = new this.pixi.Container();
    this.cellWidth = this.goalWidth = CELL_WIDTH_TARGET;
    this.cellHeight = this.goalHeight = CELL_HEIGHT_TARGET;
    this.starCount = STARS_PER_CELL;
    this.running = false;
    this.stars = {};
    this.starList = [];
    this.cells = [];
    this.comets = [];
    this.removeComets = [];
    this.activeStar = null;
    this.setSize();
    window.addEventListener('resize', function (e)  {
      this.setSize();
    }.bind(this));
    this.renderer.view.addEventListener('click', function (e) {
      this.comets.push(new CometGroup(this, this.findNearestStar(e.clientX, e.clientY), undefined, HOPS, false));
    }.bind(this));
  }

  (function () {

    this.setSize = function () {
      var width = this.div.clientWidth;
      var height = this.div.clientHeight;
      this.renderer.view.style.width = width + 'px';
      this.renderer.view.style.height = height + 'px';
      this.renderer.resize(width, height);
      this.gridX = Math.floor(this.renderer.view.width / this.goalWidth);
      this.gridY = Math.floor(this.renderer.view.height / this.goalHeight);
      this.cellWidth = this.renderer.view.width / this.gridX;
      this.cellHeight = this.renderer.view.height / this.gridY;
      this.comets.forEach(function (comet) {
        comet.destroy();
      }.bind(this));
      this.starList.forEach(function (star) {
        star.destroy();
      }.bind(this));
      this.stage.removeChildren();
      this.setup();
    };

    this.findNearestStar = function (x, y) {
      var mindist = this.div.clientWidth + this.div.clientHeight;
      var dist;
      var star;
      var cellx = Math.floor(x / this.cellWidth);
      var celly = Math.floor(y / this.cellHeight);
      var startx = cellx - 1 >=0 ? cellx - 1 : 0;
      var endx = cellx + 1 < this.gridX ? cellx + 1 : cellx;
      var starty = celly - 1 >=0 ? celly - 1 : 0;
      var endy = celly + 1 < this.gridY ? celly + 1 : celly;
      for (cx = startx; cx <= endx; cx++) {
        for (cy = starty; cy <= endy; cy++) {
          this.cells[cx][cy].forEach(function (other) {
            dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
            if (dist < mindist) {
              mindist = dist;
              star = other;
            }
          }.bind(this));
        }
      }
      return star;
    };

    this.setup = function () {
      this.stars = {};
      this.starList = [];
      this.cells = [];
      this.comets = [];
      this.removeComets = [];
      this.activeStar = null;
      this.lastNow = window.performance.now();
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

      this.comets.push(new CometGroup(this, this.randomStar(), undefined, HOPS, true));
      this.twinkleStar();
    }

    this.run = function () {
      this.running = true;
      this.animate();
    };

    this.twinkleStar = function () {
      var keys = Object.keys(this.stars);
      this.stars[keys[Math.floor(Math.random() * keys.length)]].twinkling = true;
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
      if (lastTwinkle > _TWINKLE_RATE) {
        lastTwinkle = 0;
        this.twinkleStar();
      }
      for (r = 0, l = this.starList.length; r < l; r++) {
          this.starList[r].animate(dt);
      }
      for (r = 0, l = this.comets.length; r < l; r++) {
          this.comets[r].animate(dt);
      }
      for (r = 0, l = this.removeComets.length; r < l; r++) {
        this.comets.splice(this.comets.indexOf(this.removeComets[r]), 1);
      }
      this.removeComets = [];
      this.renderer.render(this.stage);
    };

  }).call(StarChart.prototype);

  function CometGroup(game, star, next, hops, addAnother) {
    this.children = [];
    this.game = game;
    this.hops = hops;
    this.visited = {};
    this.ended = 0;
    this.alpha = 1;
    this.fading = false;
    this.added = addAnother ? false : true;
    this.addAnother = addAnother;
    this.lineAlpha = LINE_OPACITY_MIN + Math.random() * (LINE_OPACITY_MAX - LINE_OPACITY_MIN);
    this.addComet(star, next, hops);
  }

  (function () {

    this.addComet = function (star, next, hops) {
      this.children.push(new Comet(this.game, this, star, next, hops));
    }

    this.animate = function (dt) {
      var i, l, v, vkeys, r, g, b, r2, g2, b2;
      if (this.fading) {
        this.alpha -= dt * _LINE_FADE_SPEED;
        if (this.alpha < 0) {
          this.alpha = 0;
        }
        vkeys = Object.keys(this.visited);
        r = (LINE_COLOR >> 16) & 0xff;
        g = (LINE_COLOR >> 8) & 0xff;
        b = LINE_COLOR & 0xff;
        r2 = r + ((0xff - r) * (1 - this.alpha));
        g2 = g + ((0xff - g) * (1 - this.alpha));
        b2 = b + ((0xff - b) * (1 - this.alpha));
        for (i = 0, l = vkeys.length; i < l; i++) {
          this.game.stars[vkeys[i]].sprite.tint = r2 << 16 | g2 << 8 | b2;
        }
      }
      for (i = 0, l = this.children.length; i < l; i++) {
        this.children[i].animate(dt, this.alpha);
      }
      if (this.alpha === 0) {
        this.destroy();
      }
    };

    this.didHop = function (hop) {
      if (!this.added && HOPS - hop === NEW_LINE_ON_HOP) {
        this.added = true;
        this.game.comets.push(new CometGroup(this.game, this.game.randomStar(), undefined, HOPS, this.addAnother));
      }
    };

    this.end = function () {
      this.ended++;
      if (this.ended === this.children.length) {
        this.fade();
      }
    };

    this.fade = function () {
      var i, l;
      for (i = 0, l = this.children.length; i < l; i++) {
        this.children[i].fade();
      }
      this.fading = true;
      if (!this.added) {
        this.added = true;
        this.game.comets.push(new CometGroup(this.game, this.game.randomStar(), undefined, HOPS, this.addAnother));
      }
    }

    this.destroy = function () {
      var i, l, vkeys;
      for (i = 0, l = this.children.length; i < l; i++) {
        this.children[i].destroy();
      }
      vkeys = Object.keys(this.visited);
      for (i = 0, l = vkeys.length; i < l; i++) {
        this.game.stars[vkeys[i]].sprite.tint = STAR_COLORS[1];
      }
      this.game.removeComets.push(this);
    };

  }.call(CometGroup.prototype));

  function Comet(game, parent, star, next, hops) {
    this.game = game;
    this.parent = parent;
    this.fromStar = star;
    this.fromStar.sprite.tint = STAR_COLORS[0];
    this.nextStar = next;
    this.angle = null;
    this.trip = 0;
    this.particles = [];
    this.aparticles = [];
    this.hops = hops;
    var part;
    this.speed = LINE_SPEED;
    this.sprite = new this.game.pixi.Sprite();
    this.sprite.anchor = new this.game.pixi.Point(.5, .5);
    this.sprite.scale = new this.game.pixi.Point(.5, .5);
    this.sprite.alpha = 0;
    this.game.stage.addChild(this.sprite);
    this.dist = null;
    this.lineColor = LINE_COLOR;
    this.lines = [];
    this.curline = new this.game.pixi.Graphics();
    this.ending = false;
    this.fading = false;
    if (typeof this.nextStar === 'undefined') {
      //var keys = Object.keys(this.fromStar.links);
      //this.nextStar = this.game.stars[keys[Math.floor(Math.random() * keys.length)]]
      this.pickNext();
    }
    //this.setNext(true);
  }

  (function () {

    this.setNext = function (first) {
      var i, l;
      this.parent.visited[this.fromStar.id] = true;
      this.parent.visited[this.nextStar.id] = true;
      this.speed = LINE_SPEED * (1 - (Math.abs(this.fromStar.radius - this.nextStar.radius) / 3) * .7)
      this.speed *= .5 + ((this.fromStar.radius + this.nextStar.radius - 2) / 6 * .5)
      if (!first && this.hops > 0 && Math.random() < LINE_FORK_CHANCE) {
        this.parent.addComet(this.fromStar, undefined, this.hops - 1, false);
      }
      this.angle = Math.atan2(this.fromStar.y - this.nextStar.y, this.fromStar.x - this.nextStar.x) + Math.PI;
      this.dist = Math.sqrt(Math.pow(this.fromStar.x - this.nextStar.x, 2) + Math.pow(this.fromStar.y - this.nextStar.y, 2));

      this.curline = new this.game.pixi.Graphics();
      this.curline.alpha = this.parent.lineAlpha;
      this.curline.lineStyle(2, this.lineColor, 1);
      this.curline.moveTo(-2, -2);
      this.curline.lineTo(-1, -1);
      this.game.stage.addChild(this.curline);
    };

    this.pickNext = function (first) {
      if (this.hops <= 0) {
        return this.end();
      }
      this.trip = 0;
      var ikeys = Object.keys(this.fromStar.links);
      var keys = [];
      var i, l;
      for (i = 0, l = ikeys.length; i < l; i++) {
        if (!this.parent.visited[ikeys[i]]) {
          keys.push(ikeys[i]);
        }
      }
      if (keys.length === 0) {
        return this.end();
      }
      this.nextStar = this.fromStar.links[keys[Math.floor(Math.random() * keys.length)]];
      this.setNext();
      if (!first) {
        this.hops--;
        this.parent.didHop(this.hops)
      }
    };

    this.end = function (fromParent) {
      this.ending = true;
      this.parent.end();
    }

    this.fade = function () {
      this.fading = true;
    }

    this.animate = function (dt, alpha) {
      var line, i, l;
      if (this.ending && !this.fading) {
        return;
      }
      this.trip += dt * this.speed;

      if (this.ending && alpha !== 1) {
        for (i = 0, l = this.lines.length; i < l; i++) {
          this.lines[i].alpha = alpha * this.parent.lineAlpha;
        }
        this.curline.alpha = alpha * this.parent.lineAlpha;
      }
      if (!this.ending) {
        this.sprite.x = this.fromStar.x + Math.cos(this.angle) * this.trip;
        this.sprite.y = this.fromStar.y + Math.sin(this.angle) * this.trip;
        this.curline.clear();
        this.curline.lineStyle(2, this.lineColor, 1);
        this.curline.moveTo(this.fromStar.x, this.fromStar.y);
        if (this.trip >= this.dist) {
          this.curline.lineTo(this.nextStar.x, this.nextStar.y);
          this.lines.push(this.curline);
          this.nextStar.sprite.tint = STAR_COLORS[0];
          this.fromStar = this.nextStar;
          this.pickNext();
        } else {
          this.curline.lineTo(this.sprite.x, this.sprite.y);
        }
      }
    }

    this.destroy = function () {
      var i, l, vkeys = Object.keys(this.parent.visited);
      this.game.stage.removeChild(this.sprite);
      for (i = 0, l = this.lines.length; i < l; i++) {
        this.game.stage.removeChild(this.lines[i]);
      }
      this.game.stage.removeChild(this.curline);
    };

  }).call(Comet.prototype);

  function Star(game, x, y, cellx, celly) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.cellx = cellx;
    this.celly = celly;
    this.sprite = new this.game.pixi.Graphics();
    this.sprite.beginFill(0xFFFFFF, 1)
    if (Math.random() < STAR_RATIO_LARGE) {
      this.radius = STAR_RADIUS_LARGE_MIN + (Math.random() * (STAR_RADIUS_MAX - STAR_RADIUS_LARGE_MIN));
    } else {
      this.radius = STAR_RADIUS_MIN + (Math.random() * (STAR_RADIUS_LARGE_MIN - STAR_RADIUS_MIN));
    }
    this.sprite.drawCircle(0, 0, this.radius);
    this.sprite.endFill();
    this.target_alpha = this.sprite.alpha = STAR_OPACITY_MAX - Math.random() * _STAR_OPACITY_DIFF;

    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.anchor = new this.game.pixi.Point(.5, .5);
    this.sprite.tint = STAR_COLORS[1];
    this.game.stage.addChild(this.sprite);
    this.links = {};
    this.lines = {};
    this.twinkling = false;
    this.id = this.x + 'x' + this.y;
    this.alpha = 0;
  }

  (function () {

    this.animate = function (dt) {
      if (this.twinkling) {
        this.alpha += dt * TWINKLE_SPEED;
        this.sprite.alpha = this.target_alpha - Math.sin(this.alpha) * (this.target_alpha - STAR_OPACITY_MIN);
        if (this.alpha >= Math.PI) {
          this.alpha = 0;
          this.sprite.alpha = this.target_alpha;
          this.twinkling = false;
        }
      }
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
      while (near[i].dist < FARTHEST_NEIGHBOR && Object.keys(this.links).length < 4) {
        this.links[near[i].star.id] = near[i].star;
        near[i].star.links[this.id] = this;
        i++;
      }
      if (Object.keys(this.links).length === 0) {
        this.links[near[0].star.id] = near[0].star;
        near[0].star.links[this.id] = this;
      }
      this.game.stage.removeChild(this.sprite);
      this.game.stage.addChild(this.sprite);
    }

    this.destroy = function () {
      this.game.stage.removeChild(this.sprite);
      Object.keys(this.links).forEach(function (linkid) {
        delete this.links[linkid].links[this.id];
      }.bind(this));
      delete this.game.stars[this.id];
      this.game.starList.splice(this.game.starList.indexOf(this), 1)
    };

  }.call(Star.prototype));

  return StarChart;
})();
