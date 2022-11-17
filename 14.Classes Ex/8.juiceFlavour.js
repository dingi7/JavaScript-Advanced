
function solve(array) {
    let initialMap = new Map();
    let outputMap = new Map();

    array.forEach(element => {
        let [fruit, quantity] = element.split(' => ');

        if (!initialMap.has(fruit)) {
            initialMap.set(fruit, 0);
        }
        initialMap.set(fruit, initialMap.get(fruit) + Number(quantity));

        while (initialMap.get(fruit) >= 1000) {
            initialMap.set(fruit, initialMap.get(fruit) - 1000);
            
            outputMap.set(fruit, (outputMap.get(fruit) || 0) + 1);
        }
    });
    
    for (let [key,value] of outputMap) {
        console.log(`${key} => ${value}`);
    }
}

// }
solve(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])



// Check if online property changes title style
document.body.innerHTML = `
<div id="holder"></div>
`;

let Contact = result;

let data = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    phone: '0888 123 456',
    email: 'i.ivanov@gmail.com'
};

let contact;
expect(() => contact = new Contact(data.firstName, data.lastName, data.phone, data.email), "Instance creation failed, make sure you have submitted a class").to.not.throw();
contact.online = true;
contact.render('holder');
expect($('#holder').text()).to.not.equal('', "Content wasn't appended to target, make sure you have correctly used the given ID 'holder'");

let element = $('#holder').find('article');
expect(element.length).to.equal(1, "<article> wasn't correctly generated");
vrfyElement(element, data);

function vrfyElement(element, data) {
    let title = element.find('.title');
    expect(title.hasClass('online')).to.equal(true, "Contact must be displayed as online");
}
