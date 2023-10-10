export function notANumber(value) {
    return isNaN(value) || value == ""
}

export function calculate( brazilian, brazilCup, liberators, clubWorldCup) {
  return (parseInt(brazilian) + parseInt(brazilCup) + parseInt(liberators) + parseInt(clubWorldCup));
}