import React, {Component} from 'react'
import Distance from '../../Library/Distance'
import Point2D from '../../Library/Point2D'

const MIN = -20000
const MAX = 20000

class TwoD extends Component {
    constructor(props) {
        super(props)
        const a = new Point2D(10, 10)
        const b = new Point2D(80, 80)
        this.state = {
            first: {
                x: 10,
                y: 10
            },
            second: {
                x: 80,
                y: 80
            },
            result: Distance.Distance2D(a, b)
        }
        this.submitChange = this.submitChange.bind(this)
    }

    submitChange() {
        let fValue_x = document.getElementById('firstTwoD.x').value
        let fValue_y = document.getElementById('firstTwoD.y').value
        let sValue_x = document.getElementById('secondTwoD.x').value
        let sValue_y = document.getElementById('secondTwoD.y').value
        fValue_x = fValue_x > MAX ? MAX : fValue_x < MIN ? MIN : fValue_x;
        fValue_y = fValue_y > MAX ? MAX : fValue_y < MIN ? MIN : fValue_y;
        sValue_x = sValue_x > MAX ? MAX : sValue_x < MIN ? MIN : sValue_x;
        sValue_y = sValue_y > MAX ? MAX : sValue_y < MIN ? MIN : sValue_y;
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
                    <input type="number" min={MIN} max={MAX} name="firstTwoD.x" id="firstTwoD.x" placeholder="first.x" value={this.state.first.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min={MIN} max={MAX} name="firstTwoD.y" id="firstTwoD.y" placeholder="first.y" value={this.state.first.y} onChange={this.submitChange} />
                    <label>and</label>
                    <input type="number" min={MIN} max={MAX} name="secondTwoD.x" id="secondTwoD.x" placeholder="second.x" value={this.state.second.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min={MIN} max={MAX} name="secondTwoD.y" id="secondTwoD.y" placeholder="second.y" value={this.state.second.y} onChange={this.submitChange} />
                    <label>is</label>
                    {this.state.result}
                </div>
            </div>
        )
    }
}

export default TwoD
