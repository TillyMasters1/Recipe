function printDiv(divName) {
    var printContents = document.querySelectorAll('img').forEach(img => img.remove());
    var originalContents = document.body.innerHTML;
    printContents = document.getElementById(divName).innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}