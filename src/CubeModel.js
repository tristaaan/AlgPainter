/* Cube Model, taken from a previous project */
export default function CubeModel() {
  this.model = [1,1,1,1,1,1,1,1,1,  //L
          2,2,2,2,2,2,2,2,2,  //R
          3,3,3,3,3,3,3,3,3,  //F
          4,4,4,4,4,4,4,4,4,  //B
          5,5,5,5,5,5,5,5,5,  //U
          6,6,6,6,6,6,6,6,6]; //D
/*
 *    5
 *  1 3 2 4
 *    6
 */

  //direction 0 clockwise, 1 counterclockwise.
  this.U = function(direction){

    var c1 = [36,38,44,42];
    var c2 = [18,0,27, 9];
    var c3 = [2,29,11,20];

    var e1 = [37,41,43,39];
    var e2 = [1 ,28,10,19];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  this.L = function(direction){
    var c1 = [0,2,8,6];
    var c2 = [36,18,45,35];
    var c3 = [42,24,51,29];

    var e1 = [1, 5, 7, 3];
    var e2 = [39,21,48,32];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  this.F = function(direction){

    var c1 = [18,20,26,24];
    var c2 = [42,9, 47,8];
    var c3 = [44,15,45,2];

    var e1 = [19,23,25,21];
    var e2 = [43,12,46,5];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  this.R = function(direction){

    var c1 = [9,11,17,15];
    var c2 = [44,27,53,26];
    var c3 = [38,33,47,20];

    var e1 = [10,14,16,12];
    var e2 = [41,30,50,23];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  this.D = function(direction){

    var c1 = [45,47,53,51];
    var c2 = [24,15,33,6];
    var c3 = [26,17,35,8];

    var e1 = [46,50,52,48];
    var e2 = [25,16,34,7];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  this.B = function(direction){

    var c1 = [27,29,35,33];
    var c2 = [38,17,51,0 ];
    var c3 = [36,11,53,6 ];

    var e1 = [28,32,34,30];
    var e2 = [37,14,52,3 ];

    this.arbitraryMove(c1,c2,c3,e1,e2,direction);
  }

  //E S & M
  this.E = function (direction){    //equator slice, same direction as D
    var c1 = [3 ,21,12,30];
    var c2 = [4 ,22,13,31];
    var c3 = [5 ,23,14,32];

    if (!direction){
      this.rotate(c1);
      this.rotate(c2);
      this.rotate(c3);
    }
    else{
      this.rotate(c1.reverse());
      this.rotate(c2.reverse());
      this.rotate(c3.reverse());
    }
  }
  this.S = function (direction){    //Front slice, same direction as F
    var c1 = [39,10,50,7];
    var c2 = [40,13,49,4];
    var c3 = [41,16,48,1];

    if (!direction){
      this.rotate(c1);
      this.rotate(c2);
      this.rotate(c3);
    }
    else{
      this.rotate(c1.reverse());
      this.rotate(c2.reverse());
      this.rotate(c3.reverse());
    }
  }
  this.M = function (direction){  //Middle slice, same direction as L
    var c1 = [37,19,46,34];
    var c2 = [40,22,49,31];
    var c3 = [43,25,52,28];

    if (!direction){
      this.rotate(c1);
      this.rotate(c2);
      this.rotate(c3);
    }
    else{
      this.rotate(c1.reverse());
      this.rotate(c2.reverse());
      this.rotate(c3.reverse());
    }
  }

  this["U'"] = () => {this.U(true);}
  this["R'"] = () => {this.R(true);}
  this["F'"] = () => {this.F(true);}
  this["D'"] = () => {this.D(true);}
  this["L'"] = () => {this.L(true);}
  this["B'"] = () => {this.B(true);}

  this["M'"] = () => {this.M(true);}
  this["S'"] = () => {this.S(true);}
  this["E'"] = () => {this.E(true);}

  this.arbitraryMove = function(corners1, corners2, corners3, edges1, edges2, direction){
    if (!direction){    //clockwise
      this.rotate(corners1);
      this.rotate(corners2);
      this.rotate(corners3);

      this.rotate(edges1);
      this.rotate(edges2);
    }
    else{
      this.rotate(corners1.reverse());
      this.rotate(corners2.reverse());
      this.rotate(corners3.reverse());

      this.rotate(edges1.reverse());
      this.rotate(edges2.reverse());
    }
  }

  //moves a->b->c->d (clockwise)
  this.rotate = function (s){
    var a = s[0];
    var b = s[1];
    var c = s[2];
    var d = s[3];

    var tmp = this.model[a];

    this.model[a] = this.model[d];
    this.model[d] = this.model[c];
    this.model[c] = this.model[b];
    this.model[b] = tmp;
  }

  // inverts moves
  function inverseMoves(moves) {
    var ret = [];
    for(var i=0; i<moves.length; i++){
      var cur = moves[i];
      var baseLen = cur.indexOf('w') !== -1 ? 2: 1;
      if (cur.length < baseLen + 1) { //a single move
        ret.push(cur + "'");
      } else if (cur[cur.length-1] == "'") { //is prime move
        ret.push(cur.substring(0,cur.length-1));
      } else { //is 2 move
        ret.push(moves[i]);
      }
    }
    return ret.reverse();
  }

  // execute wide move, e.g. Rw -> breaks into two moves R and M'
  this.wideMove = function(m, prime) {
    this[m](prime);
    if (m == 'L') {
      this.M(prime);
    } else if (m == 'R') {
      this.M(!prime);
    } else if (m == 'D') {
      this.E(prime);
    } else if (m == 'U') {
      this.E(!prime);
    } else if (m == 'F') {
      this.S(prime);
    } else {
      this.S(!prime);
    }
  };

  //takes series of moves in an array formatted ["F", "U", "R", "U'", "R'", "F'"]
  this.doMoves = function (s){
    s = inverseMoves(s);
    for(var i=0; i<s.length; i++){
      var cur = s[i];
      if (cur.length == 2){
        if (cur[1] == '2') { // double move
          this[cur[0]](); this[cur[0]]();
        } else if (cur[1] == "'"){ // prime move
          this[cur]();
        } else {
          this.wideMove(cur[0], false); // plain wide move
        }
      } else if (cur.length == 3) { // some wide move
        if (cur[2] == 2) { // wide double
          this.wideMove(cur[0], false); this.wideMove(cur[0], false);
        } else { // wide prime
          this.wideMove(cur[0], true);
        }
      } else {
        this[cur](); // plain
      }
    }
  }
}