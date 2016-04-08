/**
 * Created by Nina on 06.04.16.
 */

$('input[type="range"]').on('input', function () {
    var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
    console.log(this.min);
    $(this).css('background', '-webkit-linear-gradient(left, #ff7d00 0%, #fec389 ' + percent + '%, #e9e9e9 ' + percent + '%)');
});
