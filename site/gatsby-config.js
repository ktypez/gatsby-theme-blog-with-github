module.exports = {
    plugins: [{
        resolve: "gatsby-theme-blog-with-github",
        options: {
            // your github username - required
            username: "ktypez",
            
			// github public repository name that you will use as a CMS - required
            repositoryName: "gatsby-theme-blog-with-github",
            
            metaData: {
                // website name - required
                title: `BLOGS`,
                
				// cover letter - required
                description: `take notes`,

				// author name
                author: `max`, 

				// your github url for photo - required
                githubURL: `https://github.com/ktypez`, 
                social: [{
                        name: `twitter`,
                        url: `https://twitter.com/ktypez`,
                    },
                    {
                        name: `github`,
                        url: `https://github.com/ktypez`,
                    },
                ]
            }
        }
    }]
};
