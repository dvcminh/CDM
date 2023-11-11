import './DashboardItem.css'

function DashboardItem({ data }){
    return(
        <div className='dashboard'>
            <div className="dashboard-item">
                {data.img}
                <p className='dashboard-item-article'>{data.article}</p>
                <p className='dashboard-item-content'>{data.content}</p>
                {data.button}
             </div>
        </div>
    )
}

export default DashboardItem;