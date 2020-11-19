const dates = [
    {
        name: 'Copenhague',
        date: new Date('2015-02')
    },
    {
        name: 'Toto',
        date: new Date('2015-03-15')
    },
    {
        name: 'Copenhague',
        date: new Date('2015-04')
    },
    {
        name: 'Copenhague',
        date: new Date('2015-10')
    },
    {
        name: 'Copenhague',
        date: new Date('2016-01-15')
    },
    {
        name: 'Copenhague',
        date: new Date('2016-11')
    },
    {
        name: 'Copenhague',
        date: new Date('2017-05')
    },
    {
        name: 'Copenhague',
        date: new Date('2017-07')
    },
]

const limits = {
    min: new Date('2015'),
    max: new Date('2018')
}

const years = limits.max.getFullYear() - limits.min.getFullYear()

const timelineElement = document.querySelector('.timeline')
const timelineLineElement = document.querySelector('.timeline .line')
const timelineSize = timelineElement.getBoundingClientRect()

const maxWidth = timelineSize.width - 200

const markers = []

function bindImagesToDate() {
    [...document.querySelectorAll('.containerPhoto .photo')].forEach((photo, index) => dates[index].element = photo)
}

function observeScroll() {
    for (const [index, date] of Object.entries(dates)) {
        console.log('ouii')
        if (date.element?.getBoundingClientRect().x <= 60) {
            markers.forEach(marker => marker.classList.remove('active'))
            markers[index].classList.add('active')
        }
    }
}



function init() {

    // TODO: empty old labels
    for (let i = 0; i <= years; i++) {
        const dateLabel = document.createElement('div')
        dateLabel.classList.add('date-label')
        
        const dateText = document.createElement('span')
        dateText.textContent = limits.min.getFullYear() + i
    
        dateLabel.appendChild(dateText)
    
        dateLabel.style.left = `${ maxWidth *i/years + 40 }px`;
        timelineElement.appendChild(dateLabel)
    }

    for (const date of dates) {
        const marker = document.createElement('div')
        marker.classList.add('marker')
        
        const markerText = document.createElement('span')
        markerText.textContent = date.name
    
        marker.appendChild(markerText)

        const yearsAfterLimit = (date.date - limits.min) / ( 1000 * 3600 * 24 * 365 )
    
        marker.style.left = `${ maxWidth * yearsAfterLimit/years + 40 }px`;
        timelineElement.appendChild(marker)

        markers.push(marker)
    }

    bindImagesToDate()
    document.querySelector('.containerPhoto').addEventListener('scroll', observeScroll)
    observeScroll()
}

init()

window.addEventListener('resize', init)