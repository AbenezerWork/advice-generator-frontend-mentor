const url =  "https://api.adviceslip.com/advice"
const quote = document.getElementById("quote");
const button = document.getElementById("button");
const id = document.getElementById('id')

async function refresh(){
  const response = await fetch(url);
  const obj = await response.json();
  quote.innerText = obj.slip.advice;
  id.innerText = obj.slip.id
  console.log(obj)
  button.setAttribute('class','static')
  return obj
}
refresh()

button.addEventListener('click',()=>{
  button.setAttribute('class','rotate')
  refresh();
})
