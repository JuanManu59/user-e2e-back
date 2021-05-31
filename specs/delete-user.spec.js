const axios = require('axios');
const { expect } = require('chai');

const path = 'https://users-crud-user.herokuapp.com/api/latest/users';

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

let response;

describe("Given a created user", () => {
    before(async()=>{
        userCreated = await axios.post(path, user);
    });

    describe("When user delete a user", () =>{
        before(async () =>{
            oldListUsers = await axios.get(path);
            response = await axios.delete(`${path}/${user._id}`);
            newListUsers = await axios.get(path);
        });

        it("Should return OK satus code", () =>{
            expect(response.status).eql(200);
        });

        it("When a book is deleted the list decreases by one", () =>{
            expect(newListUsers.data.length).eql(oldListUsers.data.length-1);
        });

    })
})