class RomanToInt {
  constructor(romanNameArr) {
    this._romanName = romanNameArr
  }

  get romanName() {
    return this._romanName
  }

  getSortedList(array) {
    var data = array.sort()

    data
      .map((n) => ({
        name: n,
        num: this.romanToInt(n.split(" ").pop())
      }))
      .sort((a, b) => (a.num - b.num))
      .map(({name, num}) => name)

    return data
  }

  romanToInt(data) {
    if (data === '') return 0
    if (data.startsWith('L')) return 50 + this.romanToInt(data.substr(1))
    if (data.startsWith("XL")) return 40 + this.romanToInt(data.substr(2))
    if (data.startsWith("X"))  return 10 + this.romanToInt(data.substr(1))
    if (data.startsWith("IX")) return 9  + this.romanToInt(data.substr(2))
    if (data.startsWith("V"))  return 5  + this.romanToInt(data.substr(1))
    if (data.startsWith("IV")) return 4  + this.romanToInt(data.substr(2))
    if (data.startsWith("I"))  return 1  + this.romanToInt(data.substr(1))

    return 0
  }
}

var romans = [
  'Louis VIII', 'George II', 'George VI', 'Xoloty I', 'James XXI', 'Riki XL', 'Riki XXX', 'Riko XLVII', 'Riko XLV', 'Dio XL',
  'Louis IX', 'Elizabeth XXI', 'Dio XLIX', 'David VI', 'Schiwatz XXIV', 'Xoloty XXVIII', 'Dio XLI', 'Riko XXXV', 'David XII', 'Riki XLIX',
  'Elizabeth V', 'Elizabeth XXIV', 'David XLI', 'Aaron XXXIX', 'Schiwatz XVIII', 'Aaron XXXI', 'Dio IV', 'James I', 'James VII', 'Riki III',
  'Elizabeth IV', 'Aaron I', 'Robert X', 'Louis III', 'Robert L', 'Riki XXXIII', 'Robert XXV', 'Aaron VII', 'Schiwatz XLIII', 'Schiwatz X',
  'David II', 'Xoloty III', 'Tesla VII', 'Einstein V', 'Dio XX', 'Robert L', 'Schiwatz XXV', 'Dio III', 'David XLII', 'Riko XLVI',
]

console.log("Before sorted (as array):", romans)
console.log("<------------------------------------------------------------------------>");
const romanToIntObj = new RomanToInt(romans)
var afterSorted = romanToIntObj.getSortedList(romanToIntObj.romanName)

console.log("After sorted (as array):", afterSorted)
console.log("<------------------------------------------------------------------------>");
console.log("After sorted (as string):", afterSorted.toString())
console.log("Total length of data: ", romans.length)
