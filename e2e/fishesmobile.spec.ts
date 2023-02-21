import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPhone XR'],
    viewport: { width: 414, height: 896 },
})

test.describe('Testing for fishes page on mobile', () => {
    test("Testing for filter container height on mobile", async ({ page }) => {
        await page.goto('http://localhost:3000/fishes/');

        const filterCont = page.locator('#filterCont');

        const checkingHeight = await filterCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue('height');
        });

        console.log(checkingHeight);
        expect(checkingHeight).toBe('1022px');
    })
})