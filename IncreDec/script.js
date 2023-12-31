let value = document.querySelector("#val");

let dec = () => {
  //get the value from UI
  let v = parseInt(value.innerHTML);
  //operation on Value
  if (v <= 0) {
    alert("Can't decrease!");
  } else {
    v -= 1;
  }
  //return the value into UI
  value.innerHTML = v;
};

let inc = () => {
  //get the value form UI
  let i = parseInt(value.innerHTML);
  //Increasing the value
  i += 1;
  //return the value into UI
  value.innerHTML = i;
};
