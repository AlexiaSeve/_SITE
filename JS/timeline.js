const dates = [
    {
        name: 'Barcelone',
        date: new Date('2015-02')
    },
    {
        name: 'Marseille',
        date: new Date('2016-08')
    },
    {
        name: 'Bordeaux',
        date: new Date('2018-04')
    },
    {
        name: 'Copenhague',
        date: new Date('2018-06')
    },
    {
        name: 'Göteborg',
        date: new Date('2018-07')
    },
    {
        name: 'Berlin',
        date: new Date('2019-02')
    },
    // {
    //     name: 'Copenhague',
    //     date: new Date('2016-01-15')
    // },
    // {
    //     name: 'Copenhague',
    //     date: new Date('2016-11')
    // },
    // {
    //     name: 'Copenhague',
    //     date: new Date('2017-05')
    // },
    // {
    //     name: 'Copenhague',
    //     date: new Date('2017-07')
    // },
]

const limits = {
    min: new Date('2015'),
    max: new Date('2020')
}

const years = limits.max.getFullYear() - limits.min.getFullYear()

const timelineElement = document.querySelector('.timeline')
const timelineLineElement = document.querySelector('.timeline .line')
const timelineSize = timelineElement.getBoundingClientRect()

const isMobile = window.innerWidth < 800

const max = isMobile ? timelineSize.height - 220 : timelineSize.width - 200

const markers = []

const direction = isMobile ? 'top' : 'left'

function bindImagesToDate() {
    [...document.querySelectorAll('.containerPhoto .photo')].forEach((photo, index) => dates[index].element = photo)
}

function observeScroll() {
    for (const [index, date] of Object.entries(dates)) {
        const condition = isMobile
            ? (date.element?.getBoundingClientRect().y <= 120)
            : (date.element?.getBoundingClientRect().x <= 60)
        
        if (condition) {
            // dates.forEach(date => date.element?.classList.remove('overlay'))
            // date.element?.classList.add('overlay')
            markers.forEach(marker => marker.classList.remove('active'))
            markers[index].classList.add('active')
        }
    }
}



function init() {

    bindImagesToDate()

    // TODO: empty old labels
    for (let i = 0; i <= years; i++) {
        const dateLabel = document.createElement('div')
        dateLabel.classList.add('date-label')
        
        const dateText = document.createElement('span')
        dateText.textContent = limits.min.getFullYear() + i
    
        dateLabel.appendChild(dateText)
    
        dateLabel.style[direction] = `${ max *i/years + (isMobile ? 0 : 40) }px`;
        timelineElement.appendChild(dateLabel)
    }

    for (const date of dates) {
        const marker = document.createElement('div')
        marker.classList.add('marker')
        
        const markerText = document.createElement('span')
        markerText.textContent = date.name
    
        marker.appendChild(markerText)

        const yearsAfterLimit = (date.date - limits.min) / ( 1000 * 3600 * 24 * 365 )
    
        marker.style[direction] = `${ max * yearsAfterLimit/years + 40 }px`;
        timelineElement.appendChild(marker)

        markers.push(marker)
        marker.addEventListener('click', e => {
            !isMobile ? document.querySelector('.containerPhoto').scrollTo(
                date.element?.offsetLeft,
                0
            ) : document.querySelector(':root').scrollTo(
                0,
                date.element?.offsetTop
            )
        })
    }

    document.querySelector('.containerPhoto').addEventListener('scroll', observeScroll)
    if (isMobile) window.addEventListener('scroll', observeScroll)
    observeScroll()
}

init()

// window.addEventListener('resize', init)