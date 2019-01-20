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
