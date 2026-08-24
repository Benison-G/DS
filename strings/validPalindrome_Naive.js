// convert all alphanumeric to lowercase and check if the string is palindrome

const isPalindrome = (s) => {
    let filteredString = "";
    let rev = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredString += s[i];
            rev = s[i] + rev;
        }
    }

    if (filteredString === rev) return true;
    return false;
}

console.log(isPalindrome(", a man a plan,  a canal: panama"));