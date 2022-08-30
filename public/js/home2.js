const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
};

//ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({
        value: value, description: description, date: date, type: type
    });

    saveData(data);
    e.target.reset();
    myModal.hide();

    alert("Lançamento adicionado com sucesso.");

});



checkLogged();

getCashIn();

document.getElementById("button-logout").addEventListener("click", logout);

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }
};

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getCashIn() {
    const transactions = data.transactions;
    const cashIn = transactions.filter((item) => item.type == "1");
    console.log(cashIn);
}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

