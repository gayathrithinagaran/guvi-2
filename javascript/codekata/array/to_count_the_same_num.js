const readline=require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
    console.log(user);
    var a=[];
    a=user.toString().split(",");
    console.log(a);
    
    var first=[];
    first=a[0].split("");
    console.log(first);
    first.shift();
    console.log(first);
    a.shift();
    var res;
   res= first.concat(a);
    console.log("res",first.concat(a));
    last=a[a.length-1].split("");
    console.log(last);
    last.pop();
    console.log(last);
    res.pop();
    var res1=res.concat(last);
    console.log(res1);
    var count=0;
    for(i=0;i<res1.length-1;i++)
    {
        if(res1[i]==res1[i+1])
        {
            count+=1;
        }
    }
    
   console.log(count);
});
