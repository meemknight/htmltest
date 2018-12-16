function gooseFilter (birds)
{
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    for(let i=0; i<birds.length; i++)
    {
        let found = false;
        for(let j=0; j<geese.length; j++)
        {
            if(birds[i] == geese[j])
            {
                found = true;
                i--;
                break;
            }
        }

        if(found)
        {
             birds.splice(i-1, 1);
        }
    }
    
    return birds;
    // return an array containing all of the strings in the input array except those that match strings in geese
};

let input = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

let b = gooseFilter(input);

console.log(input);
console.log(b);