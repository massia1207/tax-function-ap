/** 
 * Calculates Long Term Capital Gains Tax
 * @param {number} gains Amount of LT Capital Gains.
 * @param {number} taxableIncome Taxable Income.
 * @param {string} status Filing Status.
 * @param {number} year Applicalbe Tax Year.
 * @returns Amount of LT Capital Gains Tax.
 * @customfunction
*/

function capGains(gains, income, status, year){
  var rates = {
                2020: [0,.15,.2],
                2021: [0,.15,.2],
                2022: [0,.15,.2]
              };
              

  var brackets = new Map();
  brackets.set(2020,[['MFJ', [0,80000,496600]],
                     ['IND', [0,40000,441450]],
                     ['HOH', [0,53600,469050]],
                     ['MFS', [0,40000,248300]]]
);
  brackets.set(2021,[['MFJ', [0,80800,501600]],
                     ['IND', [0,40400,445850]],
                     ['HOH', [0,54100,473750]],
                     ['MFS', [0,40400,445850]]]
);
  brackets.set(2022,[['MFJ', [0,83350,517200]],
                     ['IND', [0,41675,459750]],
                     ['HOH', [0,55800,488500]],
                     ['MFS', [0,41675,258601]]]
);

return helperCalc(rates,brackets,income,gains,status, year)

}

function gainsTest(){
  let x = capGains(10000, 50000, "MFJ", 2022);
  console.log(x);
}



function helperCalc(rates, brackets, income, gains, status, year){
  var gainsTax = 0;
  var myBracket = [];
  var x = brackets.get(year)
  x.forEach(function(item){
    if (item[0] == status){
        myBracket = item[1]
    }
  }) 
  
  for (var i = rates[year].length-1; i>0; i--){ 
    if (income > myBracket[i]){
      console.log(i);
      gainsTax = gains*rates[year][i];
      break;
      }
  }
  
  return gainsTax

}