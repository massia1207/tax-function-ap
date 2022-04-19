/**
 * Calculates Fed Ordinary Income Tax
 *
 * @param {number} income Ordinary Income.
 * @param {string} status Taxapayer Filing Status.
 * @param {number} year Applicable Tax year.
 * @returns {number} Amount of Ordinary Income Tax.
 * @customfunction
 */

function ordTax(income, status, year){
  var rates = {2020: [.1,.12,.22,.24,.32,.35,.37],
              2021: [.1,.12,.22,.24,.32,.35,.37],
              2022: [.1,.12,.22,.24,.32,.35,.37]};
              

  var brackets = new Map();
  brackets.set(2020,[['MFJ', [0,19750,80250,171050,326600,414700,622050]],
                     ['IND', [0,9875,40125,85525,163300,207350,518400]],
                     ['HOH', [0,14100,53700,85500,63300,207350,518400]],
                     ['MFS', [0,9875,40125,85525,163300,207350,311025]]]
);
  brackets.set(2021,[['MFJ', [0,19900,81050,172750,329850,418850,628300,]],
                     ['IND', [0,9950,40525,86375,164925,209425,523600]],
                     ['HOH', [0,14200,54200,86350,164900,209400,523600]],
                     ['MFS', [0,9950,40525,86375,164925,209425,314150]]]
);
  brackets.set(2022,[['MFJ', [0,20550,83550,178150,340100,431900,647850]],
                     ['IND', [0,10275,41775,89075,170050,215950,539900]],
                     ['HOH', [0,14650,55900,89050,170050,215950,539900]],
                     ['MFS', [0,10275,41775,89075,170050,215950,323925]]]
);

return taxCalc(rates,brackets,income,status, year)

}