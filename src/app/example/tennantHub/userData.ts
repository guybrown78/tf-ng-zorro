const userData = [
		{"sub":"2e80c354-1ead-49be-ff83-08d82fb697cf","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Aaron","lastName":"Walker","emailAddress":"aaron.walker@3t-transform.com","lastLogin":"2020-08-11T09:12:24.8945183+00:00","enabled":true,"enabledProducts":[]
		},
		{"sub":"d62b15c7-21ef-40e3-a4a4-08d7d9fd5239","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"AIS ","lastName":"Tester","emailAddress":"lauren.peters@aisgroup.co.uk","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"850320d9-06b9-4db6-edc7-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Becca","lastName":"Fells","emailAddress":"becca.fells@test.com","lastLogin":"2020-08-07T12:42:47.342839+00:00","enabled":true,"enabledProducts":[]},
		{"sub":"d3b5da0d-3f3e-4da4-ff81-08d82fb697cf","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Beth","lastName":"Millar","emailAddress":"beth.millar@3tenergygroup.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"ae6d7a77-ad45-4b66-31e5-08d80624771d","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Calen","lastName":"Whyte","emailAddress":"callan@neutronvr.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"f5edf384-a130-4979-8054-08d7d48a8166","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Callan","lastName":"White","emailAddress":"callan.white@neutronvr.com","lastLogin":"2020-08-28T08:53:46.5473085+00:00","enabled":true,"enabledProducts":[{"productId":"94bdf525-4c95-4322-9da7-4ea5908341ea","productName":"Learning Management"},{"productId":"38d94b20-192a-4024-a80a-ccabeeab58ed","productName":"Tenant Hub"}]},
		{"sub":"7c538c17-0c51-43cf-8981-08d7d64ce6c6","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Cdw","lastName":"w","emailAddress":"me@callanwhite.co.uk","lastLogin":"2020-08-27T17:30:56.8489012+00:00","enabled":true,"enabledProducts":[]},
		{"sub":"3e4a4c1d-6e5d-45bb-d4a5-08d80df9ca78","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Dave","lastName":"Oliver","emailAddress":"dave.oliver@3tenergygroup.com","lastLogin":"2020-08-06T08:44:43.5094204+00:00","enabled":true,"enabledProducts":[]},
		{"sub":"8973e147-241b-4e10-edcc-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"f","lastName":"1","emailAddress":"gary@f1f.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"1fec8625-22a5-49c0-edc9-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"f","lastName":"1,","emailAddress":"gary@ff.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"2bd279d5-4fb2-458c-edca-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"f","lastName":"2","emailAddress":"steve@ff1.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"0b3d4dbf-9cc8-4bc1-edc8-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"f","lastName":"2,","emailAddress":"steve@ff.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"6c4438c7-1d9f-418a-edc6-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"f","lastName":"f","emailAddress":"paul.simmons1neutronvr.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"7e5c6bcd-fad8-4701-edbb-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Guy","lastName":"Brown","emailAddress":"guy@digitalopolis.co.uk","lastLogin":null,"enabled":true,"enabledProducts":[{"productId":"38d94b20-192a-4024-a80a-ccabeeab58ed","productName":"Tenant Hub"}]},
		{"sub":"ee198eef-c6bf-433e-870d-08d8384b267d","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Heather","lastName":"Murphy","emailAddress":"Heather.Murphy@3t-transform.com","lastLogin":"2020-08-28T11:12:44.5196855+00:00","enabled":true,"enabledProducts":[{"productId":"94bdf525-4c95-4322-9da7-4ea5908341ea","productName":"Learning Management"}]},
		{"sub":"7d670dc4-be9e-4950-2a96-08d821838ee1","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Linsey","lastName":"Horberry","emailAddress":"linsey.horberry@3t-transform.com","lastLogin":"2020-08-28T09:54:10.1030358+00:00","enabled":true,"enabledProducts":[{"productId":"94bdf525-4c95-4322-9da7-4ea5908341ea","productName":"Learning Management"}]},
		{"sub":"51e24d1e-57f0-488e-ff82-08d82fb697cf","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Nathan","lastName":"Video","emailAddress":"nathan.video@neutronvr.com","lastLogin":null,"enabled":true,"enabledProducts":[]},
		{"sub":"74adfeae-f62e-4d9a-ef75-08d7d6d1b19c","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Paul","lastName":"Simmons","emailAddress":"paul.simmons@neutronvr.com","lastLogin":"2020-08-28T10:03:00.2951612+00:00","enabled":true,"enabledProducts":[]},
		{"sub":"9d24062e-8646-40d8-49d7-08d7f18b469d","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Rachael","lastName":"Peters","emailAddress":"rachael.peters@3tenergygroup.com","lastLogin":"2020-08-26T14:55:11.2757436+00:00","enabled":true,"enabledProducts":[{"productId":"e1d2feff-3c74-44c2-4394-08d832fc5183","productName":"Form Builder"}]},
		{"sub":"1380c99b-d50b-40f4-edb9-08d8273607a2","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Rob","lastName":"Dixon","emailAddress":"rob.dixon@neutronvr.com","lastLogin":"2020-08-27T08:23:04.0126159+00:00","enabled":true,"enabledProducts":[{"productId":"e1d2feff-3c74-44c2-4394-08d832fc5183","productName":"Form Builder"}]},
		{"sub":"e9d216c4-80d5-48ee-9576-9dc4fdb366b6","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Sean","lastName":"Johnson","emailAddress":"sean.johnson@neutronvr.com","lastLogin":"2020-08-19T08:50:03.8306922+00:00","enabled":true,"enabledProducts":[]},
		{"sub":"439d8a22-e2a1-476c-ef76-08d7d6d1b19c","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Simon","lastName":"Fells","emailAddress":"simon.fells@neutronvr.com","lastLogin":"2020-08-26T14:55:17.6880072+00:00","enabled":true,"enabledProducts":[{"productId":"94bdf525-4c95-4322-9da7-4ea5908341ea","productName":"Learning Management"},{"productId":"38d94b20-192a-4024-a80a-ccabeeab58ed","productName":"Tenant Hub"}]},{"sub":"b7d97b09-69b0-42f2-868b-08d82e17d110","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"test","lastName":"1","emailAddress":"test1@test.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"528015fa-a090-4533-868d-08d82e17d110","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"test","lastName":"2","emailAddress":"test2@test.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"81c58d11-eb7a-4748-868c-08d82e17d110","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"test","lastName":"3","emailAddress":"test3@test.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"a89fbd9f-9ed3-4fac-868e-08d82e17d110","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"test","lastName":"4","emailAddress":"test4@test.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"6209fc31-4680-4a09-cd54-08d81cf3f79d","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"test","lastName":"fells","emailAddress":"test@test.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"83322709-66da-4d6a-f6f6-08d811d4c75a","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"Test","lastName":"User","emailAddress":"test1@user.com","lastLogin":null,"enabled":true,"enabledProducts":[]},{"sub":"d2413ac0-dd74-44aa-870a-08d8384b267d","tenantId":"dec264db-2d49-4a34-9f16-43a78ce51b10","firstName":"user","lastName":"test","emailAddress":"useruser@user.com","lastLogin":null,"enabled":true,"enabledProducts":[]}
];


const productData = [
	{
		productId:"94bdf525-4c95-4322-9da7-4ea5908341ea",
		productName:"Learning Management"
	},
	{
		productId:"38d94b20-192a-4024-a80a-ccabeeab58ed",
		productName:"Tenant Hub"
	},
	{
		productId:"e1d2feff-3c74-44c2-4394-08d832fc5183",
		productName:"Form Builder"
	}
]

export { userData, productData }