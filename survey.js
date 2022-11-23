const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`Your name is: ${name}`);
  ///
  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`You enjoy: ${activity}`);
    ///
    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`You listen to: ${music}`);
      ///
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        console.log(`You like to eat: ${meal}`);
        ///
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          console.log(`You like to eat: ${food}`);
          ///
          rl.question("What tv show is your absolute favourite? ", (show) => {
            console.log(`You like the show: ${show}`);
            ///
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
              console.log(`You are great at: ${power}`);

              rl.close();
              console.log(`Hello, my name is ${name}. I like to listen to ${music} while I'm ${activity}. I love to make ${food} for ${meal} while I watch ${show}. I really shine when I ${power}.`)
            });
          });    
        });  
      });  
    });
  });
});

