import {firebase} from '../../config/firebase';


function getBlogs() {
    let blogsList = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('blogs')
            .orderBy('id')
            .get()
            .then(snapshot => { 
                snapshot.forEach(doc => {
                    blogsList.push(doc.data());
                });
                resolve(blogsList);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get blog list error', errorMessage);
            });
    });
};

function geBlogDetail(id) {
    let blogDetail = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('blogs')
            .where("id", "==", Number(id))      
            .get()
            .then(snapshot => { 
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        blogDetail.push(doc.data());
                    });
                    resolve(blogDetail[0])
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get blog detail error', errorMessage);
            });
    });
};

function getRestaurants() {
    let rstaurantList = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('restaurants')
            .orderBy('name')
            .get()
            .then(snapshot => { 
                snapshot.forEach(doc => {
                    rstaurantList.push(doc.data());
                });
                resolve(rstaurantList);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get getRestaurants list error', errorMessage);
            });
    });
};

function getRestaurantDetail(id) {
    let restaurantDetail = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('restaurants')
            .where("id", "==", Number(id))      
            .get()
            .then(snapshot => { 
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        restaurantDetail.push(doc.data());
                    });
                    resolve(restaurantDetail[0])
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get restaurant detail error', errorMessage);
            });
    });
};

function getMyActiveOrders() {
    const user_email = sessionStorage.getItem("user_email");
    let active_orders = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('active_orders')
            .where("email", "==", user_email)      
            .get()
            .then(snapshot => {
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        active_orders.push(doc.data());
                    });
                    resolve(active_orders)
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get my orders detail error', errorMessage);
            });
    });
};

function getMyCompletedOrders() {
    const user_email = sessionStorage.getItem("user_email");
    let completed_orders = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('completed_orders')
            .where("email", "==", user_email)      
            .get()
            .then(snapshot => {
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        completed_orders.push(doc.data());
                    });
                    resolve(completed_orders)
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get my orders detail error', errorMessage);
            });
    });
};

function getMyAccountInfo() {
    const user_uid = sessionStorage.getItem("user_uid");
    let accountInfo = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('users')
            .where("userId", "==", user_uid)      
            .get()
            .then(snapshot => { 
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        accountInfo.push(doc.data());
                    });
                    resolve(accountInfo[0])
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get my account detail error', errorMessage);
            });
    });
};

function getMyAddressInfo() {
    const user_uid = sessionStorage.getItem("user_uid");
    let my_address = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('address')
            .where("id", "==", user_uid)      
            .get()
            .then(snapshot => { 
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        my_address.push(doc.data());
                    });
                    resolve(my_address[0])
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get my address detail error', errorMessage);
            });
    });
};

function getProducts(type) {
    
    let products = [];
    return new Promise((resolve, reject) => {
        firebase
            .firestore()
            .collection('products')
            .where("type", "==", type) 
            .get()
            .then(snapshot => { 
                if(snapshot.empty) {
                    resolve(null)
                } else {
                    snapshot.forEach(doc => {
                        products.push(doc.data());
                    });
                    resolve(products)
                };
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log('get my products error', errorMessage);
            });
    });
};

function addProjectId() {
    firebase
        .firestore()
        .collection('products1') 
        .get()
        .then(snapshot => { 
            snapshot.docs.map((doc) => {
                firebase
                    .firestore()
                    .collection('products1')
                    .doc(doc.id)
                    .update({
                        product_id: doc.id
                    })
            })
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log('addProjectId error', errorMessage);
        });
}

function deliveryProduct(deploy) {
    return new Promise((resolve, reject) => {       
        firebase
            .firestore()
            .collection('active_orders')
            .doc(deploy.order_num)
            .set(deploy)
            .then(()=> {
                resolve("success upload")
            }).catch((error) => {
                var errorMessage = error.message;
                reject(errorMessage);
                console.log('upload product error', errorMessage);
            });
    });
};

export {
    getBlogs,
    geBlogDetail,
    getRestaurants,
    getRestaurantDetail,
    getMyActiveOrders,
    getMyCompletedOrders,
    getMyAccountInfo,
    getMyAddressInfo,
    getProducts,
    addProjectId,
    deliveryProduct
};