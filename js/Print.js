function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents.querySelectorAll('image').forEach(image => image.remove());

    window.print();

    document.body.innerHTML = originalContents;
}