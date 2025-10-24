import React from 'react';

const ReadyCard = ({order}) => {
    return (
        <div style={{
        background: "linear-gradient(#ffffff80, #FCB700)",
      }} className='shadow p-5 border rounded-xl border-amber-400 '>

            <h2 className='text-2xl font-bold'>Receive Please</h2>
            <h2 className='text-xl font-bold'>{order.order_title}</h2>
            <p className='text-semibold'>Table No : {order.table_no}</p>
            <p className='text-semibold'>Order Id : {order.waiterId}</p>
            <p className='text-semibold'>Cooked At : {order.cookedAt}</p>
        </div>
    );
};

export default ReadyCard;