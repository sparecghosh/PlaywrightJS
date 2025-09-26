import { test, expect } from '@playwright/test';

test("My First API Test", async ({ request }) => {

    const response = await request.get("https://jsonplaceholder.typicode.com/users");
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
})

test("Single user verification", async ({ request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/users/1");
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.id).toBe(1);
    expect(responseBody.name).toBe("Leanne Graham");
});

test("Post request", async ({ request }) => {
    const payload = {
        name: "Kishore QA",
        job: "Technical Consultant"
    }

    const response = await request.post("https://reqres.in/api/users", {
        data: payload, headers: { "x-api-key": "reqres-free-v1" } // Passing API key
    });
    const responseBody = response.json();
    console.log(await responseBody);
    expect(response.status()).toBe(201);

    expect((await responseBody).name).toBe(payload.name);
    expect((await responseBody).job).toBe(payload.job);
});