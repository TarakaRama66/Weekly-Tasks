
let products = [];

export function setProducts(data) {
    products = [...data];
}

export function getProducts() {
    return [...products];
}

export function addLocalProduct(product) {
    products = [product, ...products];
}

export function updateLocalProduct(id, updatedProduct) {
    products = products.map(product =>
        product.id === id
            ? { ...product, ...updatedProduct }
            : product
    );
}

export function deleteLocalProduct(id) {
    products = products.filter(product => product.id !== id);
}

export function searchAndFilterProducts(search, category) {
    const query = search.trim().toLowerCase();

    return products.filter(product => {
        const matchesSearch =
            product.title.toLowerCase().includes(query);

        const matchesCategory =
            category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    });
}

export function getCategories() {
    return [...new Set(products.map(product => product.category))]
        .sort();
}

export function findLocalProduct(id) {
    return products.find(product => product.id === id);
}
