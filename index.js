document.querySelector(".menu").addEventListener("click", () => {
   document.querySelectorAll(".target").forEach((item) => {
      item.classList.toggle("change");
   });
});

const jokes = document.querySelectorAll(".section-1-jokes i");
let counter = 1;

setInterval(() => {
   counter++;

   const joke = document.querySelector(".section-1-jokes .change");

   joke.classList.remove("change");

   if (counter > jokes.length) {
      jokes[0].classList.add("change");
      counter = 1;
   } else joke.nextElementSibling.classList.add("change");
}, 3000);

const triggers = document.querySelectorAll(".trig");
let open = false;
triggers.forEach((item) => {
   item.addEventListener("click", (evt) => {
      const evl = evt.target.querySelectorAll(".target, .fade");
      // if (open) {
      //    document.querySelectorAll(".target").forEach((item) => {
      //       if (item.classList.contains("show")) {
      //          item.classList.remove("show");
      //       }
      //    });

      //    document.querySelectorAll(".fade").forEach((item) => {
      //       if (item.classList.contains("fading")) {
      //          item.classList.remove("fading");
      //       }
      //    });
      //    open = false;
      // } else {
      //    evl.forEach((item) => {
      //       item.classList.add("fading");
      //       item.classList.add("show");
      //    });

      //    open = true;
      // }
      if (item !== this.item) {
         document.querySelectorAll(".target").forEach((item) => {
            if (item.classList.contains("show")) {
               item.classList.toggle("show");
            }
         }); 
      } else {
         evl.forEach((item) => {
            item.classList.add("fading");
            item.classList.add("show");
         });
      }
   });
});
