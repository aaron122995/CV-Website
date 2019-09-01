var numberOfcertificate = document.querySelectorAll(".certificate").length;

for (var i = 0; i < numberOfcertificate; i++) {

  document.querySelectorAll(".certificate")[i].addEventListener("click",

    function() {


        var href_attribute = this.getAttribute("href");
        if(href_attribute === ""){
        alert("I am  currently taking a course in OpenU");

        }


      }

















  );



}
