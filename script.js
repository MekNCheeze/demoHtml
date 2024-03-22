function changeTea(){
        var tea = document.getElementById('tea').value;
        var tea = String(tea).toLowerCase();
        const mytea = tea.replace(/\s/g, '');
        const image = document.getElementById("teapot");
        if (mytea == 'blacktea' || mytea == 'black'){
            image.src = "images/Black.png";
        }
        else if (mytea == 'jasminetea' ||mytea == 'jasmine'){
            image.src = "images/Jasmine.png";
        }
        else if (mytea == 'cherry-blossomtea' || mytea == 'cherry-blossom'){
            image.src = "images/Cherry_Blossom.png";
        }
        else if (mytea == 'purpletea' || mytea == 'purple'){
            image.src = "images/Purple.png";
        }
        else{
            image.src = "images/Plain.png"
        }
    }