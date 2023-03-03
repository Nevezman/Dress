 export class Accordion{
constructor(el) {
    // сохраняем details
    this.el = el
    // сохраняем summary
    this.summary = el.querySelector('summary')
    // сохраняем div с классом "content"
    this.content = el.querySelector('.content')
  
    // сохраняем объект анимации (для ее отмены при необходимости)
    this.animation = null
    // находится ли элемент в процессе закрытия?
    this.isClosing = false
    // находится ли элемент в процессе раскрытия?
    this.isExpanding = false
    // определяем клик по summary
    this.summary.addEventListener('click', (e) => this.onClick(e))
  }
  onClick(e) {
    // отменяем стандартное поведение браузера
    e.preventDefault()
    // добавляем к details свойство "overflow" со значением "hidden" во избежание переполнения контента
    this.el.style.overflow = 'hidden'
    // проверяем, находится ли элемент в процессе закрытия или уже закрыт
    if (this.isClosing || !this.el.open) {
      this.open()
      // проверяем, находится ли элемент в процессе открытия или уже открыт
    } else if (this.isExpanding || this.el.open) {
      this.shrink()
    }
  }
  shrink() {
    // фиксируем начало закрытия элемента
    this.isClosing = true
  
    // сохраняем текущую высоту элемента
    const startHeight = `${this.el.offsetHeight}px`
    // рассчитываем высоту summary
    const endHeight = `${this.summary.offsetHeight}px`
  
    // если анимация уже запущена
    if (this.animation) {
      // отменяем ее
      this.animation.cancel()
    }
  
    // запускаем WAAPI анимацию
    this.animation = this.el.animate({
      // устанавливаем ключевые кадры
      height: [startHeight, endHeight]
    }, {
      // если анимация кажется вам слишком быстрой или слишком медленной, то вы можете изменить значение данного свойства (duration - продолжительность)
      duration: 400,
      // вы также можете изменить значение этого свойства (easing (animation-timing-function) - временная функция)
      easing: 'ease-out'
    })
  
    // после завершения анимации вызываем onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false)
    // если анимация отменена, присваиваем переменной "isClosing" значение "false"
    this.animation.oncancel = () => this.isClosing = false
  }
  open() {
    // устанавливаем элементу фиксированную высоту
    this.el.style.height = `${this.el.offsetHeight}px`
    // добавляем details атрибут "open"
    this.el.open = true
    // ожидаем следующего кадра для вызова функции "expand"
    requestAnimationFrame(() => this.expand())
  }
  expand() {
    // фиксируем начало раскрытия элемента
    this.isExpanding = true
    // получаем фиксированную высоту элемента
    const startHeight = `${this.el.offsetHeight}px`
    // рассчитываем высоту открытого элемента (высота summary + высота содержимого)
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`
  
    // если анимация уже запущена
    if (this.animation) {
      // отменяем ее
      this.animation.cancel()
    }
  
    // запускаем WAAPI анимацию
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    })
  
    this.animation.onfinish = () => this.onAnimationFinish(true)
    this.animation.oncancel = () => this.isClosing = false
  }
  onAnimationFinish(open) {
    // устанавливаем значение атрибута "open"
    this.el.open = open
    // удаляем переменную, хранящую анимацию
    this.animation = null
    // сбрасываем значения
    this.isClosing = false
    this.isExpanding = false
    // удаляем overflow и фиксированную высоту
    this.el.style.height = this.el.style.overflow = ''
  }
}

  