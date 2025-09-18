import LoginPageMethods from "../AppPages/Login/LoginMethods";  
import { test, expect } from '@playwright/test';

export default class PomManager {
    constructor(page) {
        this.page = page;
        this.LoginPageMethods = new LoginPageMethods(page);
    }
}