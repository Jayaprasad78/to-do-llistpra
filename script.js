const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addtask()
{
    if (inputbox.value=='')
    {
        alert('input box cannot be empty');
    }
    else
    {
        let Li=document.createElement('li');
        Li.innerHTML = inputbox.value;
        listcontainer.appendChild(Li);

        let Span=document.createElement('span');
        Span.innerHTML ="\u00d7";
        Li.appendChild(Span);

    }
    inputbox.value=''
    savedata()
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI")
     {
        e.target.classList.toggle("checked");
        savedata()
    } 
    else if (e.target.tagName === "SPAN")
     {
        e.target.parentNode.remove();
        savedata()
    }
}, false);


display();

function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function display()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
