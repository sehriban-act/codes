
// A hashing based Javascript program to find
// if there are four elements with given sum.

// The function finds four elements
// with given sum X
function findFourElements(arr,n,X)
{
	// Store sums of all pairs in a hash table
		let mp = new Map();
		for (let i = 0; i < n - 1; i++)
			for (let j = i + 1; j < n; j++)
				mp.set(arr[i] + arr[j], [i, j]);
// Traverse through all pairs and search
		// for X - (current pair sum).
		for (let i = 0; i < n - 1; i++) {
			for (let j = i + 1; j < n; j++) {
				let sum = arr[i] + arr[j];

				// If X - sum is present in hash table,
				if (mp.has(X - sum)) {

					// Making sure that all elements are
					// distinct array elements and an
					// element is not considered more than
					// once.
					let p = mp.get(X - sum);
					if (p[0] != i && p[0] != j
						&& p[1] != i && p[1] != j) {
						console.log(
							arr[i] + ", " + arr[j] + ", "
							+ arr[p[0]] + ", "
							+ arr[p[1]]);
						return;
					}
				}
			}
		}
}

// Driver Code
let arr=[1,0,-1,0,-2,2];
let n = arr.length;
let X = 0;

// Function call
findFourElements(arr, n, X);

// This code is contributed by rag2127