import React, { use, useState } from 'react';
import State from './State';
import OrderCard from './OrderCard';
import CookingCard from './CookingCard';
import ReadyCard from './ReadyCard';
import { toast } from 'react-toastify';

    const Ordercontainer = ({orderPromise}) => {
    const data = use(orderPromise);
    // console.log(orderDataS);

    const [orderDataS , setOrderDataS] = useState(data);

    const [cookingItems, setCookingItems] = useState([]);
    
    const [readyItems, setReadyItems] = useState([]);

    const handleCompleteCook = (order) => {

        // add item for showing time on uI

        order.cookedAt = new Date().toLocaleTimeString();

        const newReadyItems = [...readyItems, order]
        setReadyItems(newReadyItems);

        // card remaining items
        const remaining = cookingItems.filter((item) => item.id !== order.id)
        setCookingItems(remaining);

        // order remaining item

        const orderRemaining = orderDataS.filter((item) => item.id !== order.id)
        setOrderDataS(orderRemaining);
    }

    const handleOrder = (itemC) => {
        

        const isExist = cookingItems.find((item)=> item.id == itemC.id );
        if(isExist) {
            toast.error('This Order is Already Processing In Kitchen')
            return;
        } {toast.success('Order Called')
            
        }
        const newCookingItems = [...cookingItems, itemC]
        setCookingItems(newCookingItems);
    }
    // console.log(cookingItems);


    return (
        <div>
            <State cookingTotal ={cookingItems.length} orderTotal ={orderDataS.length} currentReady ={readyItems.length}></State>

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className='col-span-1 lg:col-span-7'>
                    <h2 className='font-semibold'>Current Order</h2>

                    <div className='space-y-5'>
                        {
                            orderDataS.map(item => <OrderCard
                            handleOrder={handleOrder}
                             key={item.id}
                             order ={item}></OrderCard>)
                        }
                    </div>
                </div>
                <div className='lg:col-span-5 space-y-5'>
                    <h2 className='font-bold text-4xl'>Cooking Now</h2>
                    <div className='shadow p-10 space-y-5'>

            {/* ekhne cooking item use kora hocche bole amader cooking now card a ekta ekta kore card add hocche 
            karon amader cookingItems a ekta ekta array element add hoche dew  */}

                        {
                            cookingItems.map((order)=> <CookingCard
                            key={order.id} 
                            order={order} 
                            handleCompleteCook={handleCompleteCook}></CookingCard>)
                        }
                    </div>
                    <h2 className='font-bold text-4xl'>Order Ready</h2>
                    <div className='shadow p-10 space-y-5'>
                        {
                            readyItems.map((order) => <ReadyCard key={order.id} order ={order}></ReadyCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ordercontainer;