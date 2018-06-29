var db = require('../fn/db');

exports.loadAll = () => {
    var sql = 'select * from orders';
    return db.load(sql);
}

exports.single = (OrderId) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from orders where OrderID = ${OrderID}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            }
            else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}
 exports.addbill =(Order)=>{
     var sql = `INSERT INTO orders(OrderDate,UserID,Address,Total,Phone) VALUES('NOW()','${Order.userId}','${Order.address}','${Order.total}','${Order.phone}')`;
     return db.save(sql);

}

exports.addbilldetail = detail => {
    var sql = `INSERT INTO orderdetails(OrderID,ProID,Quantity,Price,Amount) VALUES('${detail.OrderId}','${detail.proId}', '${detail.quantity}', '${detail.price}','${detail.sum}')`;
    return db.save(sql);
}

exports.getbillid=email=>{
    var sql=`SELECT details.OrderID as ID FROM details where Phone='${phone}' `;
    return db.save(sql);

}

exports.removeall = (cart) => {
    for (var i = cart.length - 1; i >= 0; i--) {
            cart.splice(i, 1);
    }
    return;
}

exports.add = (cart, item) => {
    for (i = cart.length - 1; i >= 0; i--) {
        if (cart[i].proId === item.proId) {
            cart[i].quantity += item.quantity;
            return;
        }
       
    }
    cart.push(item);
}

