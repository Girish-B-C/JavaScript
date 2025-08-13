function palindrome(st: string)
{
    let rev: string = "";
    for(let i=st.length-1;i>=0;i--)
    {
        rev = rev + st[i]
    }
    if(st==rev)
    {
        console.log("palindrome")
    }
    else
    {
        console.log("not palindrome")
    }
}

let s = "xerex"
palindrome(s)