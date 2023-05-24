const Query = {
	Query: {
		ServerlessTestQuery: () =>
			"Hey THere! From the graph example deployed with serverless",
		HelloWorld: () => "Hello World!",
		DemoUser: () => ({
			id: "123",
			name: "Demo User",
			email: "test@test.com",
			username: "This is a username!",
		}),
		DemoUsers: () => {
			return [
				{
					id: "123",
					name: "Demo User",
					email: "test1@test.com",
					username: "TestUser2",
				},
				{
					id: "456",
					name: "Demo User 2",
					email: "test3@test.com",
					username: "TestUser3",
				},
			];
		},
	},
};

export { Query };
