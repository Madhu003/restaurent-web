$http({
                        method: "GET",
                        url: "category.json"
                    })
                    .then(response => {
                        response.data.forEach(item => {
                            $http({
                                method: "POST",
                                url: "http://localhost:8080/restaurent/category",
                                data: {
                                    name: item.name,
                                    shortName: item.short_name,
                                    specialInstruction: item.special_instructions
                                }
                            }).then(response => {
                                console.log(response)
                            });
                        });
                        console.log(response)
                    });