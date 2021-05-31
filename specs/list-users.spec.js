const axios = require('axios');
const { expect } = require('chai');

let response;

describe ("When the user wants to list users", () => {
    before(async()=>{
        response = await axios.get('https://users-crud-user.herokuapp.com/api/latest/users');
    });

    it("Then it should return an OK status code", ()=>{
        expect(response.status).eql(200);
    });

    it("Then it should return users with id and username", ()=>{
        expect(response.data.length).to.be.greaterThan(0);

        user = response.data[0];
        expect(user).to.have.property("_id");
        expect(user).to.have.property("username");
    });
});