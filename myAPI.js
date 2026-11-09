let challengeList= document.getElementById('challenges');

fetch("https://codecyprus.org/th/api/list")
    .then(response => response.json()) //Parse JSON text to JavaScript object
    .then(jsonObject => {
        console.log(jsonObject); //TODO - Success, do something with the data.

        const treasureHuntsArray = jsonObject.treasureHunts;

        for(let i = 0; i < treasureHuntsArray.length; i++) {

            let listItem = document.createElement("li");
            listItem.innerHTML = treasureHuntsArray[i].name;

            challengeList.appendChild(listItem);
        }

    });


