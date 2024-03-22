function changeTea(){
        var tea = document.getElementById('tea').value;
        var tea = String(tea).toLowerCase();
        const mytea = tea.toLowerCase();
        const image = document.getElementById("teapot");
        if (mytea == 'black tea' || mytea == 'black'){
            image.src = "images/Black.png";
        }
        else if (mytea == 'jasmine tea' ||mytea == 'jasmine'){
            image.src = "images/Jasmine.png";
        }
        else if (mytea == 'cherry-blossom tea' || mytea == 'cherry-blossom'){
            image.src = "images/Cherry_Blossom.png";
        }
        else if (mytea == 'purple tea' || mytea == 'purple'){
            image.src = "images/Purple.png";
        }
        else{
            image.src = "images/Plain.png"
        }
    }