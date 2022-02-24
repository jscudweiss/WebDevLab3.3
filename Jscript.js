const stdnt_array = []

function myRound(input){
    let myNum = input*10;
    Math.round(myNum);
    return myNum/10;
}

function clearText() {
    document.getElementById("alert_weight").innerText = "";
    document.getElementById("alert_name").innerText = "";
    document.getElementById("alert_feet").innerText = "";
    document.getElementById("alert_inches").innerText = "";
}

function clearInput(){
    document.getElementById("stdnt_name").value = "";
    document.getElementById("stdnt_inch").value = "";
    document.getElementById("stdnt_feet").value = "";
    document.getElementById("stdnt_year").value = 0;
    document.getElementById("stdnt_weight").value = "";
}

function addStudent() {
    clearText();
    let weight = 0;
    let inch = 0;
    let feet = 0;
    const docWeight = document.getElementById("stdnt_weight").value;
    const docFeet = document.getElementById("stdnt_feet").value;
    const docInch = document.getElementById("stdnt_inch").value;
    const docYear = parseInt(document.getElementById("stdnt_year").value);
    if (docWeight.length > 0) {
        weight = parseInt(docWeight);
    }
    if (docInch.length > 0) {
        inch = parseInt(docInch);
    }
    if (docFeet.length > 0) {
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
    if (newStdnt.name.length < 1) {
        document.getElementById("alert_name").innerText = "name must not be empty";
        return;
    }
    if (newStdnt.heightFt <= 0) {
        document.getElementById("alert_feet").innerText = "height must greater than 0";
        return;
    }
    if (newStdnt.heightIn <= 0 || newStdnt.heightIn > 11) {
        document.getElementById("alert_inches").innerText = "height must greater than 0 and less than 12";
        return;
    }
    if (newStdnt.weight < 50) {
        document.getElementById("alert_weight").innerText = "weight must be greater than 50";
        return;
    }
    clearInput();
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
        const stdnt_ulist = document.getElementById("stdnt_list");
        const htmlWeight = document.getElementById("BMI average");
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
        htmlWeight.innerText = myRound(totalBMI / stdnt_array.length);
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
    return stdnt.name + ",\t"+ yearToString(stdnt.year) + ",\t" + stdnt.heightFt + "ft " + stdnt.heightIn + "in,\t" + stdnt.weight + "lb,\t" + myRound(stdnt.BMI) + "(BMI)\t";
}

function yearToString(year) {
    switch(year) {
        case 0:
            return "Freshman"
        case 1:
            return "Sophomore"
        case 2:
            return "Junior"
        case 3:
            return "Senior"
        default:
            break;
    }
}