// BST TRAVERSALS

const node = function(value) {
  this.value = value;
  this.left = {};
  this.right = {};
};

/* 
in order - traverse until you find the end minumum value in tree 
	recurse through left and right nodes if exist
	base case minimum value in tree 
	push to return array
*/

function inOrderTraverse(tree, array) {
  if (tree.left) {
    inOrderTraverse(tree.left, array);
  }
  array.push(tree.value);
  if (tree.right) {
    inOrderTraverse(tree.right, array);
  }
  return array;
}

function preOrderTraverse(tree, array) {
  array.push(tree.value);
  if (tree.left) {
    preOrderTraverse(tree.left, array);
  }
  if (tree.right) {
    preOrderTraverse(tree.right, array);
  }
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree.left) {
    postOrderTraverse(tree.left, array);
  }
  if (tree.right) {
    postOrderTraverse(tree.right, array);
  }
  array.push(tree.value);
  return array;
}
