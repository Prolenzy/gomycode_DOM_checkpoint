// Function to adjust the quantity of items
function adjustQuantity(btn, action) {
    let quantityElement = btn.parentElement.querySelector('span');
    let currentQuantity = parseInt(quantityElement.textContent);
    // Ensure quantity doesn't go below 1
    if (action === '-' && currentQuantity > 0) {
        currentQuantity--;
    } else if (action === '+') {
        currentQuantity++;
    }
    quantityElement.textContent = currentQuantity;
    updateTotalPrice();
}
// Function to delete an item from the cart
function deleteItem(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
    updateTotalPrice();    
}
// Function to toggle the liked state of an item
function toggleLike(btn) {
    btn.classList.toggle('liked');
}
// Function to update the total price based on item quantities user selects
function updateTotalPrice() {    
    let rows = document.querySelectorAll('#cartTable tbody tr');
    let totalPrice = 0;

    rows.forEach(row => {
        if (!row.classList.contains('deleted')) {
            let quantity = parseInt(row.querySelector('span').textContent);
            let price = parseFloat(row.querySelector('td:nth-child(3)').textContent.substring(1));
            totalPrice += quantity * price;
        }
    });
    // Display the total price of the selected items
    document.getElementById('totalPrice').textContent = '$' + totalPrice.toFixed(2);
}