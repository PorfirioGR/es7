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
var p = new bookData("Es6", 23, "Libs", "Eduardo");

var printData = () => {
    console.log(p.productName, p.authorBook);
    var txtBook = "El libro se llama " + p.productName + " y fue escrito por: " + p.authorBook + "";
    document.getElementById("demo").innerHTML = txtBook;
}
$(document).ready(function() {
    //showWords();
    printData();
});