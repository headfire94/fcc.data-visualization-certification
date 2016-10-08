import 'c3/c3.css';
import './styles/main.scss';
import c3 from 'c3/c3.js';
import * as d3 from "d3";
import {data} from './data';
import _ from 'lodash';

/**
 * получаем массив значений
 */
let dataValues = _.map(data.data, (elem, index, array)=> {
    return elem[1];
});

let dataKeys = _.map(data.data, (elem, index, array)=> {
    return elem[0];
});


let chart = c3.generate({
    bindto: '#chart',
    pattern: ['#444', '#fff'],
    zoom: {
        enabled: true,
        rescale: true,
    },
    subchart: {
        show: true
    },
    data: {
        x: 'x',
        columns: [
            _.concat(['x'], dataKeys),
            _.concat(['data1'], dataValues)
        ],
        colors: {
            data1: '#6A9C69',
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                count: 100,
                format: '%Y'
            }
        },
        y: {
            label: 'Gross Domestic Product, USA'
        }
    },
    tooltip: {
        format: {
            name: function (name, ratio, id, index) {
                return '';
            },
            title: function (d) {
                var formatTime = d3.timeFormat("%B, %Y");
                return formatTime(d);
            },
            value: function (value, ratio, id) {
                return '$' + value + ' Billion';
            }
        }
    }
});