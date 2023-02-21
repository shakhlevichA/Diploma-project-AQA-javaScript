import superagent from "superagent"

describe("RESOURSE", () => {

     it("1. LIST RESOURSE: GET.", async () => {
        const result = await superagent.get("https://reqres.in/api/unknown");
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty("page");
        expect(result.body).toHaveProperty("per_page");
        expect(result.body).toHaveProperty("total");
        expect(result.body).toHaveProperty("total_pages");
        expect(result.body).toHaveProperty("data");
    });


    it("2. SINGER RESOURSE: GET", async () => {
        const result = await superagent.get("https://reqres.in/api/unknown/2");
        const resObj = JSON.parse(result.text);
        expect(resObj.data.id).toBe(2);
        expect(resObj.data.name).toBe("fuchsia rose");
        expect(resObj.data.year).toBe(2001);
    });

   

    it("3. SINGLE RESOURCE NOT FOUND ", async () => {
        const result = await superagent.get("https://reqres.in/api/unknown/23")
        .catch(reason => reason);
        expect(result.status).toBe(404);
    });
});