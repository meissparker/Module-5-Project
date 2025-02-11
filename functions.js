//Function to record comments from the contact page//
let comments = [];

function recordMessage(message) {
    comments.push(message);
    return comments;
}
console.log(recordMessage("Hello"))

//Function to calculate total ticket price//

function totalTicketPrice(ticket_quantity, ticket_price) {
    return ticket_quantity * ticket_price;   
}
console.log(totalTicketPrice(5, 5.50))

//Function to thank people for their comments.//

function thankYou(name) {
    return "Thank you for your comment " + name + "!";
}
console.log(thankYou("Steve"))

//Function to record orders at the concession stand
food_orders = []

function Order(items) {
    food_orders.push(items);
    return "Your order: " + food_orders
}
console.log(Order("Burger"))