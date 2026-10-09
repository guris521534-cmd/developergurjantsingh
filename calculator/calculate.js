function displayoperations(i) {
  var displayoperations = document.getElementById("displayoperations");
  var s = i.innerHTML;
  if (s.trim() == "=") {
    var total = eval(displayoperations.innerHTML);
    displayoperations.innerHTML = total;
  } else if (s.trim() == "del") {
    // var total = eval(displayoperations.innerHTML);
    // displayoperations.innerHTML = total;
    // alert("gurjant singh")
    var del = displayoperations.innerHTML.trim();
    // alert(displayoperations.innerHTML.trim().length)
    displayoperations.innerHTML = del.slice(
      0,
      displayoperations.innerHTML.trim().length - 1,
    );
    // console.log(del)
  } 
  else if(s.trim()=="ac")
  {
    displayoperations.innerHTML="0"
    // alert("gurjant");
  }
  else {
    if(displayoperations.innerHTML.trim()==0)
    {

      displayoperations.innerHTML = s.trim();
    }
    else
      {
      displayoperations.innerHTML += s.trim();

    }
  }
}
// for(i=0;i<x.length;i++)
// {

// x[i].addEventListener("sdfa", displayoperations(i));
// }
