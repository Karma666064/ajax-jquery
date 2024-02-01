// $.ajax({
//     type: 'POST',
//     url: 'server.php',
//     data: { test: "bien suur" },
//     dataType: 'JSON',
//     success: (data) => { console.log(data); },
//     error: (err) => { console.log(err); }
// });

// $('#text').hide();
// let color = 'red';
// color = color == 'red' ? '#222' : 'red';

// if (inputVal) alert(`Voici un texteuh : ${inputVal}`);
// else alert(`Le champ input-text n'est pas rempli`);

// $('#text1').css('color', 'blue');

// $('#text1').append('Hellow orld');
// $('#text1').prepend('Hellow orld');

// $('#text1').remove();
// $('#text1').empty();

$(() => {
    $('button').click(function () {
        const inputVal = $('.input-text').val();
        const inputType = $('.input-text').attr('type');
        
        
        // console.log($('.test.ui'));
    });
});