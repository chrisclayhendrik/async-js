function testFunc () {
    console.log('a');

    setTimeout(function display () { console.log('b'); }, 0);

    console.log('c');
}

testFunc();

