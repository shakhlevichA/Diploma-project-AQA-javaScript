import superagent from "superagent"
import { loginUser, emailOnly } from "../testInfo/users";


describe("LOGIN", () => {
    it("1. LOGIN - SUCCESSFUL", async () => {
        const result = await superagent.post("https://reqres.in/api/login")
        .send(loginUser)
        .set('Content-Type','application/json');
        expect(result.status).toBe(200);
        console.log(result.body);
        
        expect(result.body).toHaveProperty('token')
        expect(result.body.token).toHaveLength(17)
    
    });

    it("2. LOGIN - UNSUCCESSFUL ", async () => {
        const result = await superagent.post("https://reqres.in/api/login")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });
});