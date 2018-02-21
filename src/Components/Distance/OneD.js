import React, {Component} from 'react'
import Distance from '../../Library/Distance'

class OneD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: 10,
            second: 80,
            result: Distance.Distance1D(10, 80)
        }
        this.submitChange = this.submitChange.bind(this)
    }

    submitChange() {
        const fValue = document.getElementById('first').value
        const sValue = document.getElementById('second').value
        this.setState(prev => ({
            first: fValue,
            second: sValue,
            result: Distance.Distance1D(fValue, sValue)
        }))
    }

    render() {
        return (
            <div className="one-d">
                <h3>One Dimensional Distance</h3>
                <div>
                    <label>Distance between</label>
                    <input type="text" name="first" id="first" placeholder="first" value={this.state.first} onChange={this.submitChange} />
                    <label>and</label>
                    <input type="text" name="second" id="second" placeholder="second" value={this.state.second} onChange={this.submitChange} />
                    <label>is</label>
                    {this.state.result}
                </div>
            </div>
        )
    }
}

export default OneD
