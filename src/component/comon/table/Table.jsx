import axios from "axios";
import React, { useEffect, useState } from "react";

export const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState({});
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const getData = await axios({
      method: "get",
      url: "https://crud-omega-sooty.vercel.app/records",
      // data: {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // }
    });
    setTableData(getData.data);
  };

  const deleteRow = async (id) => {
    try {
      await axios({
        method: "post",
        url: "https://crud-omega-sooty.vercel.app/delete",
        data: {
          _id: id,
        },
      });
      getApi();
    } catch (e) {
      console.error(e);
    }
  };
  const editRow = async (obj) => {
    try {
      await axios({
        method: "put",
        url: "https://crud-omega-sooty.vercel.app/update",
        data: {
          ...obj,
        },
      });
      getApi();
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditData((values) => ({ ...values, [name]: value }));
  };

  const submitData = (e) => {
    editRow(editData);
    e.preventDefault();
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    {" "}
                    <img src={item.url} alt="loading.." width={50} />{" "}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => deleteRow(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setEditData(item)}
                    >
                      edit
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitData}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="title"
                    value={editData.title}
                    onChange={handleChange}
                  />
                  {/* <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Url
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="url"
                    // id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={editData.url}
                    onChange={handleChange}
                  />
                  {/* <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
