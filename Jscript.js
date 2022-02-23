const stdnt_array = []

function clearText() {
    document.getElementById("alert_weight").innerText = "";
    document.getElementById("alert_name").innerText = "";
}

function addStudent() {
    clearText();
    let weight = 0;
    let inch = 0;
    let feet = 0;
    const docWeight = document.getElementById("stdnt_weight").value
    const docFeet = document.getElementById("stdnt_feet").value
    const docInch =document.getElementById("stdnt_inch").value
    if (docWeight.length > 0) {
        weight = parseInt(docWeight);
    }
    if (docWeight.length > 0) {
        inch = parseInt(docInch);
    }
    if (docWeight.length > 0) {
        feet = parseInt(docFeet);
    }

const newStdnt = {
        "name": document.getElementById("stdnt_name").value,
        "weight": weight,
        "height": docFeet*12 + docInch,
    };
    if (newStdnt.name.length <= 3) {
        document.getElementById("alert_name").innerText = "name must have at least 4 characters";
        return;
    }
    if (newStdnt.weight < 1 || newStdnt.weight > 10) {
        document.getElementById("alert_weight").innerText = "Please input weight between 1 and 10";
        return;
    }
    stdnt_array.push(newStdnt);
    showList();
}

function showList() {
    if (stdnt_array.length > 0) {
        if (document.getElementById("weight").checked) {
            stdnt_array.sort((a, b) => {
                return a.weight - b.weight
            });
        } else {
            stdnt_array.sort((a, b) => {
                return a.size - b.size
            });
        }
        const stdnt_ulist = document.getElementById("stdnt_list")
        const htmlWeight = document.getElementById("total_weight")
        stdnt_ulist.innerHTML = "";
        let totalWeight = 0;
        htmlWeight.innerText = totalWeight + " lb";
        stdnt_array.forEach(stdnt => {
            totalWeight += stdnt.weight;
            //stdnt_ulist.innerHTML += "<li class=\"list-group-item\">"+(itemToString(stdnt))+"</li>";
            const li = document.createElement("li")
            li.innerText = itemToString(stdnt)
            li.className="list-group-item"
            stdnt_ulist.appendChild(li)
        });
        htmlWeight.innerText = totalWeight + "lb"
        // for(let i =0; i<stdnt_array.length; i++){
        //     console.log(itemToString(stdnt_array[i]))
        // }
        // stdnt_array.forEach(function (stdnt){
        //     console.log(itemToString(stdnt))
        // });
        // for(const stdnt of stdnt_array){
        //     console.log(itemToString(stdnt))
        // }

    }
}

function itemToString(stdnt) {
    return stdnt.name + "\t" + stdnt.weight + "lb\t" + sizeToString(stdnt.size);
}

function sizeToString(size) {
    if (size === 0) {
        return "Small"
    } else if (size === 1) {
        return "Medium"
    } else if (size === 2) {
        return "Large"
    }
}