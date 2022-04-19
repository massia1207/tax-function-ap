/**
 * Calculates Self Employment Tax
 *
 * @param {number} SEincome Self employment income earned by taxpayer.
 * @param {number} wages Any wages earned by the taxpayer with SE income.
 * @param {number} year Applicable Tax Year.
 * @returns {number}Amount of Self Employment Tax.
 * @customfunction
 */

function seTax(SEincome, Wages, Year) {
  var ssRates = {
                  2020: .124, 
                  2021: .124,
                  2022: .124
                  };
  var medRates = {
                  2020: .029, 
                  2021: .029,
                  2022: .029
                  };
  
  var ficaLimits = {
                  2020: 137700,
                  2021: 142800,
                  2022: 147000
  };

 
  var FicaLimit = ficaLimits[Year];
  var SS = ssRates[Year];
  var Med = medRates[Year]
  var SEtax = 0
  
  
  SEincome = SEincome * (1-((SS+Med)/2));
  console.log("se income " + SEincome)
  FicaLimit = FicaLimit - Wages;
  
  var FICA = Math.min(SEincome, FicaLimit) * SS;
  var Medicare = SEincome * Med;
  
  seTax = FICA + Medicare;
  
  return seTax
    
}