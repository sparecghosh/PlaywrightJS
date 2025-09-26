import { test, expect } from '@playwright/test';
import { generateRandomData } from '../../Utilities/MacbookDataGenerator';
const laptopTemplate = require('../../Utilities/LaptopTemplate.json');

const BASE_URL = 'https://api.restful-api.dev/objects';

test.describe('RESTful API Parameterized Tests for MacBook Endpoint', () => {
  test('POST: Create MacBook Object with random data', async ({ request }) => {
  const body = generateRandomData(laptopTemplate);
    const response = await request.post(BASE_URL, {
      data: body,
    });
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.name).toBe(body.name);
    expect(responseBody.data.year).toBe(body.data.year);
    expect(responseBody.data.price).toBe(body.data.price);
    expect(responseBody.data["CPU model"]).toBe(body.data["CPU model"]);
    expect(responseBody.data["Hard disk size"]).toBe(body.data["Hard disk size"]);
  });

  test('GET: Retrieve all MacBook Objects', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBeTruthy();
  });

  test('PUT: Update MacBook Object with random data', async ({ request }) => {
    // First create an object
  const body = generateRandomData(laptopTemplate);
    const createResponse = await request.post(BASE_URL, {
      data: body,
    });
    expect(createResponse.ok()).toBeTruthy();
    const created = await createResponse.json();
    // Now update it
  const updateBody = generateRandomData(laptopTemplate);
    const updateResponse = await request.put(`${BASE_URL}/${created.id}`, {
      data: updateBody,
    });
    expect(updateResponse.ok()).toBeTruthy();
    const updated = await updateResponse.json();
    expect(updated.name).toBe(updateBody.name);
    expect(updated.data.year).toBe(updateBody.data.year);
    expect(updated.data.price).toBe(updateBody.data.price);
    expect(updated.data["CPU model"]).toBe(updateBody.data["CPU model"]);
    expect(updated.data["Hard disk size"]).toBe(updateBody.data["Hard disk size"]);
  });

  test('DELETE: Delete MacBook Object', async ({ request }) => {
    // First create an object
  const body = generateRandomData(laptopTemplate);
    const createResponse = await request.post(BASE_URL, {
      data: body,
    });
    expect(createResponse.ok()).toBeTruthy();
    const created = await createResponse.json();
    // Now delete it
    const deleteResponse = await request.delete(`${BASE_URL}/${created.id}`);
    expect(deleteResponse.ok()).toBeTruthy();
    const deleted = await deleteResponse.json();
  expect(deleted.message).toMatch(/has been deleted/i);
  });
});
