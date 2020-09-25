import React, {Component} from "react";
import $ from "jquery";
import './belanja.css';


class Belanja extends Component {
    constructor(){
        super();
        this.state = {
            daftar : [
                {id: "1", barang: "Kentang"},
                {id: "2", barang: "Wortel"},
                {id: "3", barang: "Bawang"},
        ],
        id: "",
        barang: "",
        action: "",
        }
    }

    render(){
        return(
            <div className="card col-sm-5 mx-auto m-5">
                <div className="card-header bg-dark text-center text-light font-weight-bold">
                    <h3>Daftar Belanjaan
                    </h3>
                    <button className="btn btn-sm btn-info m-3" onClick={this.Add}
                data-toggle="modal" data-target="#modal">Tambah Data</button>
                    </div>
                <ul className="list-group">
                    {this.state.daftar.map((item,index) => {
                        return(
                            <li className="" key={index}>
                                <div class="card">

                                <table class="table ">
                                        <tr class="bg-secondary text-light">
                                            <th >ID: {item.id}</th>
                                        </tr>
                                    <tr>
                                            <td>{item.barang}</td>
                                </tr>
                                            <button className="btn btn-sm btn-success m-1" onClick={() => this.Edit(item)}
                                data-toggle="modal" data-target="#modal">Edit</button>
                                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>Hapus</button>

                                </table>
                                </div>

                            </li>
                        );
                    })}
                </ul>

                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-dark text-white">
                                <h5>Penambahan Item</h5>
                            </div>
                            <form onSubmit={this.SaveDaftar}>
                                <div className="modal-body">
                                    ID
                                    <input type="text" name="id" className="form-control" onChange={this.bind} value={this.state.id} />
                                    Barang
                                    <input type="text" name="barang" className="form-control" onChange={this.bind} value={this.state.barang} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }


    bind = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    SaveDaftar = (event) => {
        event.preventDefault();
        let temp = this.state.daftar;

        if (this.state.action === "insert") {
            temp.push({
                id: this.state.id,
                barang: this.state.barang
        });
        }else if (this.state.action === "update") {
            let index = temp.findIndex(item => item.id === this.state.id);
            temp[index].barang = this.state.barang;
        }

        this.setState({daftar: temp});

        $("#modal").modal('hide');
    }

    Add = () => {
        this.setState({
            id: "",
            barang: "",
            action: "insert"
        });
    }

    Edit = (item) => {
        this.setState({
            id: item.id,
            barang: item.barang,
            action: "update"
        });
    }

    Drop = (index) => {
        let temp = this.state.daftar;
        temp.splice(index,1);
        this.setState({daftar: temp});
    }
}

export default Belanja;