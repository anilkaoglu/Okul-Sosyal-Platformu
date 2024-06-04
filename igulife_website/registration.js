document.getElementById("main-page-button").addEventListener("click", function() {
    window.location.href = "index.html"; 
  });

  document.getElementById("club-registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    document.getElementById("popup-overlay").style.display = "flex";
  });
  
  document.getElementById("close-popup").addEventListener("click", function() {
    
    document.getElementById("popup-overlay").style.display = "none";
  });
  