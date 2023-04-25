let textDiv = document.getElementById("text");

//change font size of paragraphs when clicked.
//this could also be a function that iterates through these paragraphs
//and then also returns the font size back to normal
//after clicking again 


textDiv.children[0].addEventListener("click", () => {
  textDiv.children[0].style.fontSize = "1.5em";
  });

textDiv.children[1].addEventListener("click", () => {
  textDiv.children[1].style.fontSize = "1.5em";
  });
textDiv.children[2].addEventListener("click", () => {
  textDiv.children[2].style.fontSize = "1.5em";
  });
  

// list of content to display for each day of the week
let daysOfWeek = [
  "It's Sunday! Don't forget to recharge for the coming week.",
  "It's Monday! No class, so check out this cool robot video: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "It's Tuesday! We're discussing this week's readings in class today!",
  "It's Wednesday! No class today, enjoy your time!",
  "It's Thursday! Today is lab day. Time to code our robots to successfully run through the maze!!! Here's a test run: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "It's Friday! No class, but don't forget to read and respond to next week's readings! :3",
  "It's Saturday! Take a break from robots and enjoy the weekend."
];

let today = new Date().getDay();
let contentDiv = document.createElement("div");

if (today === 1) {
  contentDiv.innerHTML = "It's Monday! No class, so check out this cool <a target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Robot Video!</a>";
}

else if (today == 4){
  contentDiv.innerHTML = "It's Thursday! Today is lab day. Time to code our robots to successfully run through the maze!!! Here's a <a target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>test run!</a>";

}

 else {
  contentDiv.innerText = daysOfWeek[today];
}


contentDiv.style.display = "flex";
contentDiv.style.flexDirection = "column";
contentDiv.style.alignItems = "center";
contentDiv.style.marginTop = "10px";

container.prepend(contentDiv); //i had to look up what term to use to add smth to the top

//change page content of footer with a thank you
let footerChange = document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0];

footerChange.addEventListener("click", () => {
  footerChange.innerText = "Thank you for interacting!";
}); //could be a loop that allows you to toggle back and forth. 
