
import {
    fetchProducts,
    fetchProductById,
    addProduct,
    updateProduct,
    removeProduct
} from "./api.js";

import {
    setProducts,
    getProducts,
    addLocalProduct,
    updateLocalProduct,
    deleteLocalProduct,
    searchAndFilterProducts,
    getCategories,
    findLocalProduct
} from "./products.js";

import {
    showStatus,
    renderProducts,
    renderProductDetails,
    clearProductDetails
} from "./ui.js";

const form = document.getElementById("productForm");
const productIdInput = document.getElementById("productId");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");

const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const refreshBtn = document.getElementById("refreshBtn");

let busy = false;

function setBusy(value) {
    busy = value;
    saveBtn.disabled = value;
    refreshBtn.disabled = value;
}

function refreshCategoryOptions() {
    const selected = categoryFilter.value;
    const categories = getCategories();

    categoryFilter.replaceChildren();

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Categories";
    categoryFilter.appendChild(allOption);

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    categoryFilter.value =
        categories.includes(selected) ? selected : "all";
}

function renderCurrentProducts() {
    const filtered = searchAndFilterProducts(
        searchInput.value,
        categoryFilter.value
    );

    renderProducts(filtered, {
        onDetails: viewProductDetails,
        onEdit: startEdit,
        onDelete: handleDelete
    });

    if (filtered.length === 0) {
        showStatus("Empty state: No matching products.");
    } else {
        showStatus(`${filtered.length} product(s) displayed.`);
    }
}

async function loadProducts() {
    setBusy(true);
    showStatus("Loading products...");

    try {
        const data = await fetchProducts();
        setProducts(data);
        refreshCategoryOptions();
        renderCurrentProducts();
        showStatus(`Successfully loaded ${data.length} products.`);
    } catch (error) {
        showStatus(`Error loading products: ${error.message}`);
    } finally {
        setBusy(false);
    }
}

async function viewProductDetails(id) {
    showStatus("Loading product details...");

    try {
        const product = await fetchProductById(id);
        renderProductDetails(product);
        showStatus(`Showing details for product ${id}.`);
    } catch (error) {
        showStatus(`Unable to load details: ${error.message}`);
    }
}

function startEdit(id) {
    const product = findLocalProduct(id);
    if (!product) return;

    productIdInput.value = product.id;
    titleInput.value = product.title;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    descriptionInput.value = product.description || "";

    saveBtn.textContent = "Save Changes";
    cancelBtn.hidden = false;
    titleInput.focus();

    showStatus(`Editing product ${product.id}.`);
}

function resetForm() {
    form.reset();
    productIdInput.value = "";
    saveBtn.textContent = "Add Product";
    cancelBtn.hidden = true;
}

form.addEventListener("submit", async event => {
    event.preventDefault();

    if (busy) return;

    const title = titleInput.value.trim();
    const category = categoryInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = Number(priceInput.value);
    const id = productIdInput.value;

    if (!title || !category || !description ||
        !Number.isFinite(price) || price <= 0) {
        showStatus("Please enter a valid name, category, description, and positive price.");
        return;
    }

    const productData = {
        title,
        category,
        description,
        price
    };

    setBusy(true);
    saveBtn.disabled = true;
    showStatus(id ? "Updating product..." : "Adding product...");

    try {
        if (id) {
            const updated = await updateProduct(id, productData);

            updateLocalProduct(Number(id), {
                ...productData,
                ...updated,
                id: Number(id)
            });

            showStatus("Product updated successfully.");
        } else {
            const created = await addProduct(productData);

            // Demo API simulates POST; preserve it locally for this session.
            addLocalProduct({
                ...productData,
                ...created
            });

            showStatus("Product added successfully.");
        }

        resetForm();
        refreshCategoryOptions();
        renderCurrentProducts();
    } catch (error) {
        showStatus(`Save failed: ${error.message}`);
    } finally {
        setBusy(false);
    }
});

async function handleDelete(id) {
    if (busy) return;

    if (!confirm("Are you sure you want to delete this product?")) {
        return;
    }

    setBusy(true);
    showStatus("Deleting product...");

    try {
        await removeProduct(id);
        deleteLocalProduct(id);

        clearProductDetails();
        refreshCategoryOptions();
        renderCurrentProducts();
        showStatus("Product deleted successfully.");
    } catch (error) {
        showStatus(`Delete failed: ${error.message}`);
    } finally {
        setBusy(false);
    }
}

searchInput.addEventListener("input", renderCurrentProducts);
categoryFilter.addEventListener("change", renderCurrentProducts);

cancelBtn.addEventListener("click", resetForm);
refreshBtn.addEventListener("click", loadProducts);

loadProducts();
