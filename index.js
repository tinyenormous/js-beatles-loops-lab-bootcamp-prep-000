
// 1) Beatles Loops returns an array of strings containing what instruments eachmusician plays:
function theBeatlesPlay(arrayMusic,arrayInstrument){
  var newArray=[]
  for ( var i=0; i<arrayMusic.length ; i++ ) {
    console.log('${i}')
    newArray.push('${arrayMusic[i]} plays ${i}')
    newArray.push('I am ${i} strange loops.')
  }
  return newArray
}
// 2) Beatles Loops johnLennonFacts returns an array of strings with exclamationpoints:

// 3) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :

// 4) Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:

