$(document).ready(function() {
    $('#iniciar').click(function() {
        $('form').slideDown();
    })
})

$(document).ready(function() {
    const $inputDate = $('#data');

    $('form').submit(function(e){
        e.preventDefault();     

        const nomeAtividade = $('#tarefa').val();
        const li = $('<li></li>');
        const input = $('<input>', {type: 'checkbox', id: nomeAtividade, value: nomeAtividade});
        const label = $('<label></label>', {for: nomeAtividade, text: nomeAtividade});

        li.append(input, label);

        $('#lista-atividades').append(li);
        $('#tarefa').val('');
    });
 
    $inputDate.on('change', function() {
        const dataSelecionada = $inputDate.val();
        $('#menssagem-data').text(`Suas tarefas do dia ${dataSelecionada} é:`);
    });

    $('#btn-add').click(function() {
        $('#btn-reset').slideDown();
    })

    $('#btn-reset').click(function(){
        $('#btn-reset').slideUp();
    })

    $('#btn-reset').on('click', function(){

        $('#data').val(''); 
        $('#mensagem-data').empty(); 
        $('#lista-atividades').empty();
    });

});