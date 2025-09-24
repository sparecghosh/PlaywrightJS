import { test, expect } from '@playwright/test';

test("My First API Test", async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users?page=2");

    const responseBody = response.json();

    //console.log(await responseBody);    

    expect(response.status()).toBe(200);
})

test("Single user verification", async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/1", {
        //headers: { "x-api-key": "reqres-free-v1" }
    });
    const responseBody = response.json();
    console.log(await responseBody);

    // Assert user information

    expect(response.status()).toBe(200);
    expect((await responseBody).data.id).toBe(1);
    expect((await responseBody).data.first_name).toBe("George");
    expect((await responseBody).data.last_name).toBe("Bluth");
});

test("Post request", async ({ request }) => {
    const payload = {
        name: "Kishore QA",
        job: "Technical Consultant"
    }

    const response = await request.post("https://reqres.in/api/users", {
        //data: payload, headers: { "x-api-key": "reqres-free-v1" } // Passing API key
    });
    const responseBody = response.json();
    console.log(await responseBody);
    expect(response.status()).toBe(201);

    expect((await responseBody).name).toBe(payload.name);
    expect((await responseBody).job).toBe(payload.job);
});