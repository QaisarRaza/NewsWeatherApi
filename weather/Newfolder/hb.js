const items = document.querySelector('.nav-items');
 const open = document.querySelector('.openmanue');
 const clos = document.querySelector('.closmanue');

 open.addEventListener("click" ,function show(){
    items.style.right= '0';
 });
  clos.addEventListener("click" , function close(){
    items.style.right = '-100%';
  });