import './scss/index.scss';
import {Excel} from './components/Excel/Excel';
import {Header} from './components/Header/Header';
import {Toolbar} from './components/Toolbar/Toolbar';
import {Formula} from './components/Formula/Formula';
import {Table} from './components/Table/Table';


const excel = new Excel('#root', {
  components: [Header, Toolbar, Formula, Table],
} );

console.log('Excel', excel);

excel.render();
