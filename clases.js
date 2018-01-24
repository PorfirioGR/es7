class productData {
    constructor(productName, price, mark) {
        this.productName = productName;
        this.price = price;
        this.mark = mark;
    }
}
class bookData extends productData {
    constructor(productName, price, mark, authorBook) {
        super(productName, price, mark);
        this.authorBook = authorBook;
    }
}
var p = new bookData("Es6", 23, "Libs", "Cesar");

var printData = () => {
    console.log(p.productName);
}
$(document).ready(function() {
    //showWords();
    printData();
});