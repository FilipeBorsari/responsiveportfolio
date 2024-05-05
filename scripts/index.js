const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
/*Aqui fiz a seleção dos elementos que quero trabalha */
button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
}); /*adicionando um ouvinte de eventos ao 
   botão. Quando o botão é clicado, a função 
   é executada. Essa função usa o método 
   classList.toggle() para alternar a classe active
   no elemento mobileNavbar. Isso significa que 
   cada vez que o botão for clicado, a classe 
   active será adicionada se ela não estiver 
   presente ou removida se já estiver presente.
   Em suma, botão On/Off */

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
}); /*Faz a navbar aparecer no mobile quando 
      'scrolla' pra cima */

