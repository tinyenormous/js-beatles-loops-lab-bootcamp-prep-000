
// 1) Beatles Loops returns an array of strings containing what instruments eachmusician plays:
function theBeatlesPlay(arrayMusic,arrayInstrument){
  var newArray=[]
  for ( var i=0; i<arrayMusic.length ; i++ ) {
    newArray.push(`${arrayMusic[i]} plays ${arrayInstrument[i]}`)
  }
  return newArray
}
// 2) Beatles Loops johnLennonFacts returns an array of strings with exclamationpoints:

function johnLennonFacts(facts){
  var newArray=[]
  var exclMark = '!!!'
  var i = facts.length-1
  
  while (i > 0) {
    console.log(i)  
    newArray.push( facts[i].concat(exclMark) )
    i--
    // console.log(facts[i])
  console.log(newArray)
  return newArray  
}
}


// 3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :

// 4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:

