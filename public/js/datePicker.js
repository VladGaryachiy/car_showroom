$(function () {
    // идентификатор элемента (например: #datetimepicker1), для которого необходимо инициализировать виджет Bootstrap DateTimePicker
    $('#datetimepicker1').datetimepicker({
        locale: 'ru'
    });
    $('#datetimepicker1').click(function () {
        console.log(22)
    })
});