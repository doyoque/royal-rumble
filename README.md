# Simple Sort Given name Code (SSGC)

This is just a simple code to sort given name. The given name is a list of royal name strings consisting of a given name followed
by an ordinal number as roman numerals.

# Requirement

To run this application make sure the computer have this additional requirement:

* **Nodejs v12.13.0**
* **A Git command**

# To Get This

Here the instruction to run the source code.
```bash
git clone https://github.com/doyoque/royal-rumble.git
cd royal-rumble/
npm run check
```

# The Goal

The list of royal name must be sort as alphabetically by the name, then by ordinal increasing within any given name.
Example.

```bash
Sample Input:
Louis IX
Louis VIII
David II

The output:
David II
Louis VIII
Louis IX
```

# The Code

Here's the line code of the logic:
```javaScript
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
```

In getSortedList() function the data (or array) is sorted with [_.sort()_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function so the name will sorted ascending based on first alphabet of the name. After that the array is remapped with [_.map()_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) inside _.map()_ function the roman numbers is parsed with _romanToInt()_ that accept one parameter (in this case the array).
```javaScript
.map((n) => ({
  name: n,
  num: this.romanToInt(n.split(" ").pop())
}))
```

And then the roman numbers is sorted inside the _.sort()_ function with ```a``` to ```b``` function.
```javaScript
.sort((a, b) => (a.num - b.num))
```

After the roman numbers get sorted the data is mapped again with _.map()_
```javaScript
.map(({name, num}) => name)
```

When the code is execute the output will be like this:
```bash
Before sorted (as array): [
  'Louis VIII',     'George II',    'George VI',
  'Xoloty I',       'James XXI',    'Riki XL',
  'Riki XXX',       'Riko XLVII',   'Riko XLV',
  'Dio XL',         'Louis IX',     'Elizabeth XXI',
  'Dio XLIX',       'David VI',     'Schiwatz XXIV',
  'Xoloty XXVIII',  'Dio XLI',      'Riko XXXV',
  'David XII',      'Riki XLIX',    'Elizabeth V',
  'Elizabeth XXIV', 'David XLI',    'Aaron XXXIX',
  'Schiwatz XVIII', 'Aaron XXXI',   'Dio IV',
  'James I',        'James VII',    'Riki III',
  'Elizabeth IV',   'Aaron I',      'Robert X',
  'Louis III',      'Robert L',     'Riki XXXIII',
  'Robert XXV',     'Aaron VII',    'Schiwatz XLIII',
  'Schiwatz X',     'David II',     'Xoloty III',
  'Tesla VII',      'Einstein V',   'Dio XX',
  'Robert L',       'Schiwatz XXV', 'Dio III',
  'David XLII',     'Riko XLVI'
]
<------------------------------------------------------------------------>
After sorted (as array): [
  'Aaron I',        'Aaron VII',      'Aaron XXXI',
  'Aaron XXXIX',    'David II',       'David VI',
  'David XII',      'David XLI',      'David XLII',
  'Dio III',        'Dio IV',         'Dio XL',
  'Dio XLI',        'Dio XLIX',       'Dio XX',
  'Einstein V',     'Elizabeth IV',   'Elizabeth V',
  'Elizabeth XXI',  'Elizabeth XXIV', 'George II',
  'George VI',      'James I',        'James VII',
  'James XXI',      'Louis III',      'Louis IX',
  'Louis VIII',     'Riki III',       'Riki XL',
  'Riki XLIX',      'Riki XXX',       'Riki XXXIII',
  'Riko XLV',       'Riko XLVI',      'Riko XLVII',
  'Riko XXXV',      'Robert L',       'Robert L',
  'Robert X',       'Robert XXV',     'Schiwatz X',
  'Schiwatz XLIII', 'Schiwatz XVIII', 'Schiwatz XXIV',
  'Schiwatz XXV',   'Tesla VII',      'Xoloty I',
  'Xoloty III',     'Xoloty XXVIII'
]
<------------------------------------------------------------------------>
After sorted (as string): Aaron I,Aaron VII,Aaron XXXI,Aaron XXXIX,David II,David VI,David XII,David XLI,David XLII,Dio III,Dio IV,Dio XL,Dio XLI,Dio XLIX,Dio XX,Einstein V,Elizabeth IV,Elizabeth V,Elizabeth XXI,Elizabeth XXIV,George II,George VI,James I,James VII,James XXI,Louis III,Louis IX,Louis VIII,Riki III,Riki XL,Riki XLIX,Riki XXX,Riki XXXIII,Riko XLV,Riko XLVI,Riko XLVII,Riko XXXV,Robert L,Robert L,Robert X,Robert XXV,Schiwatz X,Schiwatz XLIII,Schiwatz XVIII,Schiwatz XXIV,Schiwatz XXV,Tesla VII,Xoloty I,Xoloty III,Xoloty XXVIII  <------------------------------------------------------------------------>
Total length of data:  50
```
