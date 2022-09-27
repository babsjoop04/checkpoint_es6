
// code d'origine
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }

// modif apportée

function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
  }