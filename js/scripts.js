function addFormListener() {
  const form = document.querySelector("form");
  form.addEventListener("submit", onFormSubmit)
}
function onFormSubmit(event) {
  event.preventDefault();
    const fruits = document.querySelector("#fruits").value
    const dino = document.querySelector("#dino").value
    const pets = document.querySelector("#pets").value
    const gender = document.querySelector("#gender").value
    const season = document.querySelector("#season").value

    
    if (fruits === "kiwi" || (dino === "tRex" && gender === "female")) {
      document.querySelector("#ruby").show();
      document.querySelector("#javascript").hide();
      document.querySelector("#rust").hide();
    } else if (fruits === "banana" || dino === "stego" || gender === "male") {
      document.querySelector("#ruby").hide();
      document.querySelector("#javascript").show();
      document.querySelector("#rust").hide();
    } else if (fruits === "peach" || dino === "tTops" || season === "winter") {
      document.querySelector("#ruby").hide();
      document.querySelector("#javascript").hide();
      document.querySelector("#rust").show();
    } else {
      document.querySelector("#ruby").hide();
      document.querySelector("#javascript").hide();
      document.querySelector("#rust").show();
    }
   
  };
window.addEventListener("load", addFormListener);