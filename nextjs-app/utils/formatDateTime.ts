const formatDateTime = (date: Date):string =>
  new Date(date).toLocaleString('ru-RU')

export default formatDateTime
