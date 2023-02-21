import superagent from "superagent"
import { createUser, updateUser } from "../testInfo/users";


describe("USERS", () => {

    it("1. LIST USERS: GET", async () => {
        const result = await superagent.get("https://reqres.in/api/users?page=2");
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("page");
        expect(result.body).toHaveProperty("per_page");
        expect(result.body).toHaveProperty("total");
        expect(result.body).toHaveProperty("total_pages");
        expect(result.body).toHaveProperty("data");
    });

    it("2. SINGER USER: GET", async () => {
        const result = await superagent.get("https://reqres.in/api/users/7");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.email).toBe("michael.lawson@reqres.in");
        expect(resObj.data.first_name).toBe( "Michael");
        expect(resObj.data.last_name).toBe("Lawson");
    });

    it("3. CREATE USER: POST", async () => {
        const result = await superagent.post("https://reqres.in/api/users")
        .send(createUser).set('Content-Type','application/json');
        const resObj = JSON.parse(result.text);       
        expect(result.status).toBe(201)
        expect(resObj.job).toEqual(createUser.job)
        expect(resObj.name).toEqual(createUser.name)
        
    });

     it("4. UPDATE USER: PUT", async () => {
         const result = await superagent.put("https://reqres.in/api/users/7")
        .send(updateUser).set('Content-Type','application/json');
        expect(result.status).toBe(200)
        expect(result.body).toEqual(updateUser)
       
        
    });

    it("5. DELETE USER: DELETE", async () => {
      const res = await superagent.delete("https://reqres.in/api/users/7")
      .set("Content-Type", "application/json");
      expect(res.status).toBe(204);
    
    });

    it("6. SINGER USER NOT FOUND: GET", async () => {
        const result = await superagent.get("https://reqres.in/api/users/23")
        .catch(reason => reason);
        expect(result.status).toBe(404);
              
    });

     it("7. DELAYED PESPONSE: GET", async () => {
        const result = await superagent.get("https://reqres.in/api/users?delay=3");
        const resObj = JSON.parse(result.text);
        expect(result.status).toBe(200)
        expect(result.body).toEqual(resObj)
        
    });
});
