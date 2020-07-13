//Objective is to find the smallest path sum from the top to bottom of a triangle

let triangle = 
[
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]


//O(n) solution where n is the size of the triangle 

//Starting at the second row, we add on the minimum between the adjacent two bottom tiles
//and continue doing this until we reach the top
for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
        triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
}

return triangle[0][0]