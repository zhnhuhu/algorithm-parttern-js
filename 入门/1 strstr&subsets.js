
var strStr = function(haystack, needle) {
    if(needle.length===0){
        return console.log (0);
    }
    for(var i=0;i<haystack.length-needle.length+1;i++){
        if(haystack[i]===needle[0]){
            for(var j=1;j<needle.length;j++){
                if(haystack[i+j]!=needle[j]){
                    break;
                }
            }
            if(j===needle.length){
                 return console.log (i);
            }
        }
    }
    return console.log (-1);
};
strStr('hello','ll')

var subsetd=function(nums){
    const t=[]
    const ans=[]
    const n=nums.length
    const dfs=(cur)=>{
        if(cur===nums.length){
            ans.push(t.slice())
            return;
        }
        // 选择该数
        t.push(nums[cur])
        dfs(cur+1)
        // 不选择该数
        t.pop()
        dfs(cur+1)
    }
    dfs(0)
    return console.log(ans);
}
subsetd([1,2,3])
var test=()=>{
    const t=[]
    const ans=[]
    t.push('1')
    ans.push(t)
    console.log(ans);
    t.push('2')
    ans.push(t)
    console.log(ans);
}
test()