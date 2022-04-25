var searchRang = function (a, target) {
    // write your code here
    var left, right, mid;
    var res = new Array(2);
    if (a.length === 0) {
        res[0] = -1
        res[1] = -1
        console.log(res)
    }
    left = 0;
    right = a.length - 1;
    // 寻找左边索引
    while (left+1 < right) {
        mid = left + Math.floor((right - left) / 2);
        if (a[mid] === target) {
            // 如果相等，往左找
            right=mid;
        }
        else if (a[mid] > target) {
            right = mid;
        }
        else {
            left = mid;
        }
    }
    // 注意这里的left和right顺序
    res[0]=a[left]===target?left:a[right]===target?right:-1;
    left = 0;
    right = a.length - 1;
    // 寻找右边索引
    while (left+1 < right) {
        mid = left + Math.floor((right - left) / 2);
        if (a[mid] === target) {
            // 如果相等，往右找
            left=mid;
        }
        else if (a[mid] > target) {
            right = mid;
        }
        else {
            left = mid;
        }
    }
    res[1]=a[right]===target?right:a[left]===target?left:-1;
    console.log(res);
}
const arr = [5,5,5]
const target = 5
searchRang(arr, target)

var searchInsert = function (nums, target) {
    // let num;
    // if(nums.indexOf(target)!==-1){
    //     return nums.indexOf(target);
    // }
    // else{
    //     for(var i=0;i<nums.length;i++){
    //         if(nums[i]>target){
    //             return i;
    //         }
    //     }
    //     return nums.length;
    // }
    let right = nums.length - 1, left = 0, mid;
    while (left + 1 < right) {
        mid=left+Math.floor((right-left)/2);
        if(nums[mid]===target){
            left=mid;
        }
        else if(nums[mid]>target){
            right=mid;
        }
        else{
            left=mid;
        }
    }
    if(nums[left]>=target){
        return left;
    }
    else if(nums[right]>=target){
        return right;
    }
    else if(target>nums[right]){
        return right+1;
    }
};
// 1356 5 2 7

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let index = 0;
    if (m === 0 || n === 0) {
        return false;
    }
    // for (var i = m - 1; i >= 0; i--) {
    //     if(target>=matrix[i][0]){
    //         index=i;
    //         break;
    //     }
    // }
    // for (var i=0;i<n;i++){
    //     if(target===matrix[index][i]){
    //         return true;
    //     }
    // }
    // return false;
    let left = 0, right = m * n - 1, mid;
    while (left + 1 < right) {
        mid = left + Math.floor((right - left) / 2);
        // matrix[x][y]=n*x+y
        // 1=1*0+1
        val = matrix[Math.floor(mid / n)][mid % n];
        if (val === target) {
            return true;
        }
        else if (val > target) {
            right = mid;
        }
        else {
            left = mid;
        }
    }
    if (matrix[Math.floor(left / n)][left % n] === target || matrix[Math.floor(right / n)][right % n] === target) {
        return true;
    }
    return false;
};


/* isBadVersion = function(version) {
    *     ...
    * };
    */
   
   /**
    * @param {function} isBadVersion()
    * @return {function}
    */
   var solution = function(isBadVersion) {
       /**
        * @param {integer} n Total versions
        * @return {integer} The first bad version
        */
       return function(n) {
           let start=1,end=n,mid;
           while(start+1<end){
               mid=start+Math.floor((end-start)/2);
               if(isBadVersion(mid)===true){
                   end=mid;
               }
               else{
                   start=mid;
               }
           }
           return isBadVersion(start)?start:end;
       };
   };