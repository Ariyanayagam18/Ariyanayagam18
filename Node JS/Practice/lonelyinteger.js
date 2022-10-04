//  get lonely integer in a given array [1,2,3,4,1,2,3]

let arr = [1,2,8,3,4,1,2,5,3,4]
let dupItems = [];
for(let i=0;i<arr.length;i++)
{
    let count = 0;
    for(let j=0;j<=i;j++)
    {
       arr[i] == arr[j] ? count++ : '';
       count > 1 ? dupItems.push(arr[j]) : '';
    }         
}

const uniqueItems = (dupItems) => {
    let unique = arr.filter((value,index)=> {
        if(!(dupItems.includes(value)))
        return value
    })
    return unique;
}

console.log('Unique Items : ',uniqueItems(dupItems))
