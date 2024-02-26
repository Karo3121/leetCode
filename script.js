




//--------------------------------------------------------------------------------------------------------------------------------------

//21. Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) {

    let newArr = []

    for (let i = 0; i < list1.length; i++) {
        newArr.push(list1[i])        
    }
    for (let j = 0; j < list2.length; j++) {
        newArr.push(list2[j])
    }



    newArr = newArr.sort((a,b) => {
        return a - b
    })

    return newArr



};







// console.log(mergeTwoLists([1,2,4],[1,3,4]));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

//27. Remove Element

var removeElement = function(nums, val) {
    let newArr = []

    for (let i = 0; i < nums.length; i++) {
        if (val == nums[i]) {
            
        }else{
            newArr.push(nums[i])   
            console.log(newArr);
        }
    }
    return newArr.length

};




// console.log(removeElement([3,2,2,3], 3));

//--------------------------------------------------------------------------------------------------------------------------------------





//--------------------------------------------------------------------------------------------------------------------------------------

//58. Length of Last Word


var lengthOfLastWord = function(s) {
    
    s = s.trim().split("").reverse().join("")
    let str = ""
    // console.log(s);
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            str += s[i]
        }else{
            break
        }       
    }
    return str.length
};



// console.log(lengthOfLastWord("    Hello World     "));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

//35. Search Insert Position


var searchInsert = function(nums, target) {
    let targetLast = 0
    let targetCont = 0
    if (target <= nums[0]) {
        return 0
    }else if (target > nums[nums.length - 1]) {
        return nums.length
    }

    for (let i = 0; i < nums.length; i++) {
        if (target == nums[i]) {
            return i
        }else if (target - 1  == nums[i] ) {
            targetLast = i
        }else if (target + 1  == nums[i] ) {
            targetCont = i
        }
        
    }

    console.log(targetCont);
    console.log(targetLast);
    if (targetCont - 1 == targetLast ) {
        return targetLast + 1
    }else if (targetCont == 0) {
        console.log(targetLast);
        return targetLast + 1
    }else if (targetLast == 0) {
        return targetCont 
        
    }
    
};



// console.log(searchInsert([1,3,5,6], 11));

//--------------------------------------------------------------------------------------------------------------------------------------








//--------------------------------------------------------------------------------------------------------------------------------------

//26. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let obj = {}
    let output = []

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = 0
        }

        obj[nums[i]] += 1

    }
    
    output = Object.keys(obj)
    console.log(output);

    return output


};






// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

//--------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------

//66. Plus One

var plusOne = function(digits) {
    if (digits[digits.length - 1] == 9) {
        for (let i = digits.length -1 ; 0 <= i ; i--) {
            
            if (digits[i] == 9) {
                digits[i] = 0
                
            }else{
                digits[i] += 1
                break
            }
            if (digits[0] == 0) {
                digits.unshift(1)
            }

    
        }
        
    }else{
        digits[digits.length -1] += 1
    }



    return digits
};






// console.log(plusOne([9]));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

//69. Sqrt(x)

var mySqrt = function(x) {
    return Math.floor(x ** 0.5)
};


// console.log(mySqrt(9));

//--------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------

//70. Climbing Stairs

var climbStairs = function(n) {
    let arr = [1,1]
    for (let i = 1; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr[arr.length - 1]


};



// console.log(climbStairs(5));


//--------------------------------------------------------------------------------------------------------------------------------------






//--------------------------------------------------------------------------------------------------------------------------------------

//83. Remove Duplicates from Sorted List

var deleteDuplicates = function(head) {
    let obj = {}

    for (let i = 0; i < head.length; i++) {
        if (obj[head[i]] == undefined) {
            obj[head[i]] = 0
        }else{
            obj[head[i]] += 1
        }
    }

    return Object.keys(obj)


};





// console.log(deleteDuplicates([1,1,2,3,3]));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

//88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    
    let newArr = []
    let newArr2 = []

    
    for (let i = 0; i < m; i++) {
        newArr.push(nums1[i])
    }
    for (let j = 0; j < n; j++) {
        newArr2.push(nums2[j])
    }
    nums1 = [...newArr, ...newArr2].sort((a,b) => {
        return a - b
    })

    return nums1
    
};


merge(nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3)

//--------------------------------------------------------------------------------------------------------------------------------------









//--------------------------------------------------------------------------------------------------------------------------------------

//2. Add Two Numbers


var addTwoNumbers = function (l1, l2) {
    let num1 = +l1.join("")
    let num2 = +l2.join("")

    let sum = num1 + num2
    sum = [...`${sum}`].reverse()
    return sum
};



// console.log(addTwoNumbers([2,4,3],[5,6,4]));

//--------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------

//7. Reverse Integer

var reverse = function(x) {
    if (x<0) {
        x = [...`${x}`]
        x[0] = ""
        x = x.reverse().join("")

        return +x * -1     
    }else{
        x = [...`${x}`]
        x = x.reverse().join("")
        
        return +x
    }

};

// console.log(reverse(122));

//--------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------

//4. Median of Two Sorted Arrays



var findMedianSortedArrays = function(nums1, nums2) {

    let arr = [...nums1,...nums2]
    let output = 0
    
    arr.sort((a,b) => {
        return a - b
    })
    if (arr.length % 2 == 0) {
        let m1 = Math.floor((arr.length - 1) / 2)
        output = (arr[m1] + arr[m1 + 1]) / 2
    }else{
        output = arr[Math.floor((arr.length - 1 )/ 2)] 
    }

    return output

};



// console.log(findMedianSortedArrays([1,2],[3]));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

//67. Add Binary



// var addBinary = function(a, b) {
//     a = a.split("").reverse()
//     b = b.split("").reverse()
//     let res = 0

//     if (a.length >= b.length) {
//         for (let i = 0; i < b.length ; i++) {
//             if (a[i] == b[i] && a[i] == 1) {
//                 a[i] = 0   
//                 if (res != 0) {

//                     a[i] = 1
//                 }
//                 res = 1
//             }else{
//                 a[i] = 1
//                 if (res != 0) {
//                     a[i] = 0
//                 }
//                 res = 1
//             }
    
//         }
        
//     }

//     return a.reverse().join("")



// };


// console.log(addBinary("11" , "1"));

//--------------------------------------------------------------------------------------------------------------------------------------




//--------------------------------------------------------------------------------------------------------------------------------------

//144. Binary Tree Preorder Traversal




var preorderTraversal = function(root) {
    let arr = []
    for (let i = 0; i < root.length; i++) {
        if (typeof root[i] == "number") {
            arr.push(root[i])
        }
    }
    arr = arr.sort((a,b) => {
        return a - b
    })

    return arr
};

// console.log(preorderTraversal([1,null,2,3]));

//--------------------------------------------------------------------------------------------------------------------------------------







//--------------------------------------------------------------------------------------------------------------------------------------

// 3. Longest Substring Without Repeating Characters


var lengthOfLongestSubstring = function(s) {
    let arr = [...s]
    let obj = {}
    let outputArr = []
    if (s.length == 0) {
        return 0
    }else if(s.length == 1){
        return 1
    }
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (obj[arr[j]] == undefined) {
                obj[arr[j]] = 0
            }else{
                outputArr.push(Object.keys(obj).join("").length)
                obj = {}
                break
            }
            
        }
        
    }
    
    return Math.max(...outputArr)

};





// console.log(lengthOfLongestSubstring("abcabcbb"));

//--------------------------------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------------------------------

//28. Find the Index of the First Occurrence in a String



var strStr = function(haystack, needle) {
    let start = 0
    let startArr = []
    let arrValue = 0
    let startHaystack = 0


    for (let j = 0; j < haystack.length; j++) {
        if (haystack[j] == needle[0]) {
            startArr.push(j)
        }
    
    }
    console.log(startArr);

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[start]) {
            start += 1
            if (start == needle.length) {
                return startHaystack 
            }
        }else{
            i = startArr[arrValue] - 1
            arrValue += 1
            startHaystack = i + 1
            start = 0
        }
    }

    return -1




    
};




// console.log(strStr("mississippi", "issip"));



//--------------------------------------------------------------------------------------------------------------------------------------










//--------------------------------------------------------------------------------------------------------------------------------------

//14. Longest Common Prefix





// var longestCommonPrefix = function(strs) {
//     let output = ""
//     let flag = true
//     let smallWord = Math.min(...strs.map((i) =>{
//         return i.length
//     }))

//     if (strs.length == 1) {
//         return strs
//     }

//     for (let i = 0; i < strs.length; i++) {

//         for (let j = 1; j < smallWord; j++) {

//             if (strs[j].length == 0) {
//                 return ""
//             }

//             if (strs[j][i] == strs[j -1][i]) {
//                 flag = true
//                 if (j == strs.length - 1) {
//                     output += strs[j][i]
//                 }
//             }else{
//                 if (j == strs.length - 1) {
//                     return output
//                 }
//                 flag = false
//                 output = ""
//                 break
//             }
            
//         }

//     }

//     return output
    


// };







// console.log(longestCommonPrefix(["flower","flow","flight"]));

//--------------------------------------------------------------------------------------------------------------------------------------













