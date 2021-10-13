var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count){
    let dispenser = []
    if (count>1){
        for (let i=1; i<=count; i++){
            chocolates.unshift(color)
        }    
        return chocolates
    }
    else{
        return 'Number cannot be zero/negative'
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,num){
    let despense = []
    if (num>1){
        if (num <= chocolates.length){
            for (let i=0; i< num; i++){
                despense.push(chocolates[i])
            }
            return despense        
        }
        else{
            return 'Insufficient chocolates in the dispenser'
        }
    }
    else{
        return 'Number cannot be zero/negative'
    }
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, num){
    let despense = []
    if (num>1){
        if (num <= chocolates.length){
            for (let i=0; i< num; i++){
                despense.push(chocolates[chocolates.length-1])
                chocolates.pop()
            }
            return despense        
        }
        else{
            return 'Insufficient chocolates in the dispenser'
        }
    }
    else{
        return 'Number cannot be zero/negative'
    }
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, num, color){
    let despense = []
    let count=0
    if (num>1){
        if (num <= chocolates.length){
            for (let i=0; i< num; i++){
                despense.push(chocolates[chocolates.length-1])
                chocolates.pop()
                if (despense[despense.length-1] == color ){
                    count++
                }
                if (count==num){
                    return despense
                }
            }
            return despense        
        }
        else{
            return 'Insufficient chocolates in the dispenser'
        }
    }
    else{
        return 'Number cannot be zero/negative'
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates,arr){
    new_arr = arr.filter(function(x,y){
        return arr.indexOf(x)==y
    })
    let lst=[]
    for (let i=0; i<new_arr.length; i++){
        lst.push(chocolates.filter(x => x==new_arr[i]).length)
    }
    console.log(lst);
    // let new_lst = []
    // for (let i=0; i<lst.length; i++){
    //     new_lst.push(lst[i].length)
    // }
    return lst
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors


//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, num, col, fin_col){
    let cnt=0
    if (col != fin_col){
        if (num>0){
            if (cnt<num){
                for(let i=0; i<chocolates.length; i++){
                    if (chocolates[i]==col){
                        chocolates[i] = fin_col
                        cnt++
                    }
                }
            }
            else{
                return chocolates
            }
            return chocolates
        }
        else{
            return 'Number cannot be zero/negative'
        }    
    }
    else{
        return 'Can\'t replace the same chocolates'
    }
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(cho, col, fincol){
    
    if (cho==0){
        return [0,[]]
    }
    else{
        if(col==fincol){
            return 'Can\'t replace the same chocolates'
        }
        else{
            for (let i=0; i< cho.length; i++){
                if (cho[i]==col){
                    cho[i]=fincol
                }
            }
            let fin_arr =[]
            cnt=0
            for (let i=0; i<cho.length; i++){
                if (cho[i]==fincol){
                    cnt++
                }
            }
            fin_arr=[cnt, cho]
            return fin_arr
        }    
    }
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
