import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';


// 마운트
const mount = ( el ) => {

    const app = createApp( Dashboard );
    app.mount( el );

}

console.log('process.env.NODE_ENV= ' + process.env.NODE_ENV );
// 웹팩 테스트
if ( process.env.NODE_ENV === 'production' ) {

    const devRoot = document.querySelector('#dashboard-dev-root');

    if ( devRoot ) {
        mount( devRoot );
    }

}


// 개발팀 ID요소
if ( process.env.NODE_ENV === 'development' ) {

    const devRoot = document.querySelector('#dashboard-dev-root');

    if ( devRoot ) {
        mount( devRoot );
    }

}

// export
export { mount };