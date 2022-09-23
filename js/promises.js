 function lastCommit(username) {
        fetch('https://api.github.com/users/' + username + '/events/', {headers: {'Authorization': `token ${GITHUB_TOKEN}`}}).then(resp => resp.json()).then(data => {
                    const commits = data.filter(event => event.type === 'Push Event') })
                    console.log(`${username} ${commits[0].created_at}`)                        

                }
               



// fetch('https://api.github.com/user}', { 
//                  headers: {
//                       'Authorization' : 'token GITHUB_TOKEN'
//                   }}).then(resp => resp.json())
//                   .then(data => (console.log(data)))
                    




















