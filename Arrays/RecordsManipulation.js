const orders = [
  { name: "Alice", amount: 1000, status: "completed" },
  { name: "Bob", amount: 2500, status: "pending" },
  { name: "Charlie", amount: 1500, status: "completed" },
  { name: "Alice", amount: 2000, status: "completed" },
  { name: "David", amount: 3000, status: "failed" },
  { name: "Bob", amount: 1200, status: "completed" },
  { name: "Eve", amount: 2000, status: "completed" },
  { name: "Charlie", amount: 800, status: "pending" },
  { name: "Alice", amount: 500, status: "pending" },
  { name: "David", amount: 1500, status: "completed" },
  { name: "Eve", amount: 1000, status: "completed" },
  { name: "Bob", amount: 1800, status: "completed" }
];

const distintOrders = orders.reduce((acc, item) => {
    if (!acc[item.name]) {
        acc[item.name] = { ...item }
    } else {
        acc[item.name].amount += item.amount
    }

    return acc;
}, {});

const sortOrders = Object.values(distintOrders).sort((a , b) => b.amount - a.amount);

console.log(sortOrders);