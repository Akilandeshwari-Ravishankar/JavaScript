
const tasks = [
    {
        id: "wash-car-btn",
        task: "Wash Car",
        price: 10,
        isAdded: false
    },
    {
        id: "mow-lawn-btn",
        task: "Mow Lawn",
        price: 20,
        isAdded: false
    },
    {
        id: "pull-weeds-btn",
        task: "Pull Weeds",
        price: 30,
        isAdded: false
    }
]

let totalAmt = 0

function updateTotalAmt(totalAmt) {
    if(totalAmt === 0){
        document.getElementById("total-amt-el").textContent =  ``
        document.getElementById("note").textContent = ""
    }
    else {
        document.getElementById("total-amt-el").textContent =  `$${totalAmt}`
        document.getElementById("note").textContent = "We accept cash, credit card, or PayPal"
    }
}

function addServiceHelper(taskId) {
    const contentEl = document.getElementById("content")

    if(!tasks[parseInt(taskId)].isAdded) {
        let containerEl = document.createElement("div")
        containerEl.classList.add("flex-container")
        containerEl.setAttribute("id", taskId)

        let taskEl = document.createElement("div")
        taskEl.classList.add("task-el")
        taskEl.innerHTML = `${tasks[parseInt(taskId)].task}`

        let removeEl = document.createElement("span")
        removeEl.classList.add("remove-el-btn")
        removeEl.textContent = "Remove"
        removeEl.addEventListener("click", function() {
            console.log("clicked!")
            totalAmt -= tasks[parseInt(taskId)].price
            updateTotalAmt(totalAmt)
            removeEl.parentElement.parentElement.remove()
            tasks[parseInt(taskId)].isAdded = false
            document.getElementById(tasks[parseInt(taskId)].id).disabled = false
        })
        taskEl.appendChild(removeEl)

        let taskAmt = document.createElement("div")
        taskAmt.textContent =  `$${tasks[parseInt(taskId)].price}`
        
        containerEl.appendChild(taskEl)
        containerEl.appendChild(taskAmt)
        contentEl.appendChild(containerEl)

        totalAmt += tasks[parseInt(taskId)].price
        updateTotalAmt(totalAmt)

        tasks[parseInt(taskId)].isAdded = true
        document.getElementById(tasks[parseInt(taskId)].id).disabled = true
    } 
}

for(let i=0;i<3;i++){
    document.getElementById(tasks[i].id).addEventListener("click", function(){
        addServiceHelper(i.toString())
    })

}


document.getElementById("invoice-btn").addEventListener("click", function() {
    console.log("Invoice Btn clicked!")
    let removeAll = document.getElementsByClassName("flex-container")
    let len = removeAll.length
    for(let i=0; i<len; i++) {
        console.log(removeAll[i])
        removeAll[0].remove();
    }
    totalAmt = 0
    updateTotalAmt(totalAmt)

    for(let i=0; i<3; i++) {
        tasks[i].isAdded = false
        document.getElementById(tasks[i].id).disabled = false
    }
    console.log(removeAll)
})
