import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

// const employeeOrders = (employee) => {
//     let fulfilledOrders = []

//     for (const order of orders) {
//         if (order.employeeId === employee.id) {
//             fulfilledOrders.push(order)
//         }
//     }
//     return fulfilledOrders
// }

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            const [, employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                        let fulfilledOrders = []
                        for (const order of orders) { //Iterates through orders
                            if (order.employeeId === employee.id) { //
                                fulfilledOrders.push(order)
                            }
                        }
                      window.alert(`${employee.name} sold ${fulfilledOrders.length} products.`)  
                    }
                    
                }
            }
        }
    
)

                   

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

