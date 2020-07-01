class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class Tree {
  constructor(root = null) {
    this.root = root;
  }
}
////////////
//////////////
function ifATreeFallsInTheWoods(tree1, tree2) {
  const allMap = new Map();
  const collisionsMap = new Map();
  preOrder(tree1.root, allMap, collisionsMap);
  preOrder(tree2.root, allMap, collisionsMap);
  return [...collisionsMap.keys()];
}
function preOrder(current, allMap, collisionsMap) {
  // console.log(current)
  if (!current) return;
  //if the map already has the value, add the value to the collisions map.
  if (allMap.has(current.value)) {
    collisionsMap.set(current.value, true);
    //otherwise add it to the allMap
  } else {
    allMap.set(current.value, true);
  }
  //traverse.
  if (current.left) {
    preOrder(current.left, allMap, collisionsMap);
  }
  if (current.right) {
    preOrder(current.right, allMap, collisionsMap);
  }
}

module.exports = {ifATreeFallsInTheWoods, Tree, Node};

