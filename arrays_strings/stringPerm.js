// LINKED LIST PROBLEMS

//PROBLEM #1

// R�mov� Dups! Write code to remove duplicates from an unsorted linked list.

var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function removeDubs(head) {
  let currentval = head.value; // "a"
  let nextnode = head.next; // b
  let previousnode = null;
  while (nextnode) {
    //true
    if (currentval === nextnode.value) {
      // "a" =! "a"
      previousnode.next = previousnode.next.next || null; //
    }
    previousnode = nextnode;
    nextnode = nextnode.next; // a2
  }
  if (head.next) {
    removeDubs(head.next);
  }
}

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");
var a2 = new LinkedList("a");
var c2 = new LinkedList("c");

a.next = b;
b.next = c;
c.next = d;
c2.next = e;
e.next = a2;
d.next = c2;

var printLinkedList = function(head) {
  var node = head;
  console.log("start of linked list");
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log("end of linked list");
};

printLinkedList(a);
removeDubs(a);
printLinkedList(a);
