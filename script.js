var input = document.getElementById("inp")
var i = 1;

input.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        addElement();
        input.value = "";
    }
});


function addElement() {
    var x = document.getElementById("inp").value;
    if (x == "" || x == null) {
        return;
    }
    var tasktext = document.createElement("span");
    tasktext.innerHTML = x + " ";
    tasktext.setAttribute("id", i-1);

    var task = document.createElement("li");
    task.append(tasktext);
    task.setAttribute("id", i)
    i++;
    console.log(i);

    var deletebtn = document.createElement("button");
    deletebtn.setAttribute("onclick", "minus(this)");
    deletebtn.setAttribute("id", i);
    deletebtn.innerHTML = "del";
    task.append(deletebtn);
    i++;

    var editbtn = document.createElement("button");
    editbtn.setAttribute("onclick", "edit(this)");
    editbtn.setAttribute("id", i);
    editbtn.innerHTML = "edit";
    task.append(editbtn);
    i++;
    
    document.getElementById("showlist").appendChild(task);
    input.value = "";
}


function minus(obj) {
    var id = obj.id;
    document.getElementById(id-1).remove();
}


function edit(obj) {
    var id = obj.id;
    console.log(document.getElementById(id-2).innerHTML);

    var nextask = document.getElementById(id-2);
    var oldtask = prompt("Edit task:");
    if (oldtask == null || oldtask == "") {
        if (confirm("Do you want to delete task?")) {
            document.getElementById(id-1).click();
        }
    } else {
        document.getElementById(id-3).innerHTML = oldtask + " ";
        nextask.append(document.getElementById(id-1));
        nextask.append(document.getElementById(id));
    }
}