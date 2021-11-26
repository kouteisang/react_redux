import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add, sub, addAsync} from '../../redux/action/count'

class Count extends Component {

    add = ()=>{
        const {value} = this.selectNode
        const {add} = this.props
        add(parseInt(value))
    }

    sub = ()=>{
        const {value} = this.selectNode
        const {sub} = this.props
        sub(parseInt(value))
    }

    addOdd = ()=>{
        const {value} = this.selectNode
        const {count} = this.props
        const {add} = this.props
        if(count % 2 !== 0){
            add(parseInt(value))
        }
    }

    addAsync = ()=>{
        console.log('?')
        const {value} = this.selectNode
        const {addAsync} = this.props
        addAsync(parseInt(value), 500)
    }


    render() {
        const {count,peopleNumber} = this.props
        return (
            <div>
                <h2>当前数值为{count}</h2>
                <h2>当前人数为{peopleNumber}</h2>
                <select ref={selectNode=>{this.selectNode = selectNode}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.add}>ADD</button>&nbsp;
                <button onClick={this.sub}>SUB</button>&nbsp;
                <button onClick={this.addOdd}>ADD ODD</button>&nbsp;
                <button onClick={this.addAsync}>ADD ASYNC</button>&nbsp;
            </div>
        )
    }
}

export default connect(
    state => ({count:state.count, peopleNumber:state.people.length}),
    {
        add,
        sub,
        addAsync
    }
)(Count)