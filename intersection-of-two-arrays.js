// 3. 두 배열의 교집합 구하기 (Intersection of Two Arrays) 
// nums1 = [1, 2, 2, 1], nums2 = [2, 2] 가 주어졌을 때,
//  두 배열에 공통으로 포함된 요소 
// [2, 2]를 반환하는 함수를 작성해 보세요. 
// hint) 이 문제의 핵심은 단순히 숫자의 종류만 
// 찾는 것이 아니라 중복된 숫자의 개수까지 
// 맞춰야함. 

nums1 = [1,2,2,1];
nums2 = [2,2];

function intersection (nums1, nums2) {
    let map = new Map ();
    let result = []

    for (const num of nums1) {
        const count = (map.get(num)||0)+ 1;
        map.set (num, count)
    }
    for (const num of nums2) {
         if (map.get(num)>0) {
             result.push(num);

        const count = (map.get(num))-1;
        map.set (num, count) }     
 }
 return result;
}      
console.log(intersection(nums1, nums2));
