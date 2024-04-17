let recyclingData = [];

// Function to add a recycling entry
function addRecycling(event) {
    event.preventDefault();
    // Get input values
    const customerNameInput = document.getElementById("customerName");
    const customerIdInput = document.getElementById("customerId");
    const materialInput = document.getElementById("material");
    const quantityInput = document.getElementById("quantity");
    const customerName = customerNameInput.value;
    const customerId = customerIdInput.value;
    const material = materialInput.value;
    const quantity = parseFloat(quantityInput.value);

    // Check if quantity is a valid number
    if (isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Add entry to the recycling data array
    recyclingData.push({ customerName: customerName, customerId: customerId, material: material, quantity: quantity });

    // Update the display
    displayRecycling();
    displayTotal();

    // Clear input fields
    customerNameInput.value = "";
    customerIdInput.value = "";
    materialInput.selectedIndex = 0;
    quantityInput.value = "";
}

// Function to delete a recycling entry
function deleteRecycling(index) {
    // Remove the entry from the recycling data array
    recyclingData.splice(index, 1);

    // Update the display
    displayRecycling();
    displayTotal();
}

// Function to edit a recycling entry
function editRecycling(index) {
    // Prompt the user for the new quantity
    const newQuantity = prompt("Enter the new quantity (in kg):");

    // If the user provided a new quantity
    if (newQuantity !== null) {
        // Convert the new quantity to a number
        const parsedQuantity = parseFloat(newQuantity);

        // Check if parsed quantity is a valid number
        if (isNaN(parsedQuantity)) {
            alert("Please enter a valid quantity.");
            return;
        }

        // Update the quantity of the specified entry
        recyclingData[index].quantity = parsedQuantity;

        // Update the display
        displayRecycling();
        displayTotal();
    }
}

// Function to sort recycling entries by material
function sortRecyclingByMaterial() {
    // Sort the recycling data array by material
    recyclingData.sort((a, b) => a.material.localeCompare(b.material));

    // Update the display
    displayRecycling();
}

// Function to sort recycling entries by quantity
function sortRecyclingByQuantity() {
    // Sort the recycling data array by quantity (descending)
    recyclingData.sort((a, b) => b.quantity - a.quantity);

    // Update the display
    displayRecycling();
}

// Function to calculate total quantity
function calculateTotal() {
    // Calculate the total quantity
    const totalQuantity = recyclingData.reduce((total, entry) => total + entry.quantity, 0);

    // Display the total quantity
    alert("Total Quantity: " + totalQuantity + " kg");
}

// Function to display recycling entries
function displayRecycling() {
    // Get the container element
    const recyclingList = document.getElementById("recyclingList");

    // Clear the container
    recyclingList.innerHTML = "";

    // Loop through the recycling data array
    recyclingData.forEach((entry, index) => {
        // Create elements for the entry
        const div = document.createElement("div");
        div.classList.add("recycling");
        const customerNameParagraph = document.createElement("p");
        customerNameParagraph.textContent = "Customer Name: " + entry.customerName;
        const customerIdParagraph = document.createElement("p");
        customerIdParagraph.textContent = "Customer ID: " + entry.customerId;
        const materialParagraph = document.createElement("p");
        materialParagraph.textContent = "Material: " + entry.material;
        const quantityParagraph = document.createElement("p");
        quantityParagraph.textContent = "Quantity: " + entry.quantity + " kg";
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editRecycling(index));
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteRecycling(index));

        // Append elements to the container
        div.appendChild(customerNameParagraph);
        div.appendChild(customerIdParagraph);
        div.appendChild(materialParagraph);
        div.appendChild(quantityParagraph);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
        recyclingList.appendChild(div);
    });
}

// Function to display total quantity
function displayTotal() {
    // Calculate the total quantity
    const totalQuantity = recyclingData.reduce((total, entry) => total + entry.quantity, 0);

    // Update the total quantity display
    const totalQuantityDisplay = document.getElementById("totalQuantity");
    totalQuantityDisplay.textContent = "Total Quantity: " + totalQuantity + " kg";
}

// Function to clear the form fields
function clearForm() {
    document.getElementById("customerName").value = "";
    document.getElementById("customerId").value = "";
    document.getElementById("material").selectedIndex = 0; // Reset select to first option
    document.getElementById("quantity").value = "";
}

// Event listener for form submission
document.getElementById("recyclingForm").addEventListener("submit", addRecycling);

// Initial display of recycling entries
displayRecycling();