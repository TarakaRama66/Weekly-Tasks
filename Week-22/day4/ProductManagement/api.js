
const BASE_URL = "https://dummyjson.com/products";

async function request(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Request failed: HTTP ${response.status}`);
    }

    return response.json();
}

function jsonOptions(method, data) {
    return {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
}

// GET: Load products
export async function fetchProducts() {
    const data = await request(`${BASE_URL}?limit=0`);
    return data.products;
}

// GET: Load one product
export async function fetchProductById(id) {
    return request(`${BASE_URL}/${id}`);
}

// POST: Add product
export async function addProduct(product) {
    return request(
        `${BASE_URL}/add`,
        jsonOptions("POST", product)
    );
}

// PUT: Update product
export async function updateProduct(id, product) {
    return request(
        `${BASE_URL}/${id}`,
        jsonOptions("PUT", product)
    );
}

// DELETE: Delete product
export async function removeProduct(id) {
    return request(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}
