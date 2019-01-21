var reverseList = function(head) {
  let node = head;
  if (node.next) {
    let previous = node;
    node = node.next;
    reverseList(node);
    node.next = previous || null;
    previous.next = null;
  }
};

let linkedList = function(value) {
  this.value = value;
  this.next = null;
};

/* TESTS */
var a = new linkedList("1");
var b = new linkedList("2");
var c = new linkedList("3");
var d = new linkedList("4");
var e = new linkedList("5");
var f = new linkedList("6");
var g = new linkedList("7");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

reverseList(a);
console.log(g);


function difference(val1, val2){
	return Math.abs(val1-val2)
}


function findClosestValueInBst(tree, target) {
  let currentVal = tree.value
	function findClosest(tree, target, previousVal){
	if(target > currentVal){
		if(tree.right){
			let rightClosest = findClosest(tree.right, target, currentVal)
			difference(currentVal, target) < difference(rightClosest, target) ? return currentVal : return rightClosest
		}	
		else {
			difference(currentVal, target) < difference(previousVal, target) ?
				return currentVal : return previousVal
		}
	}
	if(target <= currentVal){
		if(tree.left){
			let leftClosest = findClosest(tree.left, target, currentVal)
			difference(currentVal, target) < difference(leftClosest, target) ?
				return currentVal : return leftClosest
		}	
		else {
			difference(currentVal, target) < difference(previousVal, target) ?
				return currentVal : return previousVal
		}
	}
	}
}