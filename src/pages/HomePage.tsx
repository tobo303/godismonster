function HomePage() {

	const json = {"status":"fail","message":"Validation errors","data":{"customer_address":["The customer address field is required."],"order_items.0":["The 'item_total' field must be the sum of 'qty' multiplied by 'item_price'."],"order_items.1":["The value '1337' for field 'item_price' does not match product's price of '7'."]}}

	console.log(json.data);

	return (
		<>
			<h1>Home Page</h1>
		</>
	)
}

export default HomePage;