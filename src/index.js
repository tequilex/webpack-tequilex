import * as $ from 'jquery'
import Post from './post'
import json from './assets/json'
import xml from './assets/data.xml'
import WebpackLogo from './assets/web.jpg'
import './styles/styles.css'
import './styles/file.less'
import './styles/file.scss'
import './babel'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

console.log('JSON:', json);
console.log('XML:', xml);
console.log('XML:', xml);
