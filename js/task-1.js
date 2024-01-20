function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = quantity * pricePerDroid
    if (totalPrice > customerCredits) {
        return "Insufficient funds!"
    } else {
        return "You ordered " + quantity + " droids worth " + totalPrice + " credits!";
    }
}
function checkForSpam() {
    if (spam || sale) {
        return true;
    } else {
        return false;
    }
}
