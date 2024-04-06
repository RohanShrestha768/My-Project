$(document).ready(function() {
    let display = '';

    // Click event handler for all buttons except the equals sign
    $('.calculator input[type="button"]').not('.equal , .operator').click(function() {
        let buttonPressed = $(this).val();
        console.log(buttonPressed);
        display += buttonPressed;
        $('.display input').val(display);
    });

    // Click event handler for the equals sign
    $('.equal').click(function() {
        display = eval(display);
        $('.display input').val(display);
    });

    // Click event handler for the AC (All Clear) button
    $('.operator[value="AC"]').click(function() {
        display = '';
        $('.display input').val('');
    });

    // Click event handler for the DEL (Delete) button
    $('.operator[value="DEL"]').click(function() {
        display = display.slice(0,-1);
        $('.display input').val(display);
    });
});
