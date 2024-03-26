let mem_name = document.getElementById("mem_name")
let mem_age = document.getElementById("mem_age")
let mem_no = document.getElementById("mem_no")
let mem_type = document.getElementById("plan-type")
var membr_list = document.getElementById("membr-list")

function additem(){
    if(mem_name.value == ''){
        alert("Please enter complete details!");
    }
    else{
        //Try adding hovering details
        var new_li = document.createElement('li');
        var new_btn = document.createElement('button');
        // var details = document.createElement('p');
        new_li.innerHTML = mem_name.value + " , " + mem_age.value;
        new_btn.innerHTML = "Delete";
        new_btn.setAttribute("value","delbtn");
        // details.innerHTML = mem_no.value + "<br>" + mem_type.value;
        // details.style.display = 'none';
        new_btn.style = "margin-inline: 35%;";
        membr_list.appendChild(new_li);
        membr_list.appendChild(new_btn);
        // membr_list.appendChild(details);
    }
}



membr_list.addEventListener('click', (event)=>{
    if(event.target.tagName == 'BUTTON'){
        // console.log("DELETED!");
        const btn = event.target;
        const prevSibling = btn.previousElementSibling;
        if(btn.value == 'delbtn'){
            prevSibling.remove();
            btn.remove();
        }
    }
})
