function addProduct(object) {
    var products = document.getElementsByName("product");
    var tr = object.parentNode.parentNode;//获取到此行
    //创建购物车中的tr
    var nameTd = document.createElement("td");
    nameTd.innerHTML = tr.cells[0].innerHTML;
    var priceTd = document.createElement("td");
    priceTd.innerHTML = tr.cells[1].innerHTML;
    var goods = document.getElementById("goods");//购物车的tbody
    var isFound = false;
    var sumOfPrice;
    for (var i = 0; i < goods.rows.length; i++) {
        var goodsName = goods.rows[i].cells[0];
        if(goodsName.innerHTML == nameTd.innerHTML){
            //获取数量td的所有子节点childNodes
            var productCount = ++goods.rows[i].cells[2].childNodes[1].value;
            sumOfPrice = parseInt(priceTd.innerHTML)*productCount;
            goods.rows[i].cells[3].innerHTML = sumOfPrice;
            isFound = true;
            break;
        }
    }
    //如果isFound = false,代表购物车里还没有这项商品，所以新增newTr
    var newTr = document.createElement("tr");
    if(!isFound) {
        newTr.appendChild(nameTd);
        newTr.appendChild(priceTd);
        var countTd = document.createElement("td");
        countTd.setAttribute("align","center");
        var tag1 = document.createElement("input");
        var tag2 = document.createElement("input");
        var tag3 = document.createElement("input");
        tag1.setAttribute("type","button")
        tag1.setAttribute("value","-");
        tag1.setAttribute("onclick","subGoods(this)");

        tag2.setAttribute("type","text");
        tag2.setAttribute("size","3");
        tag2.setAttribute("value","1");
        tag3.setAttribute("type","button");
        tag3.setAttribute("value","+");
        tag3.setAttribute("onclick","addGoods(this)");
        //将数量的表格添加上button和数字的text
        countTd.appendChild(tag1);
        countTd.appendChild(tag2);
        countTd.appendChild(tag3);

        var sumOfPriceTd = document.createElement("td");
        sumOfPriceTd.innerHTML = priceTd.innerHTML;

        var deleteTd = document.createElement("td");
        deleteTd.setAttribute("align","center");
        var tag4 = document.createElement("input");
        tag4.setAttribute("type","button");
        tag4.setAttribute("value","x");
        tag4.setAttribute("onclick","deleteTr(this)");
        deleteTd.appendChild(tag4);

        newTr.appendChild(countTd);
        newTr.appendChild(sumOfPriceTd);
        newTr.appendChild(deleteTd);
        goods.appendChild(newTr);
    }
    total();
}
//click‘-’，该商品数量减1，同时计算总价
function subGoods(object) {
    var countTr = object.parentNode.childNodes[1];
    var tr =object.parentNode.parentNode;
    var sumOfPriceTr = tr.cells[3];
    var price = parseInt(tr.cells[1].innerHTML);//单价
    var value = countTr.value;//button——>td
    if(value > 0){
        value--;
        countTr.value = value;
        sumOfPriceTr.innerHTML = value*price;
    }
    if (value == 0){
        var table = tr.parentNode;
        table.removeChild(tr);
    }
    total();
}
//click‘+’，该商品数量加1，同时计算总价
function addGoods(object) {
    var countTr = object.parentNode.childNodes[1];
    var tr =object.parentNode.parentNode;
    var sumOfPriceTr = tr.cells[3];
    var price = parseInt(tr.cells[1].innerHTML);//单价
    var value = countTr.value;//button——>td
    value++;
    countTr.value = value;
    sumOfPriceTr.innerHTML = value*price;
    total();
}


function deleteTr(object) {
    var tr = object.parentNode.parentNode;//button——>表格——>行
    //如需删除某个 HTML 元素，需要知晓该元素的父：
    var table = tr.parentNode;
    table.removeChild(tr);
    total();
}

function total() {
    var totalTd = document.getElementById("total");
    var table = totalTd.parentNode.parentNode.parentNode;
    tbody = table.tBodies[0];
    var priceCount = 0;
    for (var i = 0; i < tbody.rows.length; i++) {
        var price = parseInt(tbody.rows[i].cells[3].innerHTML);
        priceCount += price;
    }
    totalTd.innerHTML = priceCount;

}