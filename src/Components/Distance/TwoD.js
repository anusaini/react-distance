import React, {Component} from 'react'
import Distance from '../../Library/Distance'
import Point2D from '../../Library/Point2D'

class TwoD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: {
                x: 0,
                y: 0
            },
            second: {
                x: 0,
                y: 0
            },
            result: 0
        }
        this.submitChange = this.submitChange.bind(this)
    }

    submitChange() {
        const fValue_x = document.getElementById('firstTwoD.x').value
        const fValue_y = document.getElementById('firstTwoD.y').value
        const sValue_x = document.getElementById('secondTwoD.x').value
        const sValue_y = document.getElementById('secondTwoD.y').value
        const a = new Point2D(fValue_x, fValue_y)
        const b = new Point2D(sValue_x, sValue_y)
        this.setState(prev => ({
            first: {
                x: fValue_x, y: fValue_y
            },
            second: { x: sValue_x, y: sValue_y },
            result: Distance.Distance2D(a, b)
        }))
    }

    render() {
        return (
            <div className="two-d">
                <h3>Two Dimensional Distance</h3>
                <div>
                    <label>Distance between</label>
                    <input type="text" name="firstTwoD.x" id="firstTwoD.x" placeholder="first.x" value={this.state.first.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="text" name="firstTwoD.y" id="firstTwoD.y" placeholder="first.y" value={this.state.first.y} onChange={this.submitChange} />
                    <label>and</label>
                    <input type="text" name="secondTwoD.x" id="secondTwoD.x" placeholder="second.x" value={this.state.second.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="text" name="secondTwoD.y" id="secondTwoD.y" placeholder="second.y" value={this.state.second.y} onChange={this.submitChange} />
                    <label>is</label>
                    {this.state.result}
                </div>
            </div>
        )
    }
}

export default TwoD
