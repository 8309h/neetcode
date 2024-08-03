class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj ={};
        for(let i=0;i<s.length;i++){
            if(obj[s[i]] == undefined){
                obj[s[i]]=1;

            }else {
                obj[s[i]]++;
            }
        }
        for(let j=0;j<t.length;j++){
            if(obj[t[j]] ==  undefined){
                obj[t[j]]=1;

            }else {
                obj[t[j]]--;
            }
        }
        for(let key in obj){
            if(obj[key] == 0){
                return true
            }else {
                return false
            }
        }
     }

}
