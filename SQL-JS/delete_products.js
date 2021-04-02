 
var products = collection('products').where('type','==','add').get();
for(var i=0;i<products.length;i++){
    
    products[i].ref.delete();
     
};