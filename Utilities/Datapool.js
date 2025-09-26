// utils/dataPools.js

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export const pools = {
  name: () => {
    const brands = ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Samsung", "Microsoft", "Razer"];
    const models = ["Pro", "Air", "Book", "Matebook", "ThinkPad", "Spectre", "Swift", "Blade", "Surface", "VivoBook"];
    const numbers = [13, 14, 15, 16, 17];
    return `${randomFrom(brands)} ${randomFrom(models)} ${randomFrom(numbers)}`;
  },
  year: () => Math.floor(Math.random() * 6) + 2019, // 2019–2024
  price: () => (Math.random() * 2000 + 500).toFixed(2), // 500–2500
  cpu_model: () => randomFrom(["Intel Core i5", "Intel Core i7", "Intel Core i9", "AMD Ryzen 5", "AMD Ryzen 7", "Apple M1", "Apple M2"]),
  hard_disk_size: () => randomFrom(["256 GB", "512 GB", "1 TB", "2 TB", "4 TB"]),
  color: () => randomFrom(["Silver", "Gray", "Black", "White", "Blue", "Red", "Green", "Gold"]),
  country: () => randomFrom(["USA", "Germany", "India", "China", "UK", "Canada", "Ireland"])
};
