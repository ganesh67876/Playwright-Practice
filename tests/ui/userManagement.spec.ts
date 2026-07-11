import { Page, Locator } from '@playwright/test';

export class UserManagementPage {
    readonly page: Page;
    readonly createNewUserBtn: Locator;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly submitBtn: Locator;
    readonly updateBtn: Locator;
    readonly searchInput: Locator;
    readonly editBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createNewUserBtn = page.locator("//h6[contains(text(),'Create New User')]");
        this.usernameInput = page.locator("//input[contains(@id,'Username') or contains(@id, 'username')]");
        this.emailInput = page.locator("//input[contains(@id,'Email') or contains(@id, 'email')]");
        this.submitBtn = page.getByRole('button', { name: 'Create User' });
        this.updateBtn = page.getByRole('button', { name: /Update|Save/i });
        this.searchInput = page.getByPlaceholder('Search users...');
        this.editBtn = page.locator('button:has-text("Edit")').first();
    }

    async clickCreateNewUser() {
        await this.createNewUserBtn.click();
    }

    async fillUserDetails(username: string, email: string) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
    }

    async submitUser() {
        await this.submitBtn.click();
    }

    async clickEditUser(username: string) {
        // Search for the user to bring them to the top of the list
        await this.searchInput.fill(username);
        await this.page.waitForTimeout(1500); // Wait for the list to filter

        // Use { force: true } to bypass the loading overlay!
        await this.page.getByText(username).first().click({ force: true });

        // Click the Edit button in the profile section
        await this.editBtn.click();
    }

    async updateUsername(newUsername: string) {
        // Clear and fill the new username
        await this.usernameInput.fill(newUsername);
        await this.updateBtn.click();
    }
}
