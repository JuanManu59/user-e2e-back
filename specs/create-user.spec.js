const axios = require('axios');
const { expect } = require('chai');

let response;

const user = {
    "active": true,
    "firstname": "adminTest",
    "id_type": "CC - CedulaCiudadania",
    "lastname": "",
    "password": "adminTest",
    "photo": "",
    "username": "adminTest",
    "_id": "9999999"
};

const path = "https://users-crud-user.herokuapp.com/api/latest/users";

describe ("When the user wants to create an user", () => {
    before(async()=>{
        oldListUsers = await axios.get(path);
        response = await axios.post(path, user);
        newListUsers = await axios.get(path);
    });

    after(async ()=>{
        deleteUser = await axios.delete(`${path}/${user._id}`);
        if(deleteUser.status === 200){
        }else{
            console.log("An error occurred deleting the user");
        }
    });

    it("Then should return a created status code", () => {
        expect(response.status).eql(201);
    });

    it("Then should return a json as content type", () => {
        expect(response.config.headers['Content-Type']).to.contain('application/json');
    });

    it("When a book is added the list increases by one", ()=>{
        expect(newListUsers.data.length).eql(oldListUsers.data.length + 1);
    });

});