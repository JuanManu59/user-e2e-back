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

const newUser = {
    "active": true,
    "firstname": "adminTestUpdate",
    "id_type": "CC - CedulaCiudadania",
    "lastname": "",
    "password": "adminTest",
    "photo": "",
    "username": "adminTestUpdate",
    "_id": "9999999"
};

const path = "https://users-crud-user.herokuapp.com/api/latest/users";

describe ("Given a created user", () => {
    before(async()=>{
        response = await axios.post(path, user);
    });

    after(async ()=>{
        deleteUser = await axios.delete(`${path}/${user._id}`);
        if(deleteUser.status === 200){
        }else{
            console.log("An error occurred deleting the user");
        }
    });

    describe('Then the user wants to update the user',() => {
        before(async() => {
            response = await axios.put(`${path}/${user._id}`, newUser);
        });

        it("Then the response status code should be 200", () => {
            expect(response.status).eql(200);
        })

    });


});