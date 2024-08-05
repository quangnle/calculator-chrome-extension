$(function(){
    chrome.storage.sync.get(['expr'], function(v){
        $('#expression').val(v.expr);
    })

    $('#btnCalculate').click(function(){
        const expr = $('#expression').val();
        const result = math.evaluate(expr);
        // format result with thousand separator
        $('#result').text(result.toLocaleString());
    });
});