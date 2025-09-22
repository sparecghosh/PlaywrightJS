// test file
import { test, expect } from "../../Utilities/HybridApproach.js";

test("Hybrid Login Test", async ({ MyContext }) => {
  await MyContext.NavigationHelper.gotoLoginPage();
  await MyContext.LoginPageMethods.login("standard_user", "secret_sauce");
  await MyContext.LoginPageMethods.Moonch();
    await MyContext.HomePageMethods.verifyHomePageLoaded();
});
