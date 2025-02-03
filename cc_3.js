// Task 1: Product Price Management

let prices = [15, 25, 35, 45, 55];
prices.push(65); // Add new price
prices = prices.slice(1); // Remove the first price 
console.log("Updated Prices:", prices);


// Task 2: Modifying Customer Orders

let orders = [5, 10, 15, 20, 25];
orders[2] += 5; // Increase third order by 5
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);


// Task 3: Employee Performance Tracking

let employee = {
    name: "John Doe",
    role: "Software Engineer",
    performanceScore: 85,
    isActive: true
};
employee.performanceScore = 90; // Update performance score
employee.promotionEligible = true; // Add new property
console.log("Updated Employee:", employee);