import React, {Component} from 'react'
import LatLong from '../../Library/LatLong'

class LatLongD extends Component {
    constructor(props) {
        super(props)
        const a = new LatLong(10, 10)
        const b = new LatLong(80, 80)
        this.state = {
            first: {
                lat: a.lat,
                long: a.long
            },
            second: {
                lat: b.lat,
                long: b.long
            },
            result: a.calculateDistance(b)
        }
        this.submitChange = this.submitChange.bind(this)
    }

    submitChange() {
        let fValue_lat = document.getElementById('first.lat').value
        let fValue_long = document.getElementById('first.long').value
        let sValue_lat = document.getElementById('second.lat').value
        let sValue_long = document.getElementById('second.long').value
        fValue_lat = fValue_lat > 180 ? 180 : fValue_lat < -180 ? -180 : fValue_lat;
        fValue_long = fValue_long > 180 ? 180 : fValue_long < -180 ? -180 : fValue_long;
        sValue_lat = sValue_lat > 180 ? 180 : sValue_lat < -180 ? -180 : sValue_lat;
        sValue_long = sValue_long > 180 ? 180 : sValue_long < -180 ? -180 : sValue_long;
        const a = new LatLong(fValue_lat, fValue_long)
        const b = new LatLong(sValue_lat, sValue_long)
        this.setState(prev => ({
            first: {
                lat: a.lat, long: a.long
            },
            second: { lat: b.lat, long: b.long },
            result: a.calculateDistance(b)
        }))
    }

    render() {
        return (
            <div className="two-d">
                <h3>Lat-Long Distance</h3>
                <div>
                    <label>Distance between</label>
                    <input type="number" min="-180" max="180" name="first.lat" id="first.lat" placeholder="first.lat" value={this.state.first.lat} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-180" max="180" name="first.long" id="first.long" placeholder="first.long" value={this.state.first.long} onChange={this.submitChange} />
                    <label>and</label>
                    <input type="number" min="-180" max="180" name="second.lat" id="second.lat" placeholder="second.lat" value={this.state.second.lat} onChange={this.submitChange} />
                    <label>,</label>
                    <input type="number" min="-180" max="180" name="second.long" id="second.long" placeholder="second.long" value={this.state.second.long} onChange={this.submitChange} />
                    <label>is</label>
                    {this.state.result} meters.
                </div>
            </div>
        )
    }
}

export default LatLongD
