import {Component} from 'react'
import './index.css'

class UrlLoader extends Component{
    render(){
        const {getDetails} = this.props
        const {title, link ,description} = getDetails
        return (
            <li className = "wiki-details">
                <a href = {link} className = "wiki-title">{title}</a>
                <br/>
                <a href = {link} className = "wiki-link">{link}</a>
                <p>{description}</p>
            </li>
        )
    }
}

export default UrlLoader