const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
   
     document.getElementById("paymentForm").addEventListener("submit", function(event) {
      event.preventDefault();
    
    
      var cardNumber = document.getElementById("cardNumber").value;
      var cardName = document.getElementById("cardName").value;
      var expiryDate = document.getElementById("expiryDate").value;
      var cvv = document.getElementById("cvv").value;
    
      
      document.getElementById("paymentForm").reset();
    
      
      var container = document.querySelector(".container");
      container.innerHTML = "<h1>Payment Successful</h1>";
    });
    