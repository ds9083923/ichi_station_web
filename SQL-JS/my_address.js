var my_address = [];
 
my_address.push({
    id: "vfyrefWma3gWBfBUtIkguuPnKrr1",
    address1: 'Via Filippo Turati, 4',
    postalCode: '20141',
    floor: 'Interno 4',
    intercom: 'Rossi - Rianchi',
    address2: 'Casa',
    riders: ''
    
});

for (var i =0;i<my_address.length;i++){
    collection("address").doc("vfyrefWma3gWBfBUtIkguuPnKrr1").set(my_address[i]);
}