const submit = document.querySelector('input[type="submit"]');
const description = document.getElementById('new-task-description');
const list = document.querySelector('ul');


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  submit.addEventListener('click', e => e.preventDefault())
}) 




function onSubmit(){
  const newItem = description.value;
  if(newItem === ''){
    alert('Please enter task');
    return;
  }
    addItemToDOM(newItem)
}

function addItemToDOM(item){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton();
  li.appendChild(button);
  list.appendChild(li);
}

function createButton(){
  const button = document.createElement('button');
  button.innerHTML = 'x'
  button.style.marginLeft= '10px';
  return button;
  }

function removeItem (e){
  const li = e.target.parentElement;
  list.removeChild(li);
}




submit.addEventListener('click', onSubmit);
list.addEventListener('click', removeItem);



