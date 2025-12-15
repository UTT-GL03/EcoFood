const visit = async (page) => {
	await page.goto("results/city_1/product_1", {
		waitUntil: "networkidle",
	});
	await page.waitForTimeout(10000);
	await page.scrollToEnd();
	await page.waitForNetworkIdle();
	await page.waitForTimeout(7000);
};

module.exports = visit;
