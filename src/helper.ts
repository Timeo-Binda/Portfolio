export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Paris'
  }

  const formatter = new Intl.DateTimeFormat('fr-FR', options)
  const formattedDate = formatter.format(date)

  return formattedDate
}
