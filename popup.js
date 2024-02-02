$(function(){
    chrome.storage.sync.get(['expr'], function(v){
        $('#expression').val(v.expr);
    })

    $('#btnCalculate').click(function(){
        const expr = $('#expression').val();
        $('#result').text(math.evaluate(expr));
    });
});