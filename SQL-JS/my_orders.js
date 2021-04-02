var my_orders = [];
 
my_orders.push({
    email: "test999@gmail.com",
    active_orders: [
        {id: 1, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    ],
    completed_orders: [
        {id: 1, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
        {id: 2, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
        {id: 3, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
        {id: 4, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
        {id: 5, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
        {id: 6, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    ],
    address: {
        address1: 'Via Filippo Turati, 4',
        postalCode: '20141',
        floor: 'Interno 4',
        intercom: 'Rossi - Rianchi',
        address2: 'Casa',
        riders: ''
    }
});

for (var i =0;i<my_orders.length;i++){
    collection("orders").doc("test999@gmail.com").set(my_orders[i]);
}