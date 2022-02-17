

// JavaScript program to check length
// of a given linklist


	// Defining structure
	class Node {
			constructor() {
				this.data = 0;
				this.next = null;
			}
		}
	// Function to check the length of linklist
	function LinkedListLength( head) {
		console.log();
		while (head != null && head.next != null) {
			head = head.next.next;
		}
		if (head == null)
			return 0;
		return 1;
	}

	// Push function
	function push( head , info) {
		// Allocating node
		node = new Node();

		// Info into node
		node.data = info;

		// Next of new node to head
		node.next = (head);

		// head points to new node
		(head) = node;
	}

	// // Driver code
	
		head = null;

		// Adding elements to Linked List
		// push(head, 4);
		// push(head, 5);
		// push(head, 7);
		// push(head, 2);
		// push(head, 9);
		// push(head, 6);
		// push(head, 1);
		// push(head, 2);
		// push(head, 0);
		// push(head, 5);
		// push(head, 5);
		var check = LinkedListLength(head);
console.log(check);
		// Checking for length of
		// linklist
		if (check == 0) {
		console.log("Odd");
		} else {
			console.log("Even");
		}

// This code contributed by umadevi9616

