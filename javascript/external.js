
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my site, " + user_name + "!<h1>";

  return message;
}

// document.write(welcome());

// A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(`<h1>Hello, Welcome to my webpage, ${user_name}!</h1>`);
