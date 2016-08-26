/**
 * Created by lilong d ezi on 2016/5/25.
 */
$(document).ready(function(){
    $(".imgsub").button();
});
$(document).ready(function(){
    var ok1=false;
    var ok2=false;
    var ok3=false;
    var ok4=false;
    $('input[name="username"]').focus(function(){
        $(this).next().text('请输入商品名称').removeClass('state1').addClass('state2');
    }).blur(function(){
        if( $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok1=true;
        }else{
            $(this).next().text('未输入商品名称').removeClass('state1').addClass('state3');
        }

    });


    $('input[name="describe"]').focus(function(){
        $(this).next().text('请输入商品描述').removeClass('state1').addClass('state2');
    }).blur(function(){
        if( $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok2=true;
        }else{
            $(this).next().text('未输入商品描述').removeClass('state1').addClass('state3');
        }

    });


    $('input[name="address"]').focus(function(){
        $(this).next().text('请输入您的地址').removeClass('state1').addClass('state2');
    }).blur(function(){
        if( $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok3=true;
        }else{
            $(this).next().text('未输入您的地址').removeClass('state1').addClass('state3');
        }

    });


    $('input[name="pay"]').focus(function(){
        $(this).next().text('请输入商品售价').removeClass('state1').addClass('state2');
    }).blur(function(){
        if( $(this).val()!=''){
            $(this).next().text('输入成功').removeClass('state1').addClass('state4');
            ok4=true;
        }else{
            $(this).next().text('未输入商品售价').removeClass('state1').addClass('state3');
        }

    });



    $('.imgsub').click(function(){
        if(ok1 && ok2 && ok3 && ok4){
            $('form').submit();
        }else{
            return false;
        }
    });
});
