var digits = [],
	tmp = '';

function del() {
    digits = [];
    filtered = [];
    temp = '';
    tmp = '';
}
function clear() {
    $("#answer").val('');
}

$("button").click(function() {
	var btn = $(this).text();
    var temp = '';
    switch (btn) {
        case '+':
            tmp = '';
        	digits.push('+');
            clear();
        	break;
        case '-':
            tmp = '';
        	digits.push('-');
            clear();
        	break;
        case 'x':
            tmp = '';
            digits.push('*');
            clear();
            break;
        case '÷':
            tmp = '';
        	digits.push('/');
            clear();
        	break;
        case 'AC':
            del();
            clear();
            break;
        case 'CE':
            del(),
            clear();
            break;
        case '=':
            $("#answer").val(eval(digits.join('').substring(0, 10)));
            break;
        default:
            tmp += btn;
            tmp = tmp.substring(0,10);
            digits.push(btn);
            $("#answer").val(tmp);
    }
});