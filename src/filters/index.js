import moment from 'moment'

export default {
  moment_yyyy_mm_dd(value) {
    if (!value) return ''
    return `${moment(new Date(value)).format('YYYY/MM/DD')}`
  }
}
