import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 },
})

test.describe('Testing for home mobile', () => {
    test("Testing for image size on mobile", async ({ page }) => {
        await page.goto('http://localhost:3000/');

        const homeImage = page.locator('#homeImage');

        const checkingPadding = await homeImage.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('width');
        });

        console.log(checkingPadding);
        expect(checkingPadding).toBe('414px');
    })
})