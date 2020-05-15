const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];

for (const name of names) {
    let imageURL = 'https://cdn.abcotvs.com/dip/images/4599486_110118-wls-paws-fees-spoton-vid.jpg?w=800&r=16%3A9';
    let message = 'Petting dogs is incredibly beneficial for your neuropsychological health!';
    document.querySelector('.cards').innerHTML+=`
    <article>
        <div>
            <h2>${name}</h2>
            <img src="${imageURL}" />
            <p>${message}</p>
        </div>
    </article>
    `;
}    
// use a for / of loop to loop through each element
// of the names array and output a message to the screen:
// document.write("<p>Welcome, " + names[0] + "!</p>");
// document.write("<p>Welcome, " + names[1] + "!</p>");
// document.write("<p>Welcome, " + names[2] + "!</p>");

