import superagent from "superagent"
import { registerUser, emailOnly } from "../testInfo/users";


describe("REGISRATION", () => {
    it("1. REGISTER - SUCCESSFUL: POST", async () => {
        const result = await superagent.post("https://reqres.in/api/register")
        .send(registerUser)
        .set('Content-Type','application/json');
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("id");
        expect(result.body).toHaveProperty("token");
        
    });
    
    it("2.REGISTER - UNSUCCESSFUL: POST ", async () => {
        const result = await superagent.post("https://reqres.in/api/register")
        .send(emailOnly)
        .set('Content-Type','application/json')
        .catch(reason => reason);
        expect(result.status).toBe(400);
    });
});