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
    const docInch = document.getElementById("stdnt_inch").value
    const docYear = parseInt(document.getElementById("stdnt_year").value)
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
        "heightFt": feet,
        "heightIn": inch,
        "comboHeight": ((feet * 12) + inch),
        "year": docYear,
        "BMI": (weight / ((feet * 12) + inch)),
    };
    if (newStdnt.name.length <= 1) {
        document.getElementById("alert_name").innerText = "name must not be empty";
        return;
    }
    if (newStdnt.weight < 50) {
        document.getElementById("alert_weight").innerText = "Please input greater";
        return;
    }
    console.log(newStdnt)
    stdnt_array.push(newStdnt);
    showList();
}

function showList() {
    if (stdnt_array.length > 0) {
        if (document.getElementById("year").checked) {
            stdnt_array.sort((a, b) => {
                return a.year - b.year
            });
        } else {
            if (document.getElementById("height").checked) {
                stdnt_array.sort((a, b) => {
                    return b.comboHeight - a.comboHeight
                });
            } else {
                stdnt_array.sort((a, b) => {
                    return a.BMI - b.BMI
                });
            }
        }
        const stdnt_ulist = document.getElementById("stdnt_list")
        const htmlWeight = document.getElementById("BMI average")
        stdnt_ulist.innerHTML = "";
        let totalBMI = 0;
        htmlWeight.innerText = totalBMI;
        stdnt_array.forEach(stdnt => {
            totalBMI += stdnt.BMI;
            //stdnt_ulist.innerHTML += "<li class=\"list-group-item\">"+(itemToString(stdnt))+"</li>";
            const li = document.createElement("li")
            li.innerText = itemToString(stdnt)
            li.className = "list-group-item"
            stdnt_ulist.appendChild(li)
        });
        htmlWeight.innerText = (totalBMI / stdnt_array.length)
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
    return stdnt.name + "\t" + stdnt.heightFt + "ft\t" + stdnt.heightIn + "in\t" + stdnt.weight + "lb\t" + stdnt.BMI + "\t" + yearToString(stdnt.year);
}

function yearToString(year) {
    return "Year " + (year + 1)
}