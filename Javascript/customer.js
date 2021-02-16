class Customer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        Customer.all.push(this)
    }
    static all = []
}

function fetchCustomers(){
    fetch(`http://127.0.0.1:3000/customers`)
    .then(response => response.json())
    .then(res => loadCustomerData(res))
}

function loadCustomerData(customersArray) {
    customersArray.forEach(customer => {
        new Customer( name = customer.name, id = customer.id)
    })
}
function numberOfOrderItems() {
    if (parseInt(document.getElementById('min').innerText) > 8) {
        return 10
    }
    if (parseInt(document.getElementById('min').innerText) > 6) {
        return 8
    }
    if (parseInt(document.getElementById('min').innerText) > 4) {
        return 7
    }
    if (parseInt(document.getElementById('min').innerText) > 2) {
        return 6
    }
    if (parseInt(document.getElementById('min').innerText) > 1) {
        return 5
    } else {
        return 3
    }
}

function customerOrder(table, customer) {
    numberOfItems = Math.floor(Math.random() * numberOfOrderItems())
    let order = new Order(table = table, customer = customer)
    for (i = 0; i <= numberOfItems; i++) {
        order.items.push(Item.all[Math.floor(Math.random() * 9)])
    }
    let tableContent = document.getElementById(`table-${table}-content`).firstChild
    tableContent.innerText = "🤗"
    sound_effect.src = "new_order.wav"
    sound_effect.load()
    sound_effect.play()
    orderFulfilledCountdown(tableContent, table) 
}

