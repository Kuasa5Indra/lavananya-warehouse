export function dateFormat(date: Date) {
    const newDate = new Date(date)
    const jktFormatter = new Intl.DateTimeFormat('id-ID', {
        timeZone: 'Asia/Jakarta',
        dateStyle: 'short',
        timeStyle: 'long'
    });

    return jktFormatter.format(newDate)
}
