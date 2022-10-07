import { getProducts } from "./database.js"

const products = getProducts()

//Add click event listener to the code.
//When the product is clicked on, an alert box will display the price.
document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target //This targets the specific html element that gets clicked i.e. the product in this case.

        if (itemClicked.id.startsWith("product")) { //This will run, only when the products get clicked on.

            const[,productId] = itemClicked.id.split("--") //This captures the number in a string and assigns it to productId.

            /*While looping through the products, the id property will be compared to the new
            integer that has been produced. When that matches, a window will pop up.
            */
            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs ${product.price}`)
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

