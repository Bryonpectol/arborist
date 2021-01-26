// create an array with 4 trees

const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress'];
const errorElement = document.querySelector('#error');
const displayResults = document.querySelector('#displayResults');

// display the list of trees inside the div

const listTrees = () => {
    let treeList = "";

    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })

    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`;

};

listTrees();

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood');
    errorElement.textContent = "";
    listTrees();
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear');
    errorElement.textContent = "";
    listTrees();
}

document.querySelector('#remove_tree1').onclick = () => {
    if(trees.length > 0) {
        trees.shift();
        listTrees();
    } else {
        errorElement.textContent = "Hey person, you already removed all the trees...";
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if(trees.length > 0) {
        trees.splice(1,1);
        listTrees();
    } else {
        errorElement.textContent = "Hey person, you already removed all the trees...";
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if(trees.length > 0) {
        trees.pop();
        listTrees();
    } else {
        errorElement.textContent = "Hey person, you already removed all the trees...";
    }
}

document.querySelector('#sortTrees').onclick = () => {
    trees.sort();
    listTrees();
}

document.querySelector('#lowerTrees').onclick = () => {
    for (let i = 0; i < trees.length; i++) {
        trees[i] = trees[i].toLowerCase();
       }

    listTrees();
}

document.querySelector('#anyTree').onclick = () => {
    let Prompt = prompt("What tree do you want to add?");

    // switch(Prompt) {
    //     case 'oak' :
    //     case 'Oak' :
    //         alert("Oak");
    //     break;
    //     case 'pine' :
    //     case 'Pine' :
    //         alert("Pine");
    //     break;
    //     case 'aspen' :
    //     case 'Aspen' :
    //         alert("Aspen");
    //     break;
    //     case 'Bald Cypress' :
    //     case 'bald cypress' :
    //     case 'Bald cypress' :
    //     case 'bald Cypress' :
    //         alert("Bald Cypress");
    //     break;
    //     default :
    //         alert(`You don't have ${Prompt}.`)

    // }

    trees.push(Prompt);

    listTrees();

}

document.querySelector('#showName3').onclick = () => {
    
    function is3(num) {
        return num === trees[2]
    }

    trees.find(is3);

    console.log(trees.find(is3));

    let Is3Element = document.createElement("p");
    Is3Element.textContent = trees.find(is3);

    alert(trees.find(is3));

    listTrees();
}

document.querySelector('#showName4').onclick = () => {
    function is4(num4) {
        return num4 === trees[3]
    }

    trees.find(is4);

    if(trees.length >= 4) {

    errorElement.textContent = "";
    alert(trees.find(is4));
    

    } else {
        errorElement.textContent = "There is no 4th tree... Come on!";
    }

    listTrees();
}