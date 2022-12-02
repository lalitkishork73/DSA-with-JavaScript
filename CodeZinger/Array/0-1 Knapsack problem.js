/*

Tags:	Array
Given weight array and profit array of n items, put these items in a knapsack(bag) of capacity W to get the maximum total profit in the knapsack. In other words, given two integer arrays Profit [0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[ ] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

Input:

    3

    10 20 30

    60 100 120

    50

    where:

First line represents the number of items.
Second line represents the array of weights of items.
Third line represents the array of profits from items.
Fourth line represents the maximum total allowable weight of the Knapsack(bag).
 
Output:

    220


Explanation: From the weight and the profit matrix above

weight = 10, profit = 60
weight = 20, profit = 100    
weight = 30, profit = 120  
        So to have maximum profit and total weight < = 50 we will select 2nd and 3rd item, such that weight = 20 + 30  = 50 and profit is 100 + 120 = 220. Hence the output 220.

Assumptions:

Number of items can be in the range 1 to 1000.
Elements of the weight and profit arrays can be in the range 1 to 1000.
Weight of the Knapsack can be in the range 1 to 1000.

 */
function solution(a, b, c, d) {
    //Write your solution here
    var dp = Array(d + 1).fill(0);
    for (let i = 1; i < a + 1; i++) {
        for (let z = d; z >= 0; z--) {
            if (b[i - 1] <= z) {
                dp[z] = Math.max(dp[z], dp[z - b[i - 1]] + c[i - 1]);
            }
        }
    }
    return dp[d]
}


function main() {
    let a = parseInt(readLine());
    let b = readLine().split(' ').map(Number);
    let c = readLine().split(' ').map(Number);
    let d = parseInt(readLine());


    var res = solution(a, b, c, d);
    console.log(res);
}