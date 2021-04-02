import React from "react";
import "./MyOrders.scss";
import Helper from '../../../utils/Helper';
import { getMyActiveOrders, getMyCompletedOrders } from '../../../store/actions/coreActions';
import _ from 'lodash'

const CompletedOrders = [
    {id: 1, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    {id: 2, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    {id: 3, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    {id: 4, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    {id: 5, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
    {id: 6, order_num: "Ordine # 18154", order_date: "25 Ottobre 2020", price: "$52.50" },
];

export default class MyOrders extends React.Component {

    constructor() {
        super();
        this.state = {
            active_orders: null,    
            completed_orders: null,    
        };        
    };

    componentDidMount(){
        Helper.showSpinner();    
        getMyActiveOrders().then(res => {
            Helper.hideSpinner();
            console.log('get my orders res: ', res);
            this.setState({active_orders: res});
            
            getMyCompletedOrders().then(res => {
                Helper.hideSpinner();
                console.log('get my completed orders res: ', res);
                this.setState({completed_orders: res}); 
            })
            .catch(err => {
                Helper.hideSpinner();
                console.log("get my completed error:", err);
            });
        })
        .catch(err => {
            Helper.hideSpinner();
            console.log("get my orders error:", err);
        });
    };


    render() {
        const { active_orders, completed_orders } = this.state;        
        return (
            <div className="orders-component">
                <div className="orders-container">                    
                    <div className="main-row">
                        <div className="active-order-area">                            
                            <h2>Ordini attivi</h2>
                            {active_orders && !_.isEmpty(active_orders)  ? 
                                active_orders.map((item, index)=> (
                                    <div className="row item-area" key={index}>
                                        <div className="col-lg-5 left-area">
                                            <div className="order-title">{item.order_num}</div>
                                            <p>{item.order_date}</p>
                                        </div>
                                        <div className="col-lg-7 right-area">
                                            <p>{`$${item.price}`}</p>
                                            <div className="view-btn">VISUALIZZA</div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div>doesn't exsit active orders</div>
                            }
                        </div>

                        <div className="completed-order-area">
                            <h2>Ordini completati</h2>
                            {completed_orders && !_.isEmpty(completed_orders) ?
                                completed_orders.map((item, index)=> (
                                    <div className="row item-area" key={index}>
                                        <div className="col-lg-5 left-area">
                                            <div className="order-title">{item.order_num}</div>
                                            <p>{item.order_date}</p>
                                        </div>
                                        <div className="col-lg-7 right-area">
                                            <p>{item.price}</p>
                                            <div className="view-btn">VISUALIZZA</div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div>doesn't exsit completed orders</div>
                            }
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }
}
