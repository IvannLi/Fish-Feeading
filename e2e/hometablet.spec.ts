import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 },
})

test.describe('Testing for home tablet', () => {
    test("Testing for button width", async ({ page }) => {
        await page.goto('http://localhost:3000/');

        const toFishesButton = page.locator('#toFishes');

        const checkingWidth = await toFishesButton.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('width');
        });

        console.log(checkingWidth);
        expect(checkingWidth).toBe('200px');
    })
})