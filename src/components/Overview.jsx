import React from 'react';
import Daily from './Daily';


const Overview = ({item}) => {
    console.log(item)
    const currentDay = '30'
    return (
        <div className='border-b-2 pt-4'>
            <div className="relative flex justify-between ">
                    <div className="hidden w-24 py-3 md:block ">
                        <h2 className="text-xl font-medium text-gray-900">{item.day}</h2>
                        <h2 className="text-base font-medium text-gray-700 ml-5">{item.month}</h2>
                    </div>
                    <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                        <h2 className="text-base font-medium text-gray-900">{item.day}</h2>
                        <h2 className="text-base font-medium text-gray-700">{item.month}</h2>
                    </div>
                    <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                        <div>
                            <div
                                style={item.date===currentDay ? {background: '#3FB883'} : {background: 'gray'}}
                                className="flex items-center justify-center w-14 h-14 text-xl rounded-lg text-white font-bold">
                                {item.date}
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="relative flex-1  bg-white rounded mb-28 ">

                    </div>
                </div>
                {
                    (item.task).map((taskItem,i) => <Daily key={i} task={taskItem} />)
                }
        </div>
    );
};

export default Overview;