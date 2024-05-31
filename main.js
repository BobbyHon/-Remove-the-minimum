function removeSmallest(numbers) {
    let smallestNum = numbers.map((x) => x).sort((a,b) => a - b)[0]
    let smallestNumIndex = numbers.indexOf(smallestNum)
    let answer = numbers.slice(0, smallestNumIndex).concat(numbers.slice(smallestNumIndex + 1))
    return answer
  }