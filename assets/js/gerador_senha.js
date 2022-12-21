document.getElementById("generate").addEventListener("click", function() 
{

    // Obtenha o comprimento da senha
    var length = document.getElementById("length").value; 
    
    // Gerar a senha
        var password = ""; 

    // Exibir a senha
    for (var i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * 94) + 33;
    password += String.fromCharCode(character);
    }
   
    document.getElementById("password").innerHTML = password; 
});
  