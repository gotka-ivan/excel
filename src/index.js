import './module.js';
import './scss/index.scss';
import {Excel} from './components/excel/Excel.js'
import { Header } from './components/header/Header.js';
import { Toolbar } from './components/toolbar/Toolbar.js';
import { Table } from './components/table/Table.js';
import { Formula } from './components/formula/Formula.js';

const excel = new Excel('#app', {
    components:[
        Header,
        Toolbar,
        Table,
        Formula
    ]
})

excel.render()
