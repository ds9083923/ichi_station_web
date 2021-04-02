function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

var products =[];
const img1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const img2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const img3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const img5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const img6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const img7 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const img8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const img9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const img10 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const edamame = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const gommaWakame = '/images/products/gomma-wakame.jpeghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const riso = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const miso = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const dolci = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const dolce = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const asahi = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

const cocacola = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';
const telimone = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxxmKdBp9uSRnj0RKrHbWiLKD8CR2HIh33q-C0fBhjs2ZnlGiayu53pnuHIex5pUAC88&usqp=CAU';

for (var i = 0; i < 500; i++) {
  products.push({ group: 'La via dei colori', type: 'main', price: 10.00, name: 'Pink', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img1 });
  products.push({ group: 'La via dei colori', type: 'main', price: 10.00, name: 'Yellow',about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img2 });
  products.push({ group: 'Ispirazioni peruviane', type: 'main', price: 10.00, about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',name: 'Ceviche di ricciola', description: '6 pezzi', img: img5 });
  products.push({ group: 'Nigiri', type: 'main', price: 10.00, name: 'Nigiri',about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img3 });
  products.push({ group: 'Ispirazioni italiane', type: 'main', price: 10.00, name: 'Ispirazioni Italiane', about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',description: '6 pezzi', img: img6 });
  products.push({ group: 'Uramaki', type: 'main', price: 10.00, name: 'Uramaki',about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img7 });
  products.push({ group: 'Dolci', type: 'main', price: 10.00, name: 'Dolce',about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img8 });
  products.push({ group: 'Bevande', type: 'main', price: 10.00, name: 'Asahi',about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description: '6 pezzi', img: img9 });
  products.push({ 
    group: 'Mosaico', 
    type: 'main', 
    price: 24.00, 
    name: 'Mosaico susgu', 
    about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    description: '16 pezzi',
    components:[
      {name:'SALMONE',number:0},
      {name:'TONNO',number:0},
      {name:'BRANZINO',number:0},
      {name:'MANGO',number:0},
      {name:'AVOCADO',number:0},
      {name:'CETRIOLO',number:0},
      {name:'GAMBERO',number:0},
      {name:'CAPASANTA',number:0}
    ], 
    img: img10 
  });
}

for (var i = 0; i < 10000; i++) {
  products.push({ group: 'Ti piacerebbe un contorno?', type:'add', price: 2.00, name: 'Edamame', description: '6 pezzi',  img: edamame });

  products.push({ group: 'Ti piacerebbe un contorno?', type:'add', price: 2.50, name: 'Gomma Wakame', description: '6 pezzi',  img: gommaWakame });

  products.push({ group: 'Ti piacerebbe un contorno?', type:'add', price: 2.00, name: 'Riso', description: '6 pezzi',  img: riso });
  products.push({ group: 'Ti piacerebbe un contorno?', type:'add', price: 2.00, name: 'Zuppa di Miso', description: '6 pezzi',  img: miso });

  products.push({ group: 'Desideri un dolce?', type:'add', price: 2.00, name: 'Dolce', description: '6 pezzi',  img: dolci });

  products.push({ group: 'Desideri un dolce?', type:'add', price: 2.00, name: 'Dolce Salato', description: '6 pezzi',  img: dolce });


  products.push({ group: 'Qualcosa di fresco da bere?', type:'add', price: 2.00, name: 'Coca Cola', description: '6 pezzi',  img: cocacola });

  products.push({ group: 'Qualcosa di fresco da bere?', type:'add', price: 5.50, name: 'Te al limone', description: '6 pezzi',  img: telimone });

  products.push({ group: 'Qualcosa di fresco da bere?', type:'add', price: 2.00, name: 'Birra Asahi', description: '6 pezzi',  img: asahi });
}

for (var i = 0; i < products.length; i++){
  collection("products1").doc((100000+i)+uuidv4()+products[i].name).set(products[i])
}