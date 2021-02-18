/*new TypeIt("#typing", {
 strings: ["We Think.", "We Code." , "We Inovate"],
  speed: 75,
  loop: true
}).go();*/

new TypeIt("#typing")
  .type("We Think.")
  .pause(1000)
  .type("We Code ")
  .pause(1000)
  .type("We Inovate.")
  .go();