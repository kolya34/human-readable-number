module.exports = function toReadable (number) {
    let a = ''.split('')
    let b = ''
    let result = ''
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    let arr5 = []
    const map = new Map()
    map.set(1, 'one')
    map.set(2, 'two')
    map.set(3, 'three')
    map.set(4, 'four')
    map.set(5, 'five')
    map.set(6, 'six')
    map.set(7, 'seven')
    map.set(8, 'eight')
    map.set(9, 'nine')
    map.set(10, 'ten')
    map.set(11, 'eleven')
    map.set(12, 'twelve')
    map.set(13, 'thirteen')
    map.set(14, 'fourteen')
    map.set(15, 'fifteen')
    map.set(16, 'sixteen')
    map.set(17, 'seventeen')
    map.set(18, 'eighteen')
    map.set(19, 'nineteen')
    map.set(20, 'twenty')
    map.set(30, 'thirty')
    map.set(40, 'forty')
    map.set(50, 'fifty')
    map.set(60, 'sixty')
    map.set(70, 'seventy')
    map.set(80, 'eighty')
    map.set(90, 'ninety')
    map.set(0, 'zero')
    map.set(100, 'one hundred')
    map.set(200, 'two hundred')
    map.set(300, 'three hundred')
    map.set(400, 'four hundred')
    map.set(500, 'five hundred')
    map.set(600, 'six hundred')
    map.set(700, 'seven hundred')
    map.set(800, 'eight hundred')
    map.set(900, 'nine hundred')
    if (number <= 20 && number <= 99) {
      return map.get(number)
    }
    if (number > 20) {
      a = number.toString()
      result = a[0] + '0'
      if (number === Number(result)) {
        return map.get(number)
      }
      b = map.get(Number(result)) + ' ' + map.get(Number(a[1]))
      if (number > 99) {
        arr1 = number.toString().split('')
        arr2 = arr1[1] + arr1[2]
        arr3 = map.get(Number(arr1.shift())) + ' hundred '
        if (Number(arr2[0]) === 0 && Number(arr2[1]) === 0) {
          return map.get(number)
        }
        if (Number(arr2) > 10 && (Number(arr2) < 20)) {
          return arr3 + map.get(Number(arr2))
        }
        if (Number(arr2[1]) === 0) {
          arr4 = arr3 + map.get(Number(arr2))
          return arr4
        }
        if (Number(arr2[0]) !== 0) {
          arr5 = arr2[0] + '0'
          arr4 = arr3 + map.get(Number(arr5)) + ' ' + map.get(Number(arr2[1]))
          return arr4
        }
        return arr3 + map.get(Number(arr2[1]))
      }
      return b
    }
}