
export function showStatus(message) {
    document.getElementById("status").textContent = message;
}

export function renderProducts(products, handlers) {
    const list = document.getElementById("productList");
    list.replaceChildren();

    if (products.length === 0) {
        list.textContent = "No products found. Try another search or category.";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("article");

        const heading = document.createElement("h3");
        heading.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${Number(product.price).toFixed(2)}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        const detailsBtn = document.createElement("button");
        detailsBtn.textContent = "View Details";
        detailsBtn.addEventListener("click", () => {
            handlers.onDetails(product.id);
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            handlers.onEdit(product.id);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            handlers.onDelete(product.id);
        });

        card.append(
            heading,
            price,
            category,
            detailsBtn,
            editBtn,
            deleteBtn
        );

        list.appendChild(card);
        list.appendChild(document.createElement("hr"));
    });
}

export function renderProductDetails(product) {
    const container = document.getElementById("productDetails");
    container.replaceChildren();

    const fields = [
        ["Product ID", product.id],
        ["Name", product.title],
        ["Price", `$${Number(product.price).toFixed(2)}`],
        ["Category", product.category],
        ["Description", product.description || "No description available"],
        ["Stock", product.stock ?? "Not provided"],
        ["Rating", product.rating ?? "Not provided"]
    ];

    fields.forEach(([label, value]) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${label}: ${value}`;
        container.appendChild(paragraph);
    });
}

export function clearProductDetails() {
    document.getElementById("productDetails").textContent =
        "Select a product to view its details.";
}
