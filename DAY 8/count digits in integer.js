function count_digits(n) {
    numDigits = 0;
    integers = Math.abs(n);

    while (integers > 0) {
        integers = (integers - integers % 10) / 10;
        numDigits++;
    }
    return numDigits;
}
