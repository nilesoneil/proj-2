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
    
    if (fruits === "kiwi" || dino === "tRex" && gender === "female") {
      document.querySelector("#ruby").classList.add("hidden")
      document.querySelector("#javascript").classList.remove("hidden");
      document.querySelector("#rust").classList.add("hidden");
    } else if (fruits === "banana" || dino === "stego" || gender === "male") {
      document.querySelector("#ruby").classList.add("hidden");
      document.querySelector("#javascript").classList.add("hidden")
      document.querySelector("#rust").classList.remove("hidden");
    } else if (fruits === "peach" || dino === "tTops" || season === "winter") {
      document.querySelector("#ruby").classList.remove("hidden");
      document.querySelector("#javascript").classList.add("hidden");
      document.querySelector("#rust").classList.add("hidden")
    } else {
      document.querySelector("#ruby").classList.remove("hidden");
      document.querySelector("#javascript").classList.add("hidden");
      document.querySelector("#rust").classList.add("hidden")
    }
   
  };
window.addEventListener("load", addFormListener);