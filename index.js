//Using ES6 not gonna work for IE

//Toggle for the navbar menu
//Trigger if the user click the navbar toggle display
document.querySelector(".menu").addEventListener("click", () => {
   document.querySelectorAll(".target").forEach((item) => {
      item.classList.toggle("change");
   });
});

//a loop that show each jokes in the hero header
const jokes = document.querySelectorAll(".section-1-jokes i");
let counter = 1;

setInterval(() => {
   counter++;

   const joke = document.querySelector(".section-1-jokes .change");

   joke.classList.remove("change");
   //if counter greater than the length of the jokes array
   //Reset the counter back to 1 and add the "change" class to the first element
   if (counter > jokes.length) {
      jokes[0].classList.add("change");
      counter = 1;
   } else joke.nextElementSibling.classList.add("change");
}, 3000);

//Dad Jokes Show and hide function
//Works well for small numbers of elements to loop through
//Dynamic for easy adding of jokes
const triggers = document.querySelectorAll(".trig");
triggers.forEach((container) => {
   container.addEventListener("click", (evt) => {
      //if the current target is clicked show/hide the element
      if (evt.target === container) {
         //Loop through the container to check if it contains "target" & "fade" class
         container.querySelectorAll(".target, .fade").forEach((item) => {
            //Toggle the class in the element
            item.classList.toggle("show")
            item.classList.toggle("fading")
         })

         //Then check if other elements are showing
         //if elements are showing hide the element
         triggers.forEach((container) => {
         //Loop through the container to check if it contains "target" & "fade" class
            container.querySelectorAll(".show, .fade").forEach((item) => {
               if (evt.target !== container) {
                  //remove the class in the element
                  item.classList.remove("show")
                  item.classList.remove("fading")
               }
            })
         })
      }
   });
});
