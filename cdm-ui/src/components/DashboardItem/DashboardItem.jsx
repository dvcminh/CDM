import './DashboardItem.css'
import { useState } from 'react';

function DashboardItem({ data, payment_method }){
    return(
        <div className='dashboard'>
            <div className="dashboard__item">
                {payment_method === data.article && <div class="w-3 h-3 bg-green-400 rounded-full m-1"></div>}
                {data.img}
                <p className='dashboard__item-article'>{data.article}</p>
                <p className='dashboard__item-content'>{data.content}</p>
                {data.button}
             </div>
        </div>
    )
}

export default DashboardItem;