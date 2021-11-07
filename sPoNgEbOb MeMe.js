function spongeMeme(sentence) {
 return sentence.split('').map((str,i)=>i%2!==0?str.toLowerCase():str.toUpperCase()).join('')
}
