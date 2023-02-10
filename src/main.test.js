function add(a, b) {
    return a + b;
}

test('erwarten, dass 1 + 2 = 3 ist', () => {
    expect(add(1,2)).toBe(3);
})