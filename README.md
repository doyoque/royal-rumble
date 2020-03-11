# Simple Sort Given name Code (SSGC)

This is just a simple code to sort given name. The given name is a list of royal name strings consisting of a given name followed
by an ordinal number as roman numerals.

# To Get This

Here the instruction for run the source code.
```bash
git clone https://github.com/doyoque/royal-rumble.git
cd royal-rumble/
npm run check
```

# The goal

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

# Behind the scene

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

And then the data is mapped again with _.map()_
```javaScript
.map(({name, num}) => name)
```
