import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';

export default function Addition() {
    const [count, setCount] = useState(0);
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        setCount(5)
        getApi()
    }, []);

    const getApi = async () => {
        const getData = await axios({
            method: 'get',
            url: 'https://crud-omega-sooty.vercel.app/records',
            // data: {
            //   firstName: 'Fred',
            //   lastName: 'Flintstone'
            // }
        });
        setApiData(getData.data)

    }
    console.log(apiData)


    return (
        <div>
            <div className="row my-4">
                <div className="col-3">
                    <input type="text" name="" id="" placeholder='num1' className=' form-control' />
                </div>
                <div className="col-3">
                    <input type="text" name="" id="" placeholder='num2' className=' form-control' />
                </div>
                <div className="col-2">
                    <button className='ms-3 btn btn-primary' onClick={() => setCount(10 + count)}>{count}</button>
                </div>
                <div className="col-3">
                    <input type="text" name="" id="" placeholder='result' className=' form-control' />
                </div>
            </div>

            <table className='table table-bordered'>
                <thead>
                    <tr >
                        <th>Sr No.</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Action</th>

                    </tr>

                </thead>
                <tbody>
                    
                        {
                            apiData.map((item , index) => {
                                return (
                                    <tr >
                                        <td>{index+1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.url}</td>
                                        <td><button className='btn btn-primary' onClick={()=>alert(item.title)}>click</button></td>
                                       
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>


        </div>
    )
}
