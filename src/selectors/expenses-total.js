export default (expenses) => {
    const totalAmount = expenses.map((expense) => expense.amount).reduce((result, item) => {
        return result + item;
    }, 0)
    return totalAmount;

}