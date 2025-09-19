// test file
import { test, expect } from "../../Utilities/HybridApproach.js";

test("Hybrid Login Test", async ({ pom }) => {
  await pom.LoginPageMethods.gotoPage();
  await pom.LoginPageMethods.login("standard_user", "secret_sauce");
  await pom.LoginPageMethods.Moonch();
  await expect(pom.HomePageMethods.homePageTitle()).toHaveText("Products");
});
