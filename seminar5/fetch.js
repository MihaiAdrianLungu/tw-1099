const getGitHubProfile = (username) => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

const getGitHubProfile2 = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getGitHubProfile2('MihaiAdrianLungu');