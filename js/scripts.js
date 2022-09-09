(document).ready(function(event) {
  ("form#survey").submit(function(event) {

    const fruits = ("#fruits").val(
    const cuisine = ("#cuisine").val();
    const pets = ("#pets").val();
    const gender = ("#gender").val();
    const season =("#season").val();

    
    if (fruits === "kiwi" || cuisine === "thai" && gender === "female") {
      ("#ruby").show();
      ("#javascript").hide();
      ("#rust").hide();
    } else if (fruits === "banana" || cuisine === "italian" || gender === "male") {
      ("#ruby").hide();
      ("#javascript").show();
      ("#rust").hide();
    } else if (fruits === "peach" || cuisine === "mexican" || season === "winter") {
      ("#ruby").hide();
      ("#javascript").hide();
      ("#rust").show();
    } else {
      ("#ruby").hide();
      ("#javascript").hide();
      ("#rust").show();
    }
    event.preventDefault();
  });
});