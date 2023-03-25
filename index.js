const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () =>{
  return tutorials.map(tutorial => title(tutorial));
}

function title(array){
    let stringArray = array.split(" ");
    let arr1 = stringArray.map(str => {
      let newStr = "";
      if(str.charAt(0) <= 'z' && str.charAt(0) >= 'a'){
        let firstChar = str.charAt(0).toUpperCase();
        newStr = firstChar+ str.slice(1);
        return newStr;
      }
      return str;
      
    });
    return arr1.join(" ");
  
}
