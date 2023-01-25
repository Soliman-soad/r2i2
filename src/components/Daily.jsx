import React from 'react';

const Daily = ({task}) => {
    return (
        <div>
              <div className="relative flex justify-between">
                    <div className="hidden w-24 py-3 md:block ">
                        <h2 className="text-base font-medium text-gray-400">{task.time}</h2>
                    </div>
                    <div className="absolute inline-block w-24 py-3 left-16 -top-12 md:hidden ">
                        <h2 className="text-base font-medium text-gray-400 ">{task.time}</h2>
                    </div>
                    <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                        <div>
                            <div
                                className={`flex border border-gray-400 items-center justify-center text-white text-lg w-10 h-10 rounded-full`}
                                style={{background: task.color}}
                                >
                                {task.icon}
                            </div>
                        </div>
                        <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="relative flex-1 mb-16 bg-white rounded md:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-1 -left-10">
                            <div
                                className="h-10 origin-top-right transform -rotate-45 bg-white drop-shadow-lg">
                            </div>
                        </div>
                        <div className="relative z-20">
                            <p className="mb-2 text-xl font-bold text-gray-600">{task.title}</p>
                            <p className="text-gray-700 dark:text-gray-500">
                                {task.name}
                            </p>
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default Daily;