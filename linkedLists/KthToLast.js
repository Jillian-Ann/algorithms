//PROBLEM #2

//Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

function findKthToLast(k, head) {
  let count = 0;
  let currentNode = head;
  let kToLast = null;
  while (count < k && currentNode.next) {
    ++count;
    currentNode = currentNode.next;
  }
  kToLast = head;
  while (currentNode.next) {
    currentNode = currentNode.next;
    kToLast = kToLast.next; //asign kth reltive to currentnode and move till you reach end of list
  }
  console.log(kToLast);
  return kToLast.value;
}

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

console.log(findKthToLast(3, a));

findKthToLast(10, a);

findKthToLast(-1, a);

findKthToLast(0, a);

findKthToLast(1, a);
