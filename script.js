function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Ver mais";
      moreText.style.display = "none"
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Ver menos";
      moreText.style.display = "inline";
  }
}

function toggleDiv() {
  if(document.getElementById("exemplo1").style.display == 'none') {
    document.getElementById("exemplo1").style.display = 'block';
    document.getElementById("exemplo2").style.display = 'none';
  } else {
    document.getElementById("exemplo1").style.display = 'none';
    document.getElementById("exemplo2").style.display = 'block';
  }
}