const pools = {
  name: () => [
    "Apple MacBook Pro 16",
    "Apple MacBook Air 13",
    "Apple MacBook Pro 14",
    "Apple MacBook Air M2",
    "Apple MacBook Pro M1",
    "Dell XPS 15",
    "HP Spectre x360",
    "Lenovo ThinkPad X1"
  ][Math.floor(Math.random() * 8)],
  year: () => [2018, 2019, 2020, 2021, 2022, 2023][Math.floor(Math.random() * 6)],
  price: () => [1499.99, 1849.99, 1999.99, 2099.99, 2299.99, 999.99][Math.floor(Math.random() * 6)],
  cpu_model: () => ["Intel Core i7", "Intel Core i9", "Apple M1 Pro", "Apple M2 Max", "AMD Ryzen 7", "Intel Core i5"][Math.floor(Math.random() * 6)],
  hard_disk_size: () => ["512 GB", "1 TB", "2 TB", "4 TB", "256 GB", "128 GB"][Math.floor(Math.random() * 6)],
  color: () => ["Silver", "Space Gray", "Black", "White", "Blue", "Red"][Math.floor(Math.random() * 6)],
  country: () => ["USA", "China", "Germany", "India", "Japan", "UK"][Math.floor(Math.random() * 6)]
};

function replacePlaceholders(obj) {
  if (typeof obj === "string") {
    const match = obj.match(/^{{(.*?)}}$/);
    if (match) {
      const key = match[1];
      if (pools[key]) return pools[key]();
    }
    return obj;
  }
  if (typeof obj === "object" && obj !== null) {
    const result = Array.isArray(obj) ? [] : {};
    for (const key of Object.keys(obj)) {
      result[key] = replacePlaceholders(obj[key]);
    }
    return result;
  }
  return obj;
}

export function generateRandomData(template) {
  return replacePlaceholders(template);
}
