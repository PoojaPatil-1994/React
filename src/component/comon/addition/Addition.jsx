import React, { useEffect } from 'react'
import { useState } from "react";
import axios, { Axios } from 'axios';

export default function Addition() {
    const [count, setCount] = useState(0);
    const [apiData, setApiData] = useState([]);
    // const [addApiData, setAddApiData] = useState([]);
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
    console.log(apiData);

    // const addApi = async  () => {
    //     const addData = await axios ({
    //         method: 'post',
    //         url: 'https://crud-omega-sooty.vercel.app//add' ,
    //     });
    //     setAddApiData(addData.data)
    // }

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

            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add New
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" name="" id="" placeholder='Tital' className=' form-control' />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="" id="" placeholder='Url' className=' form-control' />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success">Save </button>
                            <button type="button" class="btn btn-primary">Update </button>
                        </div>
                    </div>
                </div>
            </div>

            <table className='table table-bordered mt-3'>
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
                        apiData.map((item, index) => {
                            return (
                                <tr >
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.url}</td>
                                    <td>
                                    <button   type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                                    <button className='btn btn-danger ms-2' >Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div>
    )
}
