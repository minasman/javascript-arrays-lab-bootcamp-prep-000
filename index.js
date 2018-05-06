const app = "I don't do much.";
function beforeEach(){
  kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}

function removeFirstKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}