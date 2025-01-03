function printZigZag(matrix) {
    let N = matrix.length;   // Number of rows
    let M = matrix[0].length; // Number of columns
  
    // Traverse columns from right to left
    for (let j = M - 1; j >= 0; j--) {
      // If the column index is even, move down (top to bottom)
      if ((M - j) % 2 != 0) {
        for (let i = 0; i < N; i++) {
          process.stdout.write(matrix[i][j] + " ");
        }
      }
      // If the column index is odd, move up (bottom to top)
      else {
        for (let i = N - 1; i >= 0; i--) {
          process.stdout.write(matrix[i][j] + " ");
        }
      }
    }
  }
  
  // Example usage:
  let matrix = [
    [5, 4, 3],
    [2, 1, 6],
    [7, 8, 9]
  ];
  
  printZigZag(matrix);  // Expected Output: 5 4 3 2 1 6 7 8 9
  

