const sliderCont = document.getElementById('slider-cont');
const slider = document.getElementById('slider');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

const sliderElems = document.querySelectorAll('.slider__ele');

const rootStyles = document.documentElement.style;

let sliderCount = 0;
let isInTransition = false;

const DIRECTION = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT'
};

const getTransformValue = () => 
    Number ( rootStyles.getPropertyValue( '--slide-transform' ).replace( 'px', '' ) );

const reorderSli = () => {
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'none');

    if ( sliderCount === sliderElems.length-1 ) {
        slider.appendChild(slider.firstElementChild);
        rootStyles.setProperty(
            '--slide-transform', 
            `${transformValue + sliderElems[sliderCount].scrollWidth}px`
        );
        sliderCount--;
    } else if ( sliderCount === 0 ) {
        slider.prepend(slider.lastElementChild);
        rootStyles.setProperty( 
            '--slide-transform', 
            `${transformValue - sliderElems[sliderCount].scrollWidth}px`
        );
        sliderCount++;
    }

    isInTransition = false;
};

const moveSli = direction => {
    if ( isInTransition ) return
    
    const transformValue = getTransformValue();
    rootStyles.setProperty('--transition', 'transform 1s');
    isInTransition = true;

    if ( direction === DIRECTION.LEFT ) {
        rootStyles.setProperty(
            '--slide-transform', 
            `${transformValue + sliderElems[sliderCount].scrollWidth}px`
            );
            sliderCount--;
    } else if ( direction === DIRECTION.RIGHT ) {
        rootStyles.setProperty( 
            '--slide-transform', 
            `${transformValue - sliderElems[sliderCount].scrollWidth}px`
            );
            sliderCount++;
    }
};

btnLeft.addEventListener('click', () => moveSli( DIRECTION.LEFT ));
btnRight.addEventListener('click', () => moveSli( DIRECTION.RIGHT ));

slider.addEventListener('transitionend', reorderSli);
reorderSli();