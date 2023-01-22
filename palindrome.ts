function palindrome(s: string){
    if (s.length != 0){
        for (let i=0; i<s.length/2; i--){
            if (s[i] != s[s.length-1-i]){
                return false
            } else {
                return true
            }
        }
    } else {
        console.log("String doesn't exist")
    }
}