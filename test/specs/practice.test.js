
import assert from 'node:assert/strict';
import allure from '@wdio/allure-reporter';

describe('Wikipedia Test Suite', () => {

    it('should open Wikipedia successfully', async () => {

        // Allure metadata
        allure.addEpic('Website Automation');
        allure.addFeature('Wikipedia Homepage');
        allure.addStory('Open Wikipedia');
        allure.addSeverity('normal');
        allure.addOwner('Shakil');
        allure.addTag('smoke');
        allure.addDescription(
            'Verify that Wikipedia homepage opens successfully.'
        );

        // Step 1: Open website
        await allure.step('Open Wikipedia', async () => {
            await browser.url('https://www.wikipedia.org/');
        });

        // Step 2: Verify page title
        const title = await browser.getTitle();

        await allure.step('Verify page title', async () => {
            assert.ok(title.includes('Wikipedia'));
        });

        // Step 3: Capture screenshot
        await allure.step('Capture screenshot', async () => {
            await browser.takeScreenshot();
        });

        // Step 4: Attach text information
        allure.addAttachment(
            'Page Title',
            title,
            'text/plain'
        );

        // Step 5: Attach JSON information
        const testInfo = {
            website: 'Wikipedia',
            browser: browser.capabilities.browserName,
            title: title,
            result: 'Passed'
        };

        allure.addAttachment(
            'Test Information',
            JSON.stringify(testInfo, null, 2),
            'application/json'
        );

        // Step 6: Attach browser information
        allure.addAttachment(
            'Browser Information',
            JSON.stringify(browser.capabilities, null, 2),
            'application/json'
        );

    });

    it('should fail an assertion', async () => {
        assert.equal(10, 20);
    });

    it('should produce a broken result', async () => {
        throw new Error('Unexpected application error');
    });

    it.skip('should be skipped', async () => {
        assert.equal(10, 10);
    });

});
