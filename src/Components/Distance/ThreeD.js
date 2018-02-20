import React, {Component} from 'react'
import Distance from '../../Library/Distance'
import Point3D from '../../Library/Point3D'

class ThreeD extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: {
                x: 0,
                y: 0,
                z: 0
            },
            second: {
                x: 0,
                y: 0,
                z: 0
            },
            result: 0
        }
        this.submitChange = this.submitChange.bind(this)
    }

    submitChange() {
        let fValue_x = document.getElementById('firstThreeD.x').value
        let fValue_y = document.getElementById('firstThreeD.y').value
        let fValue_z = document.getElementById('firstThreeD.z').value
        let sValue_x = document.getElementById('secondThreeD.x').value
        let sValue_y = document.getElementById('secondThreeD.y').value
        let sValue_z = document.getElementById('secondThreeD.z').value
        fValue_x = fValue_x > 20000 ? 20000 : fValue_x < -20000 ? -20000 : fValue_x;
        fValue_y = fValue_y > 20000 ? 20000 : fValue_y < -20000 ? -20000 : fValue_y;
        fValue_z = fValue_z > 20000 ? 20000 : fValue_z < -20000 ? -20000 : fValue_z;
        sValue_x = sValue_x > 20000 ? 20000 : sValue_x < -20000 ? -20000 : sValue_x;
        sValue_y = sValue_y > 20000 ? 20000 : sValue_y < -20000 ? -20000 : sValue_y;
        sValue_z = sValue_z > 20000 ? 20000 : sValue_z < -20000 ? -20000 : sValue_z;

        const a = new Point3D(fValue_x, fValue_y, fValue_z)
        const b = new Point3D(sValue_x, sValue_y, sValue_z)
        
        this.setState(prev => ({
            first: { x: fValue_x, y: fValue_y, z: fValue_z },
            second: { x: sValue_x, y: sValue_y, z: sValue_z },
            result: Distance.Distance3D(a, b)
        }))
    }

    render() {
        return (
            <div className="two-d">
                <h3>Three Dimensional Distance</h3>
                <div>
                    <label>Distance between</label>
                    <input type="number" min="-20000" max="20000" name="firstThreeD.x" id="firstThreeD.x" placeholder="first.x" value={this.state.first.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-20000" max="20000" name="firstThreeD.y" id="firstThreeD.y" placeholder="first.y" value={this.state.first.y} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-20000" max="20000" name="firstThreeD.z" id="firstThreeD.z" placeholder="first.z" value={this.state.first.z} onChange={this.submitChange} />
                    <label>and</label>
                    <input type="number" min="-20000" max="20000" name="secondThreeD.x" id="secondThreeD.x" placeholder="second.x" value={this.state.second.x} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-20000" max="20000" name="secondThreeD.y" id="secondThreeD.y" placeholder="second.y" value={this.state.second.y} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-20000" max="20000" name="secondThreeD.z" id="secondThreeD.z" placeholder="second.z" value={this.state.second.z} onChange={this.submitChange} />
                    <label>is</label>
                    {this.state.result}
                </div>
            </div>
        )
    }
}

export default ThreeD
