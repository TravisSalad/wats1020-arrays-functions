// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.

//created a function called truncateWords that accepts longText and numWords as arguments
var truncateWords = function(longText, numWords){
//split longText into individual words
  var word = longText.split(" ");
//create a variable called wordLength that is equal to the number of words in longText
  var wordLength = word.length;
//remove numWords which is equal to wordLimit, or 8, from wordLength or total number of words
  var wordRemove = wordLength - numWords;
//splice the words from the first 8 words and then remove everything after that and add an elipses
  word.splice(numWords, wordRemove, "...");
//join the words together and add a space between them
   return word.join(" ");
}


//define variables
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);

//created a functioncalled newText to display full text when clicked
var newText = function(){
//retreive .innerHTML data
  var str = document.getElementById("demo").innerHTML;
//replace shortText with originalText
  var res = str.replace(shortText, originalText);
//print res which is the new version of the text
  document.getElementById("demo").innerHTML = res;
}

//print truncateWords to the element with the ID=demo
  document.getElementById("demo").innerHTML=(shortText);
