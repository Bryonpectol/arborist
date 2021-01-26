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
    trees.join('|').toLowerCase().split('|');
    console.log(trees);
    listTrees();
}

document.querySelector('#anyTree').onclick = () => {
    let Prompt = prompt("What tree are you looking for?");

    switch(Prompt) {
        case 'oak' :
        case 'oak' :
            trees.filter(Trees => Trees = 'oak')
            listTrees();
        break;

    }

}

document.querySelector('#showName3').onclick = () => {
    
    function is3(num) {
        return num === trees[2]
    }

    trees.find(is3);

    console.log(trees.find(is3));

    let 

    listTrees();
}

document.querySelector('#showName4').onclick = () => {
    trees.sort();
    listTrees();
}