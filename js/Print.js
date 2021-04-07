function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML.querySelectorAll('image').forEach(image => image.remove());
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}