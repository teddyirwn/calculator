let input = document.querySelector('.input')
let button = document.querySelectorAll('button')
let character = ['del', 'c', '*', '/', '+', '=']
let output = ""

const hasil = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output)
    }
    else if (btnValue === 'del') {
        output = "";
    } else if (btnValue === "c") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && character.includes(btnValue)) return;
        output += btnValue
    }
    input.value = output;
}


button.forEach(b => {
    b.onclick = (e) => hasil(e.target.value)
});