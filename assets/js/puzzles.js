// Unique structures in all puzzles
const YGR = "https://test-ygr.netlify.app/";
const cY = "https://test-cy.netlify.app/";
const YRG = "https://test-yrg.netlify.app/";
const GR_Y = "https://test-gr-one.netlify.app/";
const RG_Y = "https://test-rg-one.netlify.app/";
const eY = "https://test-ey.netlify.app/";
const RY_G = "https://test-ry-one.netlify.app/";
const GY_R = "https://test-gy-one.netlify.app/";

// Two choices in each puzzle
const p1_a = "https://www.dropbox.com/s/pby074l0mh1ukd0/puzzle1a.png?raw=1";
const p1_b = "https://www.dropbox.com/s/pz14i2qrk0rgiff/puzzle1b.png?raw=1";
const p2_a = "https://www.dropbox.com/s/x6n8n3e5q4fgmo1/puzzle2a.png?raw=1";
const p2_b = "https://www.dropbox.com/s/gropbqqc534p9sg/puzzle2b.png?raw=1";
const p3_a = "https://www.dropbox.com/s/12xc42aqv94dwwb/puzzle3a.png?raw=1";
const p3_b = "https://www.dropbox.com/s/aeyul5qi5vjvnpu/puzzle3b.png?raw=1";
const p4_a = "https://www.dropbox.com/s/dtjbibgjchik0bm/puzzle4a.png?raw=1";
const p4_b = "https://www.dropbox.com/s/6qzxrtc9uxcdubp/puzzle4b.png?raw=1";
const p5_a = "https://www.dropbox.com/s/4e68esix151oxgh/puzzle5a.png?raw=1";
const p5_b = "https://www.dropbox.com/s/eda5u4vqmwy5cvo/puzzle5b.png?raw=1";
const p6_a = "https://www.dropbox.com/s/r2e4pwhqeuwq98r/puzzle6a.png?raw=1";
const p6_b = "https://www.dropbox.com/s/sfscsrgqa9bwzxy/puzzle6b.png?raw=1";

// Function for making random choices
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Randomly select a correct structure in each puzzle
var p1 = randomChoice([YGR, cY]);
var p2 = randomChoice([YRG, cY]);
var p3 = randomChoice([YGR, GR_Y]);
var p4 = randomChoice([YRG, RG_Y]);
var p5 = randomChoice([eY, RY_G]);
var p6 = randomChoice([eY, GY_R]);

// Function for shuffling an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Shuffle two choices in each puzzle
var c1 = shuffle([p1_a, p1_b]);
var c2 = shuffle([p2_a, p2_b]);
var c3 = shuffle([p3_a, p3_b]);
var c4 = shuffle([p4_a, p4_b]);
var c5 = shuffle([p5_a, p5_b]);
var c6 = shuffle([p6_a, p6_b]);

// Function for shuffling two arrays the same way
function coshuffle(obj1, obj2) {
  var index = obj1.length;
  var rnd, tmp1, tmp2;

  while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp1 = obj1[index];
    tmp2 = obj2[index];
    obj1[index] = obj1[rnd];
    obj2[index] = obj2[rnd];
    obj1[rnd] = tmp1;
    obj2[rnd] = tmp2;
  }

  return [obj1, obj2];
}

// Shuffle puzzles and choices within each group 
var puzzles1 = [p1, p3, p5];
var choices1 = [c1, c3, c5];
var group1 = coshuffle(puzzles1, choices1);
var new_puzzles1 = group1[0];
var new_choices1 = group1[1];

var puzzles2 = [p2, p4, p6];
var choices2 = [c2, c4, c6];
var group2 = coshuffle(puzzles2, choices2);
var new_puzzles2 = group2[0];
var new_choices2 = group2[1];

// Shuffle puzzles and choices between 2 groups
var all_puzzles = [new_puzzles1, new_puzzles2];
var all_choices = [new_choices1, new_choices2];
var both_groups = coshuffle(all_puzzles, all_choices);
var final_puzzles = both_groups[0];
var final_choices = both_groups[1];

// Populate 6 iFrames with URL's to 6 puzzles
var show1 = document.getElementById('frame1');
show1.src = final_puzzles[0][0];

var show2 = document.getElementById('frame2');
show2.src = final_puzzles[0][1];

var show3 = document.getElementById('frame3');
show3.src = final_puzzles[0][2];

var show4 = document.getElementById('frame4');
show4.src = final_puzzles[1][0];

var show5 = document.getElementById('frame5');
show5.src = final_puzzles[1][1];

var show6 = document.getElementById('frame6');
show6.src = final_puzzles[1][2];

// Add corresponding choices for each puzzle
var choice1_a = document.getElementById('choice1_a');
choice1_a.src = final_choices[0][0][0];

var choice1_b = document.getElementById('choice1_b');
choice1_b.src = final_choices[0][0][1];

var choice2_a = document.getElementById('choice2_a');
choice2_a.src = final_choices[0][1][0];

var choice2_b = document.getElementById('choice2_b');
choice2_b.src = final_choices[0][1][1];

var choice3_a = document.getElementById('choice3_a');
choice3_a.src = final_choices[0][2][0];

var choice3_b = document.getElementById('choice3_b');
choice3_b.src = final_choices[0][2][1];

var choice4_a = document.getElementById('choice4_a');
choice4_a.src = final_choices[1][0][0];

var choice4_b = document.getElementById('choice4_b');
choice4_b.src = final_choices[1][0][1];

var choice5_a = document.getElementById('choice5_a');
choice5_a.src = final_choices[1][1][0];

var choice5_b = document.getElementById('choice5_b');
choice5_b.src = final_choices[1][1][1];

var choice6_a = document.getElementById('choice6_a');
choice6_a.src = final_choices[1][2][0];

var choice6_b = document.getElementById('choice6_b');
choice6_b.src = final_choices[1][2][1];