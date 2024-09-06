// ACCORDION
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Fermer tous les panneaux
    for (var j = 0; j < acc.length; j++) {
      var panel = acc[j].nextElementSibling;
      if (panel.style.display === "block" && acc[j] !== this) {
        panel.style.display = "none";
        acc[j].classList.remove("active");
      }
    }
    
    // Activer le panneau cliqué
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
