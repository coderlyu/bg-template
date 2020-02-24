const firstName = ['刘', '王', '张', '李', '赵']
const lastName = ['秀', '娟', '英', '华', '慧', '巧', '美', '娜', '静', '淑', '惠', '珠', '翠', '雅', '芝', '玉', '萍', '红', '娥', '玲', '芬', '芳', '燕', '彩', '春', '菊', '兰', '凤', '洁']
const Year = ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013']
export function getName () {
  let name = ''
  const first = firstName[Math.floor(Math.random() * 5)]
  name += first
  const index = Math.floor(Math.random() * 2) + 1
  for (let i = 0; i < index; i++) {
    const last = lastName[Math.floor(Math.random() * 29)]
    name += last
  }
  return name
}

export function getTime () {
  const year = Year[Math.floor(Math.random() * 8)]
  let mouth = Math.floor(Math.random() * 12) + 1
  let day = Math.floor(Math.random() * 31)
  let h = Math.floor(Math.random() * 24)
  let m = Math.floor(Math.random() * 60)
  let s = Math.floor(Math.random() * 60)
  mouth = mouth < 10 ? '0' + mouth : mouth
  day = day < 10 ? '0' + day : day
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  return year + '-' + mouth + '-' + day + ' ' + h + ':' + m + ':' + s
}
