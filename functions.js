function taxCalc(rates, brackets, income, status, year){
  var tax = 0;
  var myBracket = [];
  var x = brackets.get(year)
  x.forEach(function(item){
    if (item[0] == status){
        myBracket = item[1]
    }
  }) 
  
  for (var i = 0; i<rates[year].length-1; i++){
    if (income > myBracket[i]){
      tax += (Math.min(income,myBracket[i+1])-myBracket[i])*rates[year][i];
      }
  }
  
  if (income>myBracket[myBracket.length-1]){
    tax += (income - myBracket[myBracket.length -1])*rates[year][rates[year].length-1];
  }
  
   return tax

}

