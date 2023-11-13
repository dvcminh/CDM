import './DashboardItem.css'

function DashboardItem({ data }){
    return(
        <div className='dashboard'>
            <div className="dashboard__item">
                {data.img}
                <p className='dashboard__item-article'>{data.article}</p>
                <p className='dashboard__item-content'>{data.content}</p>
                {data.button}
             </div>
        </div>
    )
}

export default DashboardItem;