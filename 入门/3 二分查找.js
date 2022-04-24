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
