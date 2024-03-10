
// changing the telegram icon from black to white whenever the user moves his cursor over the button
const contactUsBTN = document.querySelector("#input-box button");
const tgicon = contactUsBTN.querySelector("img");

// hovering
contactUsBTN.addEventListener("mouseover", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})
// holding finger
contactUsBTN.addEventListener("touchstart", () => {
  tgicon.src = "tgicon_white.png";
  contactUsBTN.classList.add("hovered")
})

// lifted finger
contactUsBTN.addEventListener("touchend", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})
// left button
contactUsBTN.addEventListener("mouseleave", () => {
  tgicon.src = "tgicon_black.png";
  contactUsBTN.classList.remove("hovered")
})



