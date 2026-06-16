const original = {
  value: 10,
  nested: { x: 1 }
};

// Normal Copy
const normal = original;

// Shallow Copy
const shallow = { ...original };

// Deep Copy
const deep = structuredClone(original);

normal.nested.x = 100;

console.log(original.nested.x); // 100
console.log(shallow.nested.x);  // 100
console.log(deep.nested.x);     // 1