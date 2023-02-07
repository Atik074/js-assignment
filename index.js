 // Problem 01
// Description: Declare a function and give into a number parameter and multiplied with number parameter by 3   then take a output.That's output will be divided by  2 and the final result subtracts from 5.Now return the final result into a function; 

function mindGame(number){
    
    if (typeof number === 'number' && number > 0 ) {
          const multiplication = ( (number * 3) + 10 );
          const totallResult = (multiplication / 2) - 5 ;
           return totallResult;
      }
        
   else { return ' please input a positive number'}
    
}

// problem 02
// Description:Declare the name of evenOdd() function 'evenOdd()' and take a input as a string. Now provide this function which will be show us even or odd by their character or length.

function evenOdd(string){
    const text =string.length
      if( text % 2 === 0){
        return 'even'
         }
     else if (text % 2 === 1)
             { return 'odd'}
    else {return 'please input a string';}
}

// problem 03
// Description:Declare the name of isLeGSeven() function  “isLGSeven()” and take a parameter as a number.Findout the difference  between parameter and 7.If the result is less than 7, you retuen the result.Otherwise, you return  the double of the input.

function isLGSeven(number){
    
    if( typeof number === 'number'){
         const resultOfSub = number - 7
        if(resultOfSub < 7){
        return resultOfSub;
         }
         else{
            const resultOfMulti = number * 2
             return resultOfMulti;
         }
    } 
    else{ return 'plese input a number' }

}

// problem 03
// Descriptiom : The name of findingBadData() function is declared which has a parameter  like as array.If the array of data is provided negative value less than zero or equal zero ,you return the function.

function findingBadData(arrayOfNumbers){
    const badData =[];
   if(Array.isArray(arrayOfNumbers)){
   for(let i=0; i< arrayOfNumbers.length; i++){
       var number= arrayOfNumbers[i]
       
       if( number <= 0){
           badData.push(number);
           }
   }
   return badData.length;
                           }
   else { return 'please provide a number of an Array'}

};

// problem 05:
// Descriptiom : The name of gemsToDiamond() function is declared which has three parameters data type   like as number.Findout the totall number of diamond.If the toatall number of diamond is greater than  double of one thousand (1000),you will  take subtraction value between the totall diamond and 2000.Now provide a function and return the subtraction value ;

function gemsToDiamond(firstFriendsGem,secondFriendsGem,thirdFriendsGem){
      const resultOfFirstFriend   = firstFriendsGem *21
      const resultOfSecondFriend  = secondFriendsGem *32
      const resultOfThirdFriend   = thirdFriendsGem *43
      const totallDiamond = resultOfFirstFriend + resultOfSecondFriend + resultOfThirdFriend;
      if( typeof(totallDiamond) === 'number' && totallDiamond > (1000*2) ){
          let restDiamond = totallDiamond - 2000;
         return restDiamond; }
  
      else { return 'You should  take a number parameter'} 
  }

  